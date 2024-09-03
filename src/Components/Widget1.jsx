import '../styles.css';
import { useState } from 'react';
import Tab from './Tab';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ViewModuleSharpIcon from '@mui/icons-material/ViewModuleSharp';

export default function Widget1() {
    const [active, setActive] = useState('About Me');
    const data = {
        'About Me' : `Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now. I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. Balancing my career with family life is essential, and I’m grateful for the flexibility and support I’ve found at Salesforce that allows me to do just that. In my professional life, I’m passionate about building strong, long-lasting relationships with my clients. Over the years at Salesforce, I’ve honed my skills in helping businesses, from small startups to large enterprises, leverage our powerful CRM tools to achieve their goals. My focus is always on providing value and support that drives growth and builds lasting partnerships.`,
        'Experiences' : `Throughout my career at Salesforce, I’ve had the opportunity to work with a diverse range of clients, each with unique challenges and goals. One of the most rewarding experiences has been helping a mid-sized tech company streamline their sales processes. By implementing Salesforce’s CRM tools, I was able to assist them in increasing their lead conversion rate by 30% within the first year. Seeing the tangible impact of our solutions on their business growth was incredibly fulfilling and reinforced my passion for what I do. Another experience that stands out is working with a global retail brand that was struggling to unify their customer data across different markets. By collaborating closely with their team, I was able to customize a Salesforce solution that provided them with a single, integrated view of their customers. This not only improved their customer engagement but also led to a 20% increase in repeat sales. It’s experiences like these that drive me to continue learning and growing in my role, as I’m always eager to take on new challenges and help my clients succeed. In addition to these specific projects, I’ve also had the chance to mentor new sales representatives at Salesforce. Sharing my knowledge and helping others develop their skills has been a fulfilling aspect of my role. It’s rewarding to see my colleagues thrive and to contribute to the overall success of our team. These experiences have shaped me into a more well-rounded sales professional, and I’m excited to continue building on them as I move forward in my career.`,
        'Recommended' : ''
    };

    function handleClick(content) {
        setActive(content);
    }
    
    return (    
        <div className='flex flex-col container mr-4 md:mr-10 lg:mr-12 mt-12 lg:mt-16 py-0.5 px-1.5 rounded-xl'>
            <div className='flex mt-3'>  
                <div className='flex-1 icon-container'>
                    <HelpOutlineOutlinedIcon className='help-icon'/>
                </div>

                <div className='flex-auto'> 
                    <div className='tabs flex p-1 ml-4 lg:ml-2 rounded-2xl'>
                        <Tab active={active} content='About Me' handleClick={handleClick}/> 
                        <Tab active={active} content='Experiences' handleClick={handleClick}/> 
                        <Tab active={active} content='Recommended' handleClick={handleClick}/> 
                    </div>
                </div>
            </div>

            <div className='flex mb-3'>
                <div className='flex-auto icon-container mt-12'>
                    <ViewModuleSharpIcon className='rotate-90 grid-icon'/>
                </div>  
                
                <div className='flex-auto pt-5 ml-5'>
                <div className='scrollbar overflow-auto'>
                <p className='content text-left'> {data[active]}</p>
                </div>
                </div>
            </div>


        </div>
    );
}