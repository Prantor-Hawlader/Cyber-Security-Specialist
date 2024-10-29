"use client";

import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from "recharts";
import { ChevronDown, ChevronUp, Save, Trash2 } from "lucide-react";
import { Button } from "@nextui-org/button";
import { IconBug, IconNotesOff } from "@tabler/icons-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const questions = [
  {
    name: "Documentation",
    question: "Is the code well-documented?",
    subSections: [
      {
        name: "Inline Documentation",
        subQuestions: [
          { keyword: "Clarity" },
          { keyword: "Consistency" },
          { keyword: "Necessity" },
        ],
      },
      {
        name: "Function Documentation",
        subQuestions: [
          { keyword: "Completeness" },
          { keyword: "Parameters" },
          { keyword: "Return Values" },
        ],
      },
      {
        name: "Project Documentation",
        subQuestions: [
          { keyword: "README" },
          { keyword: "Setup Instructions" },
          { keyword: "Contribution Guidelines" },
        ],
      },
    ],
  },
  {
    name: "Testing",
    question: "Are all tests passing?",
    subSections: [
      {
        name: "Unit Testing",
        subQuestions: [
          { keyword: "Coverage" },
          { keyword: "Quality" },
          { keyword: "Maintenance" },
        ],
      },
      {
        name: "Integration Testing",
        subQuestions: [
          { keyword: "Scope" },
          { keyword: "Environment" },
          { keyword: "Data" },
        ],
      },
      {
        name: "End-to-End Testing",
        subQuestions: [
          { keyword: "User Flows" },
          { keyword: "Browser Compatibility" },
          { keyword: "Performance" },
        ],
      },
    ],
  },
  // Add more main questions here...
];

type Answer = "passed" | "issue" | "n/a" | null;

type SavedState = {
  name: string;
  answers: Answer[][][];
  passedPercentage: number;
  issueQuestions: string[];
  naQuestions: string[];
};

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
    props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        endAngle={endAngle}
        fill={fill}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        stroke="currentColor"
        strokeWidth={2}
      />
      <Sector
        cx={cx}
        cy={cy}
        endAngle={endAngle}
        fill={fill}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        stroke="currentColor"
        strokeWidth={2}
      />
    </g>
  );
};

