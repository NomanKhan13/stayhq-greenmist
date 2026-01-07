"use client";

import * as React from "react";
import { Check, ChevronsUpDown, InfoIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { updateProfileAction } from "../_lib/actions";
import { useFormStatus } from "react-dom";

export function PersonalInformation({ guest, countries }) {
  const { fullName, email, nationalID, nationality } = guest;

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(nationality);
  return (
    <form className="grid w-full gap-4" action={updateProfileAction}>
      <InputGroup className="rounded cursor-not-allowed">
        <InputGroupInput
          id="fullname"
          name="fullname"
          defaultValue={fullName}
          disabled
          className="rounded-b autofill:bg-muted!"
          placeholder="John Doe"
        />
        <InputGroupAddon align="block-start">
          <Label htmlFor="fullname" className="text-foreground">
            Full name
          </Label>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className="rounded cursor-not-allowed">
        <InputGroupInput
          id="email"
          name="email"
          defaultValue={email}
          disabled
          className="rounded-b"
          placeholder="johndoe1@gmail.com"
        />
        <InputGroupAddon align="block-start">
          <Label htmlFor="email" className="text-foreground">
            Email
          </Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupButton
                variant="ghost"
                aria-label="Help"
                className="ml-auto rounded-full"
                size="icon-xs"
              >
                <InfoIcon />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>
              <p>We&apos;ll use this to send you reservation details</p>
            </TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
      <InputGroupInput type="hidden" value={value} name="nationality" />

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="justify-between rounded"
          >
            {value
              ? countries.find((country) => country.value === value)?.label
              : "Where are you from?..."}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Command>
            <CommandInput placeholder="Search country..." className="h-9" />
            <CommandList>
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {countries.map((country) => (
                  <CommandItem
                    key={country.value}
                    value={country.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    {country.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        value === country.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <InputGroup className="rounded">
        <InputGroupInput
          className="rounded-b"
          id="nationalID"
          name="nationalID"
          defaultValue={nationalID}
          placeholder="5341 2671 2761"
        />
        <InputGroupAddon align="block-start">
          <Label htmlFor="nationalID" className="text-foreground">
            National ID number
          </Label>
        </InputGroupAddon>
      </InputGroup>
      <SubmitButon updatingText="Updating...">Update profile</SubmitButon>
    </form>
  );
}

export function SubmitButon({ updatingText, children }) {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      className="rounded-none py-6 w-full max-w-40 ml-auto mt-4 cursor-pointer disabled:cursor-not-allowed"
    >
      {pending ? updatingText : children}
    </Button>
  );
}
