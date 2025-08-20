'use client'

import { useState } from 'react';
import { handleSubmitAction } from '../../actions/roleSelectorAction';

export default function RoleSelectionPage() {
    const [selectedRole, setSelectedRole] = useState("");
    
    const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedRole(e.target.value);
    };
    
    return (
        <div>
        <h1>Select Your Role</h1>
        <form action={handleSubmitAction}>
            <select 
            value={selectedRole} 
            onChange={handleRoleChange}
            id='role-select'
            name='role-select'
            >
            <option value="">Select a role</option>
            <option value="merchant">Merchant</option>
            <option value="customer">Customer</option>
            </select>
            <button type="submit">
            Submit
            </button>
        </form>
        </div>
    );
}
