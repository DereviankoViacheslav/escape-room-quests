'use server';

export const registration = async (formData: FormData) => {
    // formData.set('isLegal', 'true');
    // formData.delete('$ACTION_ID_d313317bd3eca6155dc5c81e501fcc628a127422');
    const data = Object.fromEntries(formData);
    const { name, peopleCount, isLegal, phone } = data;

    const result = JSON.stringify({
        name,
        peopleCount: +peopleCount,
        isLegal: isLegal === 'on',
        phone,
    });

    const payload: RequestInit = {
        method: 'POST',
        body: result,
        // body: formData,
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'multipart/form-data',
        },
    };

    const res = await fetch(`${process.env.API_BASE_PATH}/orders`, payload);
    console.log('res--->>', await res.json());
};
