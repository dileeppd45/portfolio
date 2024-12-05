import React from 'react'
import './Creations.css'
import profile_img from '../../assets/me.png'
import about_heading from '../../assets/about.png'
import profile_img1 from '../../assets/me2.jpg'
import profile_img2 from '../../assets/me3.jpg'
import logo from '../../assets/logo.jpg'
import captain from '../../assets/captain.jpg'
import logoname from '../../assets/logo.png'
import archhome from '../../assets/projects/archaeology/home.png'
import archabout from '../../assets/projects/archaeology/about.png'
import archuapproved_items from '../../assets/projects/archaeology/users/approved_items.png'
import archusold_items from '../../assets/projects/archaeology/users/sold_items.png'
import archumuseum from '../../assets/projects/archaeology/users/museums.png'
import archunotifications from '../../assets/projects/archaeology/users/notifications.png'
import archutransactions from '../../assets/projects/archaeology/users/transactions.png'


import pethome from '../../assets/projects/petcare/home.png'
import petlogin from '../../assets/projects/petcare/login.png'
import petregister from '../../assets/projects/petcare/register.png'
import petahome from '../../assets/projects/petcare/admin/home.png'
import petaservices from '../../assets/projects/petcare/admin/services.png'
import petastaffs from '../../assets/projects/petcare/admin/staffs.png'
import petaprescription_bills from '../../assets/projects/petcare/admin/prescription_bill.png'
import petaconsultations from '../../assets/projects/petcare/admin/consultations.png'
import petdhome from '../../assets/projects/petcare/doctor/home.png'
import petduser_enquiry from '../../assets/projects/petcare/doctor/user_enquiry.png'
import petdprescription_bill from '../../assets/projects/petcare/doctor/prescription_bill.png'
import petdleave from '../../assets/projects/petcare/doctor/leave_status.png'
import petuaddenquiry from '../../assets/projects/petcare/user/add_enquiry.png'
import petuconsultations from '../../assets/projects/petcare/user/consultations.png'
import travelhome from '../../assets/projects/travelconnect/home.png'
import travellogin from '../../assets/projects/travelconnect/login.png'
import travelregister from '../../assets/projects/travelconnect/register.png'
import travelmessage from '../../assets/projects/travelconnect/addmessage.png'
import traveladdmroute from '../../assets/projects/travelconnect/addmiddleroute.png'
import traveladdplan from '../../assets/projects/travelconnect/addplan.png'
import gif from '../../assets/projects/travelconnect/travelconnect.gif'
import traveladdveh from '../../assets/projects/travelconnect/addveh.png'
import travelbooking from '../../assets/projects/travelconnect/booking.png'
import travelmyveh from '../../assets/projects/travelconnect/myveh.png'
import traveltowns from '../../assets/projects/travelconnect/towns.png'
import travelplans from '../../assets/projects/travelconnect/plans.png'

import chatd from '../../assets/projects/chat/chat.png'
import chatcontact from '../../assets/projects/chat/contact.png'
import chathome from '../../assets/projects/chat/home.png'
import chatlogin from '../../assets/projects/chat/login.png'
import chatotp from '../../assets/projects/chat/otp.png'
import chatprofile from '../../assets/projects/chat/profile.png'
import chatup from '../../assets/projects/chat/updatepic.png'

import atmaddatm from '../../assets/projects/atm/addatm.png'
import atmapprovebranch from '../../assets/projects/atm/approvebranch.png'
import atmbcpassword from '../../assets/projects/atm/bcpassword.png'
import atmbhome from '../../assets/projects/atm/bhome.png'
import atmbprofile from '../../assets/projects/atm/bprofile.png'
import atmbreg from '../../assets/projects/atm/breg.png'
import atmhome from '../../assets/projects/atm/home.png'
import atmlogin from '../../assets/projects/atm/login.png'
import atmpendingbranch from '../../assets/projects/atm/pendingbranch.png'
import atmureg from '../../assets/projects/atm/ureg.png'
import atmviewatm from '../../assets/projects/atm/viewatm.png'

import greenaapproveorder from '../../assets/projects/green/aapproveorder.png'
import greenaddplant from '../../assets/projects/green/addplant.png'
import greenaddtocart from '../../assets/projects/green/addtocart.png'
import greenahome from '../../assets/projects/green/ahome.png'
import greenapendingorders from '../../assets/projects/green/apendingorders.png'
import greenaplants from '../../assets/projects/green/aplants.png'
import greenapproveorder from '../../assets/projects/green/approveorder.png'
import greencart from '../../assets/projects/green/cart.png'
import greencategory from '../../assets/projects/green/category.png'
import greenhome from '../../assets/projects/green/home.png'
import greenlogin from '../../assets/projects/green/login.png'
import greenmyorders from '../../assets/projects/green/myorders.png'
import greennltk from '../../assets/projects/green/nltk.png'
import greensignin from '../../assets/projects/green/signin.png'

const Creations = ({setMenu}) => {
  return ( 
  <div id='portfolio' onMouseEnter={() => setMenu("projects")}>
        <div className='creations'>
            <div className="creations-title">
                <h1>Projects</h1>
                <img src={about_heading} alt='' />
            </div>
            <div className="projects">
                <div className="projecto">
                    <div className="project-left">
                        <div className='project-title'><h1>E-Archaeology</h1></div>
                        <div className="marquee-container "  >
                            <div className="marquee" >
                                <div className="initial-child-container">
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={archhome} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={archabout} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={archuapproved_items} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={archusold_items} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={archumuseum} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={archunotifications} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={archutransactions} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    {/* <div className="child" >
                                        <div className="m-2 relative"><img src={captain} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={profile_img2} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={logo} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div> */}
                                    
                                </div>
                            </div>
                            <div className="marquee" >
                                
                            <div className="child" >
                                        <div className="m-2 relative"><img src={archhome} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={archabout} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={archuapproved_items} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={archusold_items} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={archumuseum} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={archunotifications} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={archutransactions} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    {/* <div className="child" >
                                        <div className="m-2 relative"><img src={captain} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={profile_img2} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={logo} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div> */}
                                
                                    
                            
                            </div>
                        </div>
                        <div className="project-para">
                            <p>The project World of Archaeology is a software for managing an online site for selling artifacts and booking pass to the museums.It is an Internet based application, which is used for selling artifacts from different people through bidding.</p>
                            <p>Public who wish to participate in bidding need to register on this site. This application allows public to participate in bidding, booking to the museum as their wish and they can also add details about the historical places.</p>
                            <p>The website keeps the details of registered users, registered museums, details of ancient artifacts, and booking details on their database. The website will be maintained and managed by administrators. They will have the authority to approve and reject requests for new museums. The administrator will also be able to control the details of the historical places that are added by the public.</p>
                            <p>If the items are added by the public for selling purpose, then the archaeology admin verify that item then only they can move their items for bidding.</p>
                        </div>
                        

                    </div>
                    <div className="project-right">
                        <div className='project-title'><h1>Petcare Hospital & Wellness Center</h1></div>
                        <div className="marquee-container "  >
                            <div className="marquee" >
                                <div className="initial-child-container">
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={pethome} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={petlogin} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={petregister} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={petahome} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={petaservices} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={petastaffs} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={petaprescription_bills} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={petaconsultations} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={petdhome} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>   
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={petduser_enquiry} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div> 
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={petdprescription_bill} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div> 
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={petdleave} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>  
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={petuaddenquiry} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={petuconsultations} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>                      
                                </div>
                            </div>
                            <div className="marquee" >
                                
                            <div className="child" >
                                        <div className="m-2 relative"><img src={pethome} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={petlogin} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={petregister} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={petahome} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={petaservices} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={petastaffs} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={petaprescription_bills} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={petaconsultations} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div> 
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={petdhome} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>      
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={petduser_enquiry} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div> 
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={petdprescription_bill} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div> 
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={petdleave} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div> 
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={petuaddenquiry} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>  
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={petuconsultations} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>  
                            </div>
                        </div>
                        <div className="project-para">
                            <p>Petcare Hospital is a web application designed to manage all pet-related services online. If the public wants to consult with a doctor for their pet’s medical care, they can do so through this platform. Doctors can provide home remedies or prescribe medicines, which the staff will then pack and deliver to the address provided by the user.</p>
                            <p>To consult with a doctor, users need to register first. The platform offers a list of available doctors, and users can choose a doctor by paying the consultation fee. They can then describe their pet’s health issue or specific needs. The chosen doctor will review the consultation and provide either a prescription or a home remedy. If a prescription is given, it will be sent to the available staff members, who will calculate the prescription bill and send it to the user. Once the user pays, the staff will pack and deliver the medicine to the specified location.</p>
                            <p>The website keeps records of users, doctors, staff, consultations, prescriptions, and all booking details in its database.</p>
                            <p>The platform is accessible to administrators, doctors, staff, and the public. Administrators manage and maintain the website, with authority over the management of doctors, staff, and hospital services.</p>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="projecte">
                    <div className="project-left">
                        <div className='project-title'><h1>Travel Connect</h1></div>
                        <div className="marquee-container "  >
                            <div className="marquee" >
                                <div className="initial-child-container">
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={travelhome} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={travellogin} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={travelregister} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={travelmessage} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={traveladdmroute} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={traveladdplan} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={gif} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={traveladdveh} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={travelbooking} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={travelmyveh} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={traveltowns} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={travelplans} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>                                    
                                </div>
                            </div>
                            <div className="marquee" >
                                
                            <div className="child" >
                                        <div className="m-2 relative"><img src={travelhome} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={travellogin} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={travelregister} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={travelmessage} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={traveladdmroute} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={traveladdplan} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={gif} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={traveladdveh} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={travelbooking} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={travelmyveh} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={traveltowns} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={travelplans} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                
                                    
                            
                            </div>
                        </div>
                        <div className="project-para">
                            <p>Travel Connect is a web application designed to reduce traffic and save petroleum and other energy resources used by vehicles, as well as to save time and money. </p><p>This online platform allows users to schedule their travel using their own vehicles or others.</p><p> For example, if you want to travel from one place to another, you can search the site to find a vehicle going in the same direction. Similarly, if you plan to travel from one place to another with your vehicle, you can add your travel plan to the site, including all the routes you will pass through and the number of available seats.</p><p> Once you add your plan, it will be visible to the public, and those who need transportation can book a seat in your vehicle.</p>
                            <p>The website stores the details of registered users, registered vehicles, and booking information in its database. The platform is accessible to two types of users: administrators and the public. The public can either travel using others' vehicles or offer rides to others while traveling. The application is maintained and managed by administrators, who have the authority to approve or reject public vehicle registrations after verification.</p>
                        </div>
                    </div>
                    <div className="project-right">
                        <div className='project-title'><h1>Chatapp Web</h1></div>
                        <div className="marquee-container "  >
                            <div className="marquee" >
                                <div className="initial-child-container">
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={chatd} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={chatcontact} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={chathome} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={chatlogin} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={chatotp} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={chatprofile} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={chatup} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                                        
                                </div>
                            </div>
                            <div className="marquee" >
                                
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={chatd} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={chatcontact} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={chathome} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={chatlogin} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={chatotp} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={chatprofile} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={chatup} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    
                            </div>
                        </div>
                        <div className="project-para">
                            <p>The chat app is a web-based platform designed for secure messaging, similar to WhatsApp. Users can communicate with others who are also registered on the platform.</p>
                            <p>The app prioritizes security by implementing OTP (One-Time Password) validation during login to ensure user authenticity. The OTP messages are sent via Twilio, providing a reliable and secure method for verification.</p>
                            <p>This platform offers end-to-end encryption for all messages, ensuring that conversations remain private and secure, just like other popular chat apps.</p>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="projecto">
                    <div className="project-left">
                        <div className='project-title'><h1>ATM Nearby</h1></div>
                        <div className="marquee-container "  >
                            <div className="marquee" >
                                <div className="initial-child-container">
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={atmaddatm} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={atmapprovebranch} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={atmbcpassword} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={atmbhome} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={atmbprofile} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={atmbreg} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={atmhome} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={atmlogin} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={atmpendingbranch} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={atmureg} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={atmviewatm} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="marquee" >
                                
                                    
                            <div className="child" >
                                        <div className="m-2 relative"><img src={atmaddatm} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={atmapprovebranch} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={atmbcpassword} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={atmbhome} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={atmbprofile} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={atmbreg} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={atmhome} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={atmlogin} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={atmpendingbranch} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={atmureg} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={atmviewatm} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                
                                    
                            
                            </div>
                        </div>
                        <div className="project-para">
                            <p>The project ATM Nearby is a software application designed to help users find available ATMs nearby based on their needs. Users can search for ATMs according to branches and locations. The software has three Interface: the user interface, the branch interface, and the admin interface.</p>
                            <p>User Interface: Users can register, log in, and view available ATMs based on their search criteria, such as branches or specific locations.</p>
                            <p>Branch Interface: Branches can register and add their ATMs to the platform, including details such as location and the current status of each ATM (available or not available). Branches also have the ability to update the status of their ATMs in real-time, ensuring that users receive accurate information. Additionally, branches can manage their personal data securely, such as passwords.</p>
                            <p>Admin Interface: Administrators manage and control the software. They have the authority to approve or reject registration requests from branches. Once approved, branches can add their corresponding ATMs and update their information.</p>
                            <p>Users need to register on the platform before accessing information about ATMs. Branches also need to register and await approval from the admin before they can add and manage their ATM details. This ensures that only verified branches can update ATM statuses, providing users with accurate and reliable information.</p>
                        </div>
                        

                    </div>
                    <div className="project-right">
                    <div className='project-title'><h1>Green Plant</h1></div>
                        <div className="marquee-container "  >
                            <div className="marquee" >
                                <div className="initial-child-container">
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={greenaapproveorder} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={greenaddplant} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={greenaddtocart} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={greenahome} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={greenapendingorders} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={greenaplants} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={greenapproveorder} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={greencart} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={greencategory} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={greenhome} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={greenlogin} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={greenmyorders} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div> 
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={greennltk} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={greensignin} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>                                   
                                </div>
                            </div>
                            <div className="marquee" >
                                
                            
                                    
                            <div className="child" >
                                        <div className="m-2 relative"><img src={greenaapproveorder} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={greenaddplant} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={greenaddtocart} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={greenahome} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={greenapendingorders} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={greenaplants} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={greenapproveorder} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={greencart} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={greencategory} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={greenhome} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div>
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={greenlogin} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={greenmyorders} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div> 
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={greennltk} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md" /></div>
                                    </div>
                                    
                                    <div className="child" >
                                        <div className="m-2 relative"><img src={greensignin} alt="" className=" h-56 w-56 object-cover rounded-xl shadow-md"/></div>
                                    </div> 
                                
                                    
                            
                            </div>
                        </div>
                        <div className="project-para">
                            <p>Green Plant is an e-commerce website that sells plants online. Users can browse the available plants, add them to their cart, and place an order. Once an order is placed, it is notified to the admin for approval. After the admin approves the order, users can proceed with the payment through the payment gateway, which uses Razorpay for secure transactions.</p>
                            <p>On the admin side, the administrator can add plants under different categories, manage orders, and monitor all transactions made by users on the website. The admin has full access to maintain the inventory, approve or reject orders, and ensure that all transactions are processed smoothly.</p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>

        </div>
  </div>  

    )
}

export default Creations
