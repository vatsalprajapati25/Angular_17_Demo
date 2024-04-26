import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [],
  templateUrl: './for.component.html',
  styleUrl: './for.component.scss'
})
export class ForComponent {
  data = [
    { id: 1, name: 'John Doe', occupation: 'Software Engineer', city: 'New York', gender: 'male' },
    { id: 2, name: 'Jane Smith', occupation: 'Doctor', city: 'Los Angeles', gender: 'female' },
    { id: 3, name: 'Aisha Khan', occupation: 'Marketing Manager', city: 'London', gender: 'female' },
    { id: 4, name: 'Pedro Rodriguez', occupation: 'Web Developer', city: 'Madrid', gender: 'male' },
    { id: 5, name: 'Li Wang', occupation: 'Data Analyst', city: 'Shanghai', gender: 'female' },
    { id: 6, name: 'Maria Garcia', occupation: 'Teacher', city: 'Mexico City', gender: 'female' },
    { id: 7, name: 'Ahmed Hassan', occupation: 'Architect', city: 'Cairo', gender: 'male' },
    { id: 8, name: 'Natalia Petrova', occupation: 'Accountant', city: 'Moscow', gender: 'female' },
    { id: 9, name: 'Kim Min-soo', occupation: 'Graphic Designer', city: 'Seoul', gender: 'male' },
    { id: 10, name: 'David Müller', occupation: 'Mechanical Engineer', city: 'Berlin', gender: 'male' },
    { id: 11, name: 'Isabelle Dubois', occupation: 'Project Manager', city: 'Paris', gender: 'female' },
    { id: 12, name: 'Omar Ahmed', occupation: 'Investment Banker', city: 'Dubai', gender: 'male' },
    { id: 13, name: 'Fiorella Rossi', occupation: 'Fashion Designer', city: 'Milan', gender: 'female' },
    { id: 14, name: 'Paulo Santos', occupation: 'Civil Engineer', city: 'Rio de Janeiro', gender: 'male' },
    { id: 15, name: 'Anna Schmidt', occupation: 'Nurse', city: 'Frankfurt', gender: 'female' },
    { id: 16, name: 'Chen Lin', occupation: 'Software Developer', city: 'Beijing', gender: 'female' },
    { id: 17, name: 'Miguel Hernandez', occupation: 'Lawyer', city: 'Barcelona', gender: 'male' },
    { id: 18, name: 'Sarah Jones', occupation: 'Marketing Specialist', city: 'Toronto', gender: 'female' },
    { id: 19, name: 'Katsuro Tanaka', occupation: 'Sales Manager', city: 'Tokyo', gender: 'male' },
    { id: 20, name: 'Emily Garcia', occupation: 'Web Developer', city: 'Austin', gender: 'female' },
  ];
}
