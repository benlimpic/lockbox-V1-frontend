import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import ShowKeyForm from './showKeyForm'

const KeyModal = (props) => {
  const [fullscreen, setFullscreen] = useState(true);
  const [fetchTMK, setFetchTMK] = useState("")
  const [tmkNumbers, setTmkNumbers] = useState()

  const { id } = useParams()

  const getTMK = useCallback(() => {
    axios
      .get(`/api/v1/projects/${id}`)
      .then((result) => {
        setFetchTMK(result.data.tmk)
      })
  }, [id])

  useEffect(() => {
    getTMK()
  }, [])

  
  const evenNumber = useCallback((num) => {
    if (num.length > 0) {
    let even = []
    for (let i = 0; i < num.length; i++) {
      if (i % 2 !== 0) {
        even.push(parseInt(num[i]))
      }
    }
    setTmkNumbers(even)
    }
  }, [])

  useEffect(() => {
    evenNumber(fetchTMK)
  }, [evenNumber, fetchTMK])



  return (
    
    <Modal 
      show={props.showKeyModal}
      fullscreen={fullscreen} 
      onHide={props.handleShowKeyModal}
    >
      <Modal.Header closeButton>
        <Modal.Title>Key: {props.keyData.reference}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ShowKeyForm
          fetchTMK={tmkNumbers}
          keyData={props.keyData}
          handleShowKeyModal={props.handleShowKeyModal}
          setKeys={props.setKeys}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleShowKeyModal}>
          Cancle
        </Button>
      </Modal.Footer>
    </Modal>

  )
}

export default KeyModal