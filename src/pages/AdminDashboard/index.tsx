// src/pages/AdminDashboard/AdminDashboard.tsx
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

// Mock data for archers and targets
const mockArchers = [
    { id: "archer1", targetId: "target1", name: "Archer 1" },
    { id: "archer2", targetId: "target2", name: "Archer 2" },
    { id: "archer3", targetId: "target1", name: "Archer 3" },
    { id: "archer4", targetId: "target3", name: "Archer 4" },
];

const AdminDashboard = () => {
    const { cibleId } = useParams<{ cibleId: string }>(); // Get targetId from URL params
    const [archers, setArchers] = useState<any[]>([]);
    const history = useHistory();

    useEffect(() => {
        // Filter archers based on the targetId
        const filteredArchers = mockArchers.filter(
            (archer) => archer.targetId === cibleId
        );
        setArchers(filteredArchers);
    }, [cibleId]);

    const handleEditArcher = (archerId: string) => {
        // Redirect to edit page for the specific archer
        history.push(`/edit-archer/${archerId}`);
    };

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h2>Admin Dashboard</h2>
            <h3>Target ID: {cibleId}</h3>
            <div style={{ marginTop: "20px" }}>
                <h4>Archers Connected to this Target:</h4>
                {archers.length > 0 ? (
                    <ul>
                        {archers.map((archer) => (
                            <li key={archer.id}>
                                <span>{archer.name}</span>
                                <button onClick={() => handleEditArcher(archer.id)}>
                                    Modify
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No archers connected to this target.</p>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;

