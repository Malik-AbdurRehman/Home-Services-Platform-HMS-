'use client'

import { useState } from 'react';
import { handleSubmitAction } from '../../actions/roleSelectorAction';

export default function RoleSelectionPage() {
    const [selectedRole, setSelectedRole] = useState("");
    
    const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedRole(e.target.value);
    };
    
    return (
        <div className="container mx-auto p-4 text-center">
        <h1 className="text-3xl mb-4">Select Your Role</h1>
        <form action={handleSubmitAction}>
            <select 
            value={selectedRole} 
            onChange={handleRoleChange} 
            className="border p-2 rounded"
            id='role-select'
            name='role-select'
            >
            <option value="">Select a role</option>
            <option value="merchant">Merchant</option>
            <option value="customer">Customer</option>
            </select>
            <button type="submit" className="ml-4 p-2 bg-blue-500 text-white rounded">
            Submit
            </button>
        </form>
        </div>
    );
}
