interface Note {
    course: string;
    semester: string;
    notesLink: string;
}
interface CSSubject{
  name:string,
  total_video_count:number,
  discription:string,
  videos_links:Lecture[],
  thumbnail:string,
  notes_link:string
}
interface Lecture{
  lecture_name:string,
  video_link:string
}  
interface WebDevelpoment{
  name:string,
  total_video_count:number,
  discription:string,
  videos_links:Lecture[],
  thumbnail:string,
  notes_link:string
}
interface AndroidDevelopment{
  name:string,
  total_video_count:number,
  discription:string,
  videos_links:Lecture[],
  thumbnail:string,
  notes_link:string
}