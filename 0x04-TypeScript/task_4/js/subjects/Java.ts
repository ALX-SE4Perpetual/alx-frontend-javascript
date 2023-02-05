/// <reference path="./Teacher.ts"/>
namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }

    export class Java extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }
        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingJava === null || this.teacher.experienceTeachingJava === undefined) {
                return 'No available teacher';
            }
            else {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
        }   
    }
}