export default function Sample() {
  const [answers, setAnswers] = useState<Answer[][][]>(
    questions.map((q) => q.subSections.map(() => [null, null, null]))
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [openSubSections, setOpenSubSections] = useState<boolean[][]>(
    questions.map((q) => q.subSections.map(() => false))
  );
  const [savedStates, setSavedStates] = useState<SavedState[]>([]);
  const [newStateName, setNewStateName] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const savedStatesFromStorage = localStorage.getItem("savedStates");

    if (savedStatesFromStorage) {
      setSavedStates(JSON.parse(savedStatesFromStorage));
    }
  }, []);

  const handleAnswerChange = (
    questionIndex: number,
    subSectionIndex: number,
    subQuestionIndex: number,
    value: Answer
  ) => {
    const newAnswers = [...answers];

    newAnswers[questionIndex][subSectionIndex][subQuestionIndex] = value;
    setAnswers(newAnswers);
  };

  const toggleSubSection = (questionIndex: number, subSectionIndex: number) => {
    const newOpenSubSections = [...openSubSections];

    newOpenSubSections[questionIndex][subSectionIndex] =
      !newOpenSubSections[questionIndex][subSectionIndex];
    setOpenSubSections(newOpenSubSections);
  };

  const flatAnswers = answers.flat(2);
  const totalQuestions = flatAnswers.length;
  const passedQuestions = flatAnswers.filter(
    (answer) => answer === "passed"
  ).length;
  const passedPercentage = (passedQuestions / totalQuestions) * 100;

  const chartData = [
    { name: "Passed", value: passedPercentage },
    { name: "Not Passed", value: 100 - passedPercentage },
  ];

  const issueQuestions = questions.flatMap((q, i) =>
    q.subSections.flatMap((ss, j) =>
      ss.subQuestions
        .filter((_, k) => answers[i][j][k] === "issue")
        .map((sq) => sq.keyword)
    )
  );
  const naQuestions = questions.flatMap((q, i) =>
    q.subSections.flatMap((ss, j) =>
      ss.subQuestions
        .filter((_, k) => answers[i][j][k] === "n/a")
        .map((sq) => sq.keyword)
    )
  );

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const saveCurrentState = () => {
    if (newStateName.trim() === "") return;

    const newState: SavedState = {
      name: newStateName,
      answers: answers,
      passedPercentage: passedPercentage,
      issueQuestions: issueQuestions,
      naQuestions: naQuestions,
    };

    const updatedSavedStates = [...savedStates, newState];

    setSavedStates(updatedSavedStates);
    localStorage.setItem("savedStates", JSON.stringify(updatedSavedStates));

    setNewStateName("");
    setIsDialogOpen(false);
  };

  const loadSavedState = (state: SavedState) => {
    setAnswers(state.answers);
    setActiveIndex(0);
  };

  const deleteSavedState = (index: number) => {
    const updatedSavedStates = savedStates.filter((_, i) => i !== index);

    setSavedStates(updatedSavedStates);
    localStorage.setItem("savedStates", JSON.stringify(updatedSavedStates));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Passed Percentage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 text-black dark:text-white">
              <ResponsiveContainer height="100%" width="100%">
                <PieChart>
                  <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    cx="50%"
                    cy="50%"
                    data={chartData}
                    dataKey="value"
                    fill="#22c55e"
                    innerRadius={60}
                    outerRadius={80}
                    stroke="currentColor"
                    strokeWidth={2}
                    onMouseEnter={onPieEnter}
                  >
                    <Cell key="cell-0" fill="#22c55e" />
                    <Cell key="cell-1" fill="#e5e7eb" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-2xl font-bold mt-4">
              {passedPercentage > 0 ? (
                <span className="text-[#22c55e]">
                  {passedQuestions} / {totalQuestions} Passed (
                  {passedPercentage.toFixed(0)}%)
                </span>
              ) : (
                "No selections made"
              )}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Issues</CardTitle>
          </CardHeader>
          <CardContent className="h-[200px] overflow-y-auto">
            {issueQuestions.length > 0 ? (
              <div className="space-y-2">
                {issueQuestions.map((q, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <IconBug className="h-5 w-5 flex-shrink-0 text-red-500" />
                    <span>{q}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p>No issues reported.</p>
            )}
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Not Applicable</CardTitle>
          </CardHeader>
          <CardContent className="h-[200px] overflow-y-auto">
            {naQuestions.length > 0 ? (
              <div className="space-y-2">
                {naQuestions.map((q, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <IconNotesOff className="h-5 w-5 text-cyan-500" />
                    <span>{q}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p>No items marked as N/A.</p>
            )}
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              Saved States
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="sm" variant="ghost">
                    <Save className="h-4 w-4 mr-2" />
                    Save Current State
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Save Current State</DialogTitle>
                  </DialogHeader>
                  <div className="flex items-center space-x-2">
                    <Input
                      placeholder="Enter state name"
                      value={newStateName}
                      onChange={(e) => setNewStateName(e.target.value)}
                    />
                    <Button onClick={saveCurrentState}>Save</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[200px] overflow-y-auto">
            {savedStates.length > 0 ? (
              <div className="space-y-2">
                {savedStates.map((state, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <Button
                      className="w-full justify-start mr-2"
                      variant="ghost"
                      onClick={() => loadSavedState(state)}
                    >
                      {state.name} -{state.passedPercentage.toFixed(0)}% Passed
                    </Button>
                    <Button
                      className="flex-shrink-0"
                      size="sm"
                      variant="ghost"
                      onClick={() => deleteSavedState(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete saved state</span>
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <p>No saved states.</p>
            )}
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Code Review Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion collapsible className="w-full" type="single">
            {questions.map((question, questionIndex) => (
              <AccordionItem
                key={questionIndex}
                value={`item-${questionIndex}`}
              >
                <AccordionTrigger>{question.question}</AccordionTrigger>
                <AccordionContent>
                  {question.subSections.map((subSection, subSectionIndex) => (
                    <div key={subSectionIndex} className="mb-4">
                      <button
                        className="flex items-center justify-between w-full text-left font-semibold py-2 px-4 rounded-md border border-cyan-500 transition-colors"
                        onClick={() =>
                          toggleSubSection(questionIndex, subSectionIndex)
                        }
                      >
                        <span>{subSection.name}</span>
                        {openSubSections[questionIndex][subSectionIndex] ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                      {openSubSections[questionIndex][subSectionIndex] && (
                        <div className="mt-2 ml-4 space-y-4">
                          {subSection.subQuestions.map(
                            (subQuestion, subQuestionIndex) => (
                              <div key={subQuestionIndex}>
                                <p className="font-medium mb-1">
                                  {subQuestion.keyword}
                                </p>
                                <RadioGroup
                                  value={
                                    answers[questionIndex][subSectionIndex][
                                      subQuestionIndex
                                    ] || undefined
                                  }
                                  onValueChange={(value) =>
                                    handleAnswerChange(
                                      questionIndex,
                                      subSectionIndex,
                                      subQuestionIndex,
                                      value as Answer
                                    )
                                  }
                                >
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                      id={`passed-${questionIndex}-${subSectionIndex}-${subQuestionIndex}`}
                                      value="passed"
                                    />
                                    <Label
                                      htmlFor={`passed-${questionIndex}-${subSectionIndex}-${subQuestionIndex}`}
                                    >
                                      Passed
                                    </Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                      id={`issue-${questionIndex}-${subSectionIndex}-${subQuestionIndex}`}
                                      value="issue"
                                    />
                                    <Label
                                      htmlFor={`issue-${questionIndex}-${subSectionIndex}-${subQuestionIndex}`}
                                    >
                                      Issue
                                    </Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                      id={`na-${questionIndex}-${subSectionIndex}-${subQuestionIndex}`}
                                      value="n/a"
                                    />
                                    <Label
                                      htmlFor={`na-${questionIndex}-${subSectionIndex}-${subQuestionIndex}`}
                                    >
                                      N/A
                                    </Label>
                                  </div>
                                </RadioGroup>
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
