"use client"
import Tab from '@/components/ui/Tab';
import semesters, { mbaNotes, mcaNotes } from '@/data/dummy';
import { Note } from '@/types/types';
import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


interface NotesProps {
  mcaNotes: Note[];
  mbaNotes: Note[];
}

const Notes: React.FC<NotesProps> = () => {
  const [selectedTab, setSelectedTab] = useState<string>('MCA');

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  const getNotesForTab = (tab: string) => {
    return tab === 'MCA' ? mcaNotes : mbaNotes;
  };

  return (
    <div className="py-5 px-28">
      {/* Tabs */}
     <div className='flex justify-between items-center'>
     <Tab selectedTab={selectedTab} handleTabClick={handleTabClick} tab1='MCA' tab2='MBA'/> 
     <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select Semester" className="text-xl" />
  </SelectTrigger>
  <SelectContent className="bg-black text-white">
    <SelectGroup>
      <SelectLabel>Semesters</SelectLabel>
      {semesters.map((semester) => (
        <SelectItem
          key={semester.value}
          value={semester.value.toString()}
          className="hover:bg-gradient-to-r from-indigo-400 to-purple-500 cursor-pointer data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-indigo-400 data-[state=checked]:to-purple-500"
        >
          {semester.label}
        </SelectItem>
      ))}
    </SelectGroup>
  </SelectContent>
</Select>

     </div>

      {/* Notes */}
      <div className="bg-black text-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          {selectedTab} Notes - All Semesters
        </h2>
        <div className="space-y-4">
          {getNotesForTab(selectedTab).map((note, index) => (
            <div key={index} className="p-4 border-b border-gray-700">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">{note.semester}</span>
                <a
                  href={note.notesLink}
                  className="text-purple-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Notes
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;
