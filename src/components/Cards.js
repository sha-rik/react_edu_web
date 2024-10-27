// cards is bahar wala card
import react from 'react';
import Card from './Card';

function Cards({courses}) {

    let allcourses = [];

    const getCourses = () => {
        courses && Object.values(courses).forEach ( ( courseCatogary ) => {
            courseCatogary.forEach((course)=>
            {
                allcourses.push(course);
            })
        })
        return allcourses;
    }


    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            
            {getCourses().map((course)=>{
                return <Card key={course.id} course={course}/>
            })}
        </div>
    )
}

export default Cards;