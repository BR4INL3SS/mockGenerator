export interface Student extends User {
   /** @mockType {random.number(100000)} */
   id: number,
   gpa: 1.0 | 2.0 | 3.0 | 4.0,
}

export interface Professor extends User {
   /** @mockType {random.number(100000)} */
   id: number,
   assignedCourses: Course[],
}

export interface Course {
   courseCode: string,
   /** @mockType {random.number(10)} */
   section: number,
}

export interface User {
   firstName: string;
   lastName: string;
   username: string;
   emailAddress: string;
   classification: "Freshman" | "Sophomore" | "Junior" | "Senior",
   housing: "AUI CAMPUS" | "FARAH INN" | "DOWNTOWN",
}

export interface Class extends Course{
   professor: Professor,
   students: Student[]
}