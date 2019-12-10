import React, { Component } from  'react';
import {personDetail} from '../action';
import {connect} from 'react-redux';
import PersonDetailAlbum from './PersonDetailAlbum'

class PersonDetail extends Component {
	componentDidMount() {
		this.props.personDetail(this.props.match.params.name)
	}
	
	render() {
		return(
			<div>
                {
					this.props.person && this.props.person.map(p => {
						return (
							<div key={p.id}>
								<div className="detailContainer">
									<div className="detailProfilePicContainer">
										<img src={`/Albums/${p.name}/${p.profile_pic}.jpeg`} alt="" className="detailProfilePic" />
									</div> 	

									<div className="detailRightSide">
										<div className="nameAndFollower">
											<button className="button">Follow</button>
											<button className="button">Message</button>
										</div>

										<div className="followerAndFollowing">
											<div className="oneHundred">
												<h1>{p.followers} <br/> <span>Followesr</span> </h1>
											</div>
											<div className="oneHundred">
												<h1>{p.following} <br/> <span>Following</span> </h1>
											</div>
										</div>

										<div className="bio">
											<h4>About</h4>
											<p>{p.bio}</p>
										</div>

										<div className="bio">
											<PersonDetailAlbum photos={p.albums} name={p.name}/>
										</div>
									</div>
								</div> 
							</div>
						)
					})
				}
            </div>
		);
	}
}

const mapStateToProps = (state) => {
	// console.log("persondetail.js", state)
	return {
		person: state.people.personDetail
	}
}

export default connect(mapStateToProps, {personDetail})(PersonDetail)