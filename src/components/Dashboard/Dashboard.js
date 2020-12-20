import React, { Component } from 'react';
import './Dashboard.css';
import { connect } from 'react-redux';
import { getAllData } from '../../store/actions/ProgramsAction';
import Program from '../Programs/Program';

class Dashboard extends Component {
    constructor (props) {
        super(props);
        this.myRef = [];
        this.myrefLaunch = [];
        this.myrefLand = [];
        this.handleLand = this.handleLand.bind(this);
        this.handleLaunch = this.handleLaunch.bind(this);
        this.handleYear = this.handleYear.bind(this);
        this.state = {
            year: "",
            launch: "",
            land: "",
            yearButton: false
        }
    }
    componentDidMount() {
        this.props.Landing(this.state);
    }

    handleYear = (val, index) => {
        this.setState({
            ...this.state,
            year: val
        }, function () {
            this.props.Landing(this.state)
        })
        for (var i = 0; i < this.myRef.length; i++) {
            this.myRef[i].className = ['year']
        }
        this.myRef[index].className = ['year active']
    }




    handleLaunch = (launch, index) => {
        for (var i = 0; i < this.myrefLaunch.length; i++) {
            this.myrefLaunch[i].className = ['year']
        }
        this.myrefLaunch[index].className = ['year active']
        this.setState({
            ...this.state,
            launch: launch
        }, function () {
            this.props.Landing(this.state);
        })
    }


    handleLand = (land, index) => {
        for (var i = 0; i < this.myrefLand.length; i++) {
            this.myrefLand[i].className = ['year']
        }
        this.myrefLand[index].className = ['year active']
        this.setState({
            ...this.state,
            land: land
        }, function () {
            this.props.Landing(this.state)
        })
    }


    handleClearFilter = () => {
        for (var i = 0; i < this.myRef.length; i++) {
            this.myRef[i].className = ['year']
        }
        for (var j = 0; j < this.myrefLaunch.length; j++) {
            this.myrefLaunch[j].className = ['year']
        }
        for (var k = 0; k < this.myrefLand.length; k++) {
            this.myrefLand[k].className = ['year']
        }
        this.setState({
            year: "",
            launch: "",
            land: "",
        }, function () {
            this.props.Landing(this.state)
        })
    }




    getProgramContent = (programs) => {
        let setDataArray = [];
        for (const item of Object.entries(programs)) {
            setDataArray.push(item)
        }
        return setDataArray.map((row, index) => {
            return (
                <Program row={ row } key={ index } />
            );
        })
    }


    render() {
        return (
            <div className="DashBoard">
                <h2 className="DashboardTitle">Space X Launch Programs </h2>
                <div className="filterView">
                    <p>
                        { this.state.year ? <span>Year : { this.state.year }</span> : <span>Year : NA</span> }
                        { this.state.launch ? <span>Launch Success : { this.state.launch }</span> : <span>Launch Success : NA</span> }
                        { this.state.land ? <span>Launch Success : { this.state.land }</span> : <span>Launch Success : NA</span> }
                    </p>
                    <button className='clearfilter' onClick={ this.handleClearFilter } >Clear Filter</button>
                </div>
                <div className="Contents">
                    <div className="filters">
                        <h3>Filters</h3>
                        <p>Launch Years</p>
                        <hr />
                        <div className="filterOption">
                            { ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'].map((text, index) => (
                                <button id={ index } ref={ ref => this.myRef[index] = ref } className='year' onClick={ () => this.handleYear(text, index) } key={ index }>{ text }</button>
                            )) }
                        </div>
                        <p>Successful Launch</p>
                        <hr />
                        <div className="=filterOption">
                            { ['True', 'False'].map((text, index) => (
                                <button className="year" ref={ ref => this.myrefLaunch[index] = ref } onClick={ () => this.handleLaunch(text, index) } key={ index }>{ text }</button>
                            )) }
                        </div>
                        <p>Successful Landing</p>
                        <hr />
                        <div className="filterOption">
                            { ['True', 'False'].map((text, index) => (
                                <button className="year" ref={ ref => this.myrefLand[index] = ref } onClick={ () => this.handleLand(text, index) } key={ index }>{ text }</button>
                            )) }
                        </div>
                    </div>
                    <div className="Cards">
                        { this.getProgramContent(this.props.Programs) }
                    </div>
                </div>
                <hr />
                <h4 className="credts">Developed by: <span>Tej Jain</span></h4>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        Landing: (filters) => {
            dispatch(getAllData(filters))
        }
    }
}

function mapStateToProps(state) {
    const LandingDetails = state.programReducer.programs;
    return {
        Programs: LandingDetails
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);