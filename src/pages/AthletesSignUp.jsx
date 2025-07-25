import React, { useState } from 'react';
import { Stepper } from 'react-form-stepper';
import Signup1 from '../components/signupform/signup1';
import Signup2 from '../components/signupform/signup2';
import Signup3 from '../components/signupform/signup3';
import Signup4 from '../components/signupform/signup4';
import Signup5 from '../components/signupform/signup5';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AthletesSignUp = () => {
    const navigate = useNavigate()

    const [activeStep, setActiveStep] = useState(0);
    const [allData, setAllData] = useState(null)
    const [loading, setLoading] = useState(false)


    const createAthlete = async (athleteData) => {
        try {
            const response = await fetch('https://hometown.eagleeblaze.com/public/api/create-athlete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add Authorization token here if needed
                    // 'Authorization': 'Bearer YOUR_TOKEN'
                },
                body: JSON.stringify(athleteData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to create athlete');
            }

            console.log('Athlete Created:', data);
            return data;
        } catch (error) {
            console.error('Error creating athlete:', error);
            throw error;
        }
    };


    const onSubmit = (data) => {
        setLoading(true);
        createAthlete(data)
            .then((response) => {
                console.log(response);

                if (response?.status) {
                    // ✅ Save session data
                    localStorage.setItem("athleteUser", JSON.stringify({
                        name: data.name,
                        email: data.email,
                        id: response?.data?.id || null, // adjust based on actual API response
                    }));

                    setActiveStep(0);
                    toast?.success(response?.message);
                    navigate('/athlete/dashboard');
                }
            })
            .catch((error) => {
                console.log('error: ', error);
                toast.error("Signup failed");
            })
            .finally(() => {
                setLoading(false);
            });

        console.log('Finish:', data);
    };



    const stepForm = [
        {
            id: 1,
            component: (
                <>
                    <Signup1 next={() => setActiveStep(prev => prev + 1)} setData={setAllData} />
                </>
            ),
        },
        {
            id: 2,
            component: (
                <>
                    <Signup2 setData={setAllData} next={() => setActiveStep(prev => prev + 1)} goBack={() => setActiveStep(prev => prev - 1)} />
                </>
            ),
        },
        {
            id: 3,
            component: (
                <Signup3 setData={setAllData} next={() => setActiveStep(prev => prev + 1)} goBack={() => setActiveStep(prev => prev - 1)} />
            ),
        },
        {
            id: 4,
            component: (
                <>
                    <Signup4 setData={setAllData} next={() => setActiveStep(prev => prev + 1)} goBack={() => setActiveStep(prev => prev - 1)} />
                </>
            )
        },
        {
            id: 5,
            component: (
                <Signup5 data={allData} onFinish={() => onSubmit(allData)} goBack={() => setActiveStep(prev => prev - 1)} loading={loading} />
            ),
        },
    ];

    return (
        <>
            <section className='h-[80dvh] bg-[url("/contract.jpeg")] bg-contain bg-center bg-no-repeat'>
                <div className="h-full w-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
                    <h1 className='text-[10rem] text-center uppercase font-medium bg-clip-text text-transparent bg-[linear-gradient(to_right,#d4bc6d,#57430d)] mb-0'>
                        ATHLETE SIGN UP
                    </h1>
                </div>
            </section>
            <section className='py-24'>
                <h1 className='text-[5rem] text-center uppercase font-medium bg-clip-text text-transparent bg-[linear-gradient(to_right,#d4bc6d,#57430d)] mb-28'>
                    Athlete Sign Up Form
                </h1>

                <div className='step-form mb-16 max-w-[87.5rem] mx-auto'>
                    <Stepper
                        steps={[
                            { label: 'Contact Details' },
                            { label: 'Referral Code' },
                            { label: 'Personal Info' },
                            { label: 'School Team / Info' },
                            { label: 'Social Media' },
                            { label: 'Store Front Profile/ Info' },
                            // { label: 'Payment & Billing Info' },
                        ]}
                        styleConfig={{
                            activeBgColor: "#D4BC6D",
                            activeTextColor: "#fff",
                            inactiveBgColor: "transparent",
                            inactiveTextColor: "#fff",
                            completedBgColor: "#B59E55",
                            completedTextColor: "#fff",
                            size: "3em",
                        }}
                        activeStep={activeStep}
                    />
                </div>

                {stepForm?.[activeStep]?.component}

            </section>
        </>
    )
}

export default AthletesSignUp