"use client";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { ChevronDown, ChevronUp, Copy, Check } from "lucide-react";
import { Program } from "@prisma/client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

type Props = {
  program: Program;
};
export default function ProgramCard({ program }: Props) {
  const [isInScopeExpanded, setIsInScopeExpanded] = useState(true);
  const [isOutOfScopeExpanded, setIsOutOfScopeExpanded] = useState(true);
  const { toast } = useToast();

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  };

  const copyToClipboard = (text: string[]) => {
    navigator.clipboard
      .writeText(text.join(", "))
      .then(() => {
        toast({
          title: "Copied to clipboard",
          description: "The content has been copied to your clipboard.",
          duration: 2000,
        });
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const ScopeCard = ({
    title,
    content,
    isExpanded,
    setIsExpanded,
    bgColor,
    itemBgColor,
    itemTextColor,
  }: {
    title: string;
    content: string[];
    isExpanded: boolean;
    setIsExpanded: (value: boolean) => void;
    bgColor: string;
    itemBgColor: string;
    itemTextColor: string;
  }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
      copyToClipboard(content);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    };

    return (
      <Card className="overflow-hidden">
        <CardHeader
          className={`flex flex-row items-center justify-between p-2 ${bgColor}`}
        >
          <CardTitle className="text-sm font-medium text-white">
            {title}
          </CardTitle>
          <div className="flex items-center space-x-4">
            {isCopied ? (
              <Check className="h-5 w-5  cursor-pointer" onClick={handleCopy} />
            ) : (
              <Copy
                className="h-5 w-5 cursor-pointer text-gray-600"
                onClick={handleCopy}
              />
            )}

            {isExpanded ? (
              <ChevronUp
                className="h-5 w-5 cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
              />
            ) : (
              <ChevronDown
                className="h-5 w-5 cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
              />
            )}
          </div>
        </CardHeader>
        {isExpanded && (
          <CardContent className="p-2 bg-gray-900">
            <div className="flex flex-wrap gap-2">
              {content.map((item, index) => (
                <div
                  key={index}
                  className={`inline-block ${itemBgColor} ${itemTextColor} p-2 rounded`}
                >
                  {item}
                </div>
              ))}
            </div>
          </CardContent>
        )}
      </Card>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="overflow-hidden">
        <header className="bg-gray-900 p-4 flex items-center">
          <div className="flex items-center space-x-3">
            <Avatar
              className="h-12 w-12 transition-transform group-hover:scale-110"
              style={{
                backgroundColor: getRandomColor(), // Random background color
              }}
            >
              {program?.image && (
                <AvatarImage alt={program?.name} src={program?.image} />
              )}
              <AvatarFallback>{program?.name.substring(0, 1)}</AvatarFallback>
            </Avatar>

            <h1 className="text-white text-xl font-semibold">
              {program?.name}
            </h1>
          </div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <div className="col-span-1 md:col-span-2">
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {program?.summary}
              </p>
            </CardContent>
            <CardHeader>
              <CardTitle>References</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>
                  <a
                    className="text-blue-500 hover:underline"
                    href={`https://${program?.reference}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {program?.reference}
                  </a>
                </li>
              </ul>
            </CardContent>
          </div>

          <div className="col-span-1 space-y-4">
            <a
              href={`https://${program?.link}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                Submission Assistance
              </Button>
            </a>

            <ScopeCard
              bgColor="bg-teal-500"
              content={program?.inScope}
              isExpanded={isInScopeExpanded}
              itemBgColor="bg-blue-900"
              itemTextColor="text-blue-100"
              setIsExpanded={setIsInScopeExpanded}
              title="In Scope"
            />

            <ScopeCard
              bgColor="bg-red-700"
              content={program?.outScope}
              isExpanded={isOutOfScopeExpanded}
              itemBgColor="bg-red-900"
              itemTextColor="text-red-100"
              setIsExpanded={setIsOutOfScopeExpanded}
              title="Out of Scope"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
