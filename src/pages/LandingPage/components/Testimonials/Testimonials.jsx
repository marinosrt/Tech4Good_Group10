import React from "react";
import { useEffect, useState } from "react";
import fetchTestimonials from "services/getTestimonials";
import { Avatar, StyledLine } from "./Testimonials.style";

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const updatedTestimonials = await fetchTestimonials();
            setTestimonials(updatedTestimonials);
        };

        fetchData();
    }, []);

    return (
        <section>
            <div className="container px-5 pt-20 pb-12 mx-auto">
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

export default Testimonials;
