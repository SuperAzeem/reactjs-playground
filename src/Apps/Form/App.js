import React from 'react';

export default function App() {

    const [formData, setFormData] = React.useState(
        {
            firstname:      '',
            lastname:       '',
            email:          '',
            isFriendly:     false,
            employed:       '',
            favColor:       '',
        }
    )

    // console.log(formData)

    function changeHanlder(event) {
        const {name, value, type, checked, selected} = event.target;
        // console.log (type, value);

        setFormData(prevFormData => ({
                ...prevFormData,
                [name]: type == "checkbox" ? checked : value
            })
        )
    }

    function formSubmitHandler(e) {
        e.preventDefault();
        console.log(formData)

        if (formData.firstname == formData.lastname) {
            console.log("Cheating not allowed!");
        }
        
        if (formData.isFriendly) {
            console.log("Its nice to know that you're friendly!");
        }
        

    }

    return (
        <div>
            <form onChange={changeHanlder} onSubmit={formSubmitHandler}>
                <input type='text' name='firstname' placeholder='First name' value={formData.firstname} />
                <input type='text' name='lastname' placeholder='Last name' value={formData.lastname}/>
                <input type='text' name='email' placeholder='Email Address' value={formData.email}/>
                <input type='checkbox' name='isFriendly' checked={formData.isFriendly} /> Are you friendly?
                <input type='radio' name='employed' checked={formData.employed == "employed"} value="employed"/> Employed
                <input type='radio' name='employed' checked={formData.employed == "un-employed"} value="un-employed" /> Un-Employed
                <label htmlFor='favColor'>What is your favorite color?</label>
                <select id='favColor' name='favColor'>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="purple">Purple</option>
                </select>
                <button>Submit</button>
            </form>
        </div>
    )
}