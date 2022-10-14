import React, { StrictMode, useContext, useState } from 'react'
import { GlobalStoreContext } from '../store'

function SongCard(props) {
    const { store } = useContext(GlobalStoreContext);

    const { song, index } = props;
    let cardClass = "list-card unselected-list-card";

    
    function handleDragStart (event){
        event.dataTransfer.setData("song",event.target.id)
    }
    function handleDragOver (event){  
        event.preventDefault();
    }
    function handleDragEnter (event){
        event.preventDefault();
    }
    function handleDragLeave (event){
        event.preventDefault();
    }
    function handleDrop (event){
        event.preventDefault();
        let target = event.target;
        let targetId = target.id;
        targetId = targetId.substring(target.id.indexOf("-") + 1);
        let sourceId = event.dataTransfer.getData("song");
        sourceId = sourceId.substring(sourceId.indexOf("-") + 1);

        targetId=targetId.replace(/\D/g,'')
        sourceId=sourceId.replace(/\D/g,'')

        sourceId=parseInt(sourceId)
        targetId=parseInt(targetId)
        //store.moveSong(sourceId,targetId)
        store.addMoveSongTransaction(sourceId,targetId)
    }
    function handleDeleteSong(event){
        event.stopPropagation();
        // store.markSongForDeletion(index)
        // store.showDeleteSongModal();
        
        //store.addDeleteSongTransaction(index);
        store.markSongForDeletion(index)
        store.showDeleteSongModal()

    }
    function handleEditSong(event){
        event.stopPropagation();
        // store.markSongForEdit(index)
        // store.showEditSongModal();
        
        //store.addEditSongTransaction(index)
        store.markSongForEdit(index)
        store.showEditSongModal()

    }
    return (
        <div
            key={index}
            id={'song-' + index + '-card'}
            className={cardClass}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onDoubleClick={handleEditSong}
            draggable="true"
        >
            {index + 1}.
            <a
                id={'song-' + index + '-link'}
                className="song-link"
                href={"https://www.youtube.com/watch?v=" + song.youTubeId}>
                {song.title} by {song.artist}
            </a>
            <input
                type="button"
                id={"remove-song-" + index}
                className="list-card-button"
                value={"\u2715"}
                onClick={handleDeleteSong}
            />
        </div>
    );
}

export default SongCard;