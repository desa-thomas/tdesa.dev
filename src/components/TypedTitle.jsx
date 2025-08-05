import { useEffect, useState } from "react";

export default function TypedTitle( {name} )
{
    const fulltext =  name; 
    const typeSpeed = 100; 
    const delSpeed = 50; 
    const waitTime = 10000; 
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    
    useEffect( ()=> {
        let i = 0;
        let interval;

        const startTyping = () => {
            setIsTyping(true);
            interval = setInterval(() => {
                i++;
                setText(fulltext.slice(0, i));

                //when done typing, wait, then delete
                if(i=== fulltext.length){
                    clearInterval(interval); 
                    setTimeout(startDeleting, waitTime ); 
                }
            }, typeSpeed);
        }

        const startDeleting = () => {
            setIsTyping(false);
            interval = setInterval( ()=>{
                i--;
                setText(fulltext.slice(0, i));
                if (i === 0 ){
                    clearInterval(interval);
                    setTimeout(startTyping, 1000); 
                }
            }, delSpeed); 
        }

        startTyping(); 

        return ()=> clearInterval(interval); 
    }, []); 

    return (
         <div className="terminal">
          <span className="prompt">$</span> <span className="title">{text}</span> <span className="cursor"></span>
          </div>
    )
}