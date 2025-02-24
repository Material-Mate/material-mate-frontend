"use client";
import Tab from "@/components/ui/Tab";
import { mbaNotes, mcaNotes,semesters } from "@/data/dummy";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SubjectCard from "@/components/shared/cards/SubjectCard";
import { SubjectDrawer } from "@/components/shared/Drawer";
import { fadeInCardAnimation } from "@/animations/FadeIn";
import { MiniSignUpCmp } from "@/components/shared/MiniSignUpCmp";


interface NotesProps {
  mcaNotes: Note[];
  mbaNotes: Note[];
}

const Notes: React.FC<NotesProps> = () => {
  const [selectedTab, setSelectedTab] = useState<string>("MCA");
  const [isDrawerOpen,setIsDrawerOpen] = useState<boolean>(false);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  const getNotesForTab = (tab: string) => {
    return tab === "MCA" ? mcaNotes : mbaNotes;
  };

  return (
    <div className="py-5 px-5 sm:px-10 md:px-28">
      {/* Tabs */}
      <div className="flex justify-between items-center">
        <Tab
          selectedTab={selectedTab}
          handleTabClick={handleTabClick}
          tab1="MCA"
          tab2="MBA"
        />
        <SubjectDrawer open={isDrawerOpen} onChange={setIsDrawerOpen}/>
      </div>

      {/* Notes */}
      <div className="py-6 rounded-lg shadow-md">
        <h2 className="text-3xl md:text-2xl font-semibold mb-4">
          {selectedTab} Notes - All Semesters
        </h2>
        <div className=" flex justify-center md:py-0 py-10 md:justify-start items-center gap-5 flex-wrap">
          {getNotesForTab(selectedTab).map((note, index) => (
             <SubjectCard animation={fadeInCardAnimation} index={index} key={index} course={`${selectedTab=="MCA"?"MCA":"MBA"}`} subject="Testing Subject Notes" onclick={setIsDrawerOpen} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;
