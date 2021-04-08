import { Component } from "@angular/core";
import { Course } from "./course";



@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'

})

export class CourseListComponent {

    courses: Course[] = [];
    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'angular: Forms',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 5.4
            },
            {
                id: 2,
                name: 'angular: HTTP',
                imageUrl: '',
                price: 9.99,
                code: 'LKL-1094',
                duration: 80,
                rating: 4
            }
        ]
    }

}

