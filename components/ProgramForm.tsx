"use client";

import type { ActionMeta, MultiValue } from "react-select";

import React, { useRef, useState } from "react";
import { Input, Textarea } from "@nextui-org/input";
import toast from "react-hot-toast";
import CreatableSelect from "react-select/creatable";

import SubmitButton from "./SubmitButton";

import { createProgram } from "@/action/program";

interface Option {
  label: string;
  value: string;
}

export default function ProgramForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [mounted, setMounted] = useState(false);
  const [inScopeValues, setInScopeValues] = useState<MultiValue<Option>>([]);
  const [outScopeValues, setOutScopeValues] = useState<MultiValue<Option>>([]);
  const [rewardValues, setRewardValues] = useState<MultiValue<Option>>([]);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  const resetForm = () => {
    // Reset form fields
    if (formRef.current) {
      formRef.current.reset();
    }

    // Reset select values
    setInScopeValues([]);
    setOutScopeValues([]);
    setRewardValues([]);
  };
  const handleFormSubmit = async (formData: FormData) => {
    // Add the array values to FormData
    inScopeValues.forEach((value) => {
      formData.append("inScope", value.value);
    });

    outScopeValues.forEach((value) => {
      formData.append("outScope", value.value);
    });

    rewardValues.forEach((value) => {
      formData.append("rewards", value.value);
    });

    const res = await createProgram(formData);

    if (res?.status) {
      toast.success("Successfully created Program");
      resetForm();
    }
    if (res?.error) {
      toast.error(res.error);
    }
  };

  const handleSelectChange = (
    newValue: MultiValue<Option>,
    actionMeta: ActionMeta<Option>,
    setter: React.Dispatch<React.SetStateAction<MultiValue<Option>>>
  ) => {
    setter(newValue);
  };

  if (!mounted) {
    return null; // or a loading spinner
  }

  return (
    <form
      ref={formRef}
      action={handleFormSubmit}
      className="w-full mx-auto mt-8 space-y-6"
    >
      <Input
        isRequired
        className="mb-4"
        label="Company Name"
        name="name"
        size="sm"
        type="text"
      />

      <Input label="Upload image" name="image" type="file" />

      <Input
        className="mb-4"
        label="Submission Link"
        name="link"
        size="sm"
        type="text"
      />

      <Textarea label="Summary" name="summary" size="lg" />

      <Input
        className="mb-4"
        label="Reference Link"
        name="reference"
        size="sm"
        type="text"
      />

      <CreatableSelect<Option, true>
        key="in-scope-select"
        isMulti
        classNames={{
          control: () =>
            "border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500",
          input: () => "text-gray-800 dark:text-gray-200",
          option: ({ isFocused, isSelected }) =>
            `${isFocused ? "bg-gray-100 dark:bg-gray-700" : "bg-white dark:bg-gray-800"} ${
              isSelected
                ? "bg-blue-500 text-white"
                : "text-gray-800 dark:text-gray-200"
            }`,
          menu: () =>
            "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700",
          multiValue: () => "bg-blue-100 dark:bg-blue-800",
          multiValueLabel: () => "text-blue-800 dark:text-blue-200",
          multiValueRemove: () =>
            "text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-700",
        }}
        instanceId="in-scope-select"
        placeholder="Create In Scope Link"
        value={inScopeValues}
        onChange={(newValue, actionMeta) =>
          handleSelectChange(newValue, actionMeta, setInScopeValues)
        }
      />

      <CreatableSelect<Option, true>
        key="out-scope-select"
        isMulti
        classNames={{
          control: () =>
            "border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500",
          input: () => "text-gray-800 dark:text-gray-200",
          option: ({ isFocused, isSelected }) =>
            `${isFocused ? "bg-gray-100 dark:bg-gray-700" : "bg-white dark:bg-gray-800"} ${
              isSelected
                ? "bg-blue-500 text-white"
                : "text-gray-800 dark:text-gray-200"
            }`,
          menu: () =>
            "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700",
          multiValue: () => "bg-blue-100 dark:bg-blue-800",
          multiValueLabel: () => "text-blue-800 dark:text-blue-200",
          multiValueRemove: () =>
            "text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-700",
        }}
        instanceId="out-scope-select"
        placeholder="Create Out of Scope Link"
        value={outScopeValues}
        onChange={(newValue, actionMeta) =>
          handleSelectChange(newValue, actionMeta, setOutScopeValues)
        }
      />

      <CreatableSelect<Option, true>
        key="rewards-select"
        isMulti
        classNames={{
          control: () =>
            "border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500",
          input: () => "text-gray-800 dark:text-gray-200",
          option: ({ isFocused, isSelected }) =>
            `${isFocused ? "bg-gray-100 dark:bg-gray-700" : "bg-white dark:bg-gray-800"} ${
              isSelected
                ? "bg-blue-500 text-white"
                : "text-gray-800 dark:text-gray-200"
            }`,
          menu: () =>
            "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700",
          multiValue: () => "bg-blue-100 dark:bg-blue-800",
          multiValueLabel: () => "text-blue-800 dark:text-blue-200",
          multiValueRemove: () =>
            "text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-700",
        }}
        instanceId="rewards-select"
        placeholder="Create reward offers"
        value={rewardValues}
        onChange={(newValue, actionMeta) =>
          handleSelectChange(newValue, actionMeta, setRewardValues)
        }
      />

      <Input
        className="mb-4"
        label="Company Tag"
        name="tag"
        size="sm"
        type="text"
      />

      <SubmitButton className="" title="Creating">
        Create Program
      </SubmitButton>
    </form>
  );
}
