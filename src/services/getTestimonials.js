import axios from "axios";

const fetchTestimonials = async () => {
    const professions = ['Product Designer', 'Front End Developer', 'UI Designer', 'CTO'];

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

        return updatedTestimonials;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export default fetchTestimonials;
