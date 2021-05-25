import './edit-button.styles.css';
export const EditButton = ({ children, handleCreate }) => <button className="btn" onClick={handleCreate}>{children}</button>;
