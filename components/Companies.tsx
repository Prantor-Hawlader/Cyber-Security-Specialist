import Link from "next/link";
import { Program } from "@prisma/client";
import { Session } from "next-auth";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { title } from "./primitives";
import ProgramDelBtn from "./ProgramDelBtn";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  programs: Program[];
  session: Session;
};
export default function Companies({ programs, session }: Props) {
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          <h1 className={title({ color: "cyan" })}>Bug Bounty Programs</h1>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {programs.map((company: Program, index: number) => (
          <div key={index} className="flex items-center space-x-2">
            <Card
              key={index}
              className="flex-grow overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-lg group"
            >
              <Link href={`/programs/${company.id}`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar
                        className="h-12 w-12 transition-transform group-hover:scale-110"
                        style={{
                          backgroundColor: getRandomColor(), // Random background color
                        }}
                      >
                        {company.image && (
                          <AvatarImage alt={company.name} src={company.image} />
                        )}
                        <AvatarFallback>
                          {company.name.substring(0, 1)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {company.name}
                        </h3>
                        <span className="text-sm text-muted-foreground">
                          {company.tag}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2 items-end">
                      {company.rewards?.map((badge: any, badgeIndex: any) => (
                        <span
                          key={badgeIndex}
                          className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>

            {session && <ProgramDelBtn companyId={company.id} />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
