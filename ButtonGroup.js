export default function ButtonGroup({ index, onEditClick, onDeleteClick, onSaveClick, onCancelClick }) {
    console.log("onSaveClick:", onSaveClick);
    console.log("onCancelClick:", onCancelClick);
  
    return (
      <div>     
          <div>
            <span
              className="material-symbols-outlined save-button"
              onClick={onSaveClick}
            >
              save_as
            </span>
            <span
              className="material-symbols-outlined cancel-button"
              onClick={onCancelClick}
            >
              close
            </span>
          </div>
       
          <div>
            <span
              className="material-symbols-outlined edit-button"
              onClick={() => onEditClick(index)}
            >
              edit
            </span>
            <span
              className="material-symbols-outlined delete-button"
              onClick={() => onDeleteClick(index)}
            >
              delete
            </span>
          </div>
      </div>
    );
  }

  