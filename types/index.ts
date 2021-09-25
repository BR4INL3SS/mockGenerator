export interface User {
   firstName: string;
   lastName: string;
   username: string;
   emailAddress: string;
   classification: "Freshman" | "Sophomore" | "Junior" | "Senior",
   housing: "AUI CAMPUS" | "FARAH INN" | "DOWNTOWN",
}
export interface Student{
   profile: User,
   /** @mockType {random.number(100000)} */
   id: number,
   gpa: 1.0 | 2.0 | 3.0 | 4.0,
}

export interface Professor{
   profile: User,
   /** @mockType {random.number(100000)} */
   id: number,
   assignedCourses: Course[],
}

export interface Course {
   courseCode: 'SSE XXXX' | 'SHSS XXXX' | 'SBA XXXX',
   /** @mockType {random.number(10)} */
   section: number,
}

export interface Class extends Course{
   professor: Professor,
   students: Student[]
}