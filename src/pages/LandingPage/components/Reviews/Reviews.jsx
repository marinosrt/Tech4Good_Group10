import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Avatar, StyledLine } from "./Reviews.style";

const Reviews = () => {
    const [testimonials, setTestimonials] = useState([]);
    const professions = ['Product Designer', 'Front End Developer', 'UI Designer', 'CTO']


    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const tempTestimonials = [];
                for (let i = 0; i < 3; i++) {
                    const { data } = await axios.get(`https://randomuser.me/api`);
                    tempTestimonials.push(...data.results);
                }

                const updatedTestimonials = await Promise.all(
                    tempTestimonials.map(async (testimonial) => {
                        const { data } = await axios.get(
                            `https://jsonplaceholder.typicode.com/comments`
                        );
                        const randomCommentIndex = Math.floor(Math.random() * data.length);
                        const randomProfessionIndex = Math.floor(Math.random() * professions.length);

                        return {
                            ...testimonial,
                            comments: data[randomCommentIndex].body,
                            profession: professions[randomProfessionIndex],
                        };
                    })
                );
                setTestimonials(updatedTestimonials);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTestimonials();
    }, []);


    return (
        <section>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {testimonials.map((testimonial, id) => (
                        <div key={id} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <Avatar
                                    alt="avatar"
                                    src={testimonial.picture.medium}
                                />
                                <p>{testimonial.comments}</p>
                                <StyledLine></StyledLine>
                                <h4>{testimonial.name.first} {testimonial.name.last}</h4>
                                <p>{testimonial.profession}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
