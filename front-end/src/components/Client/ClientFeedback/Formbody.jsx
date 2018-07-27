import React, {Component} from 'react';
import {Button, ButtonGroup, Glyphicon, Panel, Row, Form, FormGroup, FormControl, HelpBlock, ControlLabel} from 'react-bootstrap'


class FeedbackForm extends Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    
        this.state = {
            
            value:'',

        };

    }


        getValidationState() {
            const length = this.state.value.length;
            if (length > 3) return 'success';
            else if (length < 0) return 'error';
            return null;
        }
      
        handleChange(e) {
            this.setState({value: e.target.value});
        }
    

    render(){

        // function FieldGroup({id, label, help, ...props}) {
        //     return (
        //         <FormGroup controlId={id}>
        //             <ControlLabel>{label}</ControlLabel>
        //             <FormControl {...props}/>
        //         </FormGroup>
        //     )
        // }

        return(
            <div className="Formheader">
           
            <Form>
                
                <Row>
                    <FormGroup
                        controlId="FeedBackForm"
                        validationState={this.getValidationState()}>
                        <ButtonGroup classname="star-rating">
                            <Button bsSize="large">
                                <Glyphicon glyph="star"/>
                            </Button>
                            <Button bsSize="large">
                                <Glyphicon glyph="star"/>
                            </Button>
                            <Button bsSize="large">
                                <Glyphicon glyph="star"/>
                             </Button>
                        </ButtonGroup>
                    
                            <ControlLabel>Consultation </ControlLabel>
                                <FormControl 
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Notes"
                                    onChange={this.handleChange}
                                /> 
                    
                           
                        <ButtonGroup classname="star-rating">
                                <Button bsSize="large">
                                    <Glyphicon glyph="star"/>
                                </Button>
                                <Button bsSize="large">
                                    <Glyphicon glyph="star"/>
                                </Button>
                                <Button bsSize="large">
                                    <Glyphicon glyph="star"/>
                                </Button>
                            </ButtonGroup>         
                     
                                <ControlLabel>Customer Serivce </ControlLabel>
                                    <FormControl 
                                        type="text"
                                        value={this.state.value}
                                        placeholder="Notes"
                                        onChange={this.handleChange}
                                /> 

                    <ButtonGroup classname="star-rating">
                                <Button bsSize="large">
                                    <Glyphicon glyph="star"/>
                                </Button>
                                <Button bsSize="large">
                                    <Glyphicon glyph="star"/>
                                </Button>
                                <Button bsSize="large">
                                    <Glyphicon glyph="star"/>
                                </Button>
                            </ButtonGroup>
                        

                            <ControlLabel>On Time? </ControlLabel>
                                <FormControl 
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Notes"
                                    onChange={this.handleChange}
                                /> 

                    <ButtonGroup classname="star-rating">
                        <Button bsSize="large">
                            <Glyphicon glyph="star"/>
                        </Button>
                        <Button bsSize="large">
                            <Glyphicon glyph="star"/>
                        </Button>
                        <Button bsSize="large">
                            <Glyphicon glyph="star"/>
                        </Button>
                    </ButtonGroup>
        


                     <ControlLabel>Styling </ControlLabel>
                         <FormControl 
                            type="text"
                            value={this.state.value}
                            placeholder="Notes"
                            onChange={this.handleChange}
                         /> 

                         <ButtonGroup classname="star-rating">
                         <Button bsSize="large">
                             <Glyphicon glyph="star"/>
                         </Button>
                         <Button bsSize="large">
                             <Glyphicon glyph="star"/>
                         </Button>
                         <Button bsSize="large">
                             <Glyphicon glyph="star"/>
                         </Button>
                     </ButtonGroup>


                    <ControlLabel>Overall Score </ControlLabel>
                        <FormControl 
                            type="text"
                            value={this.state.value}
                            placeholder="Notes"
                            onChange={this.handleChange}
                        /> 

                            <FormControl.Feedback/>
                                <HelpBlock> Thanks for your Feedback! </HelpBlock>
                </FormGroup>
                </Row>
                
            </Form>
            </div>
        )
    }


    }
    
    export default FeedbackForm