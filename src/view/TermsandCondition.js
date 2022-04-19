import React,{useEffect} from 'react'
import Hero from '../Atoms/Hero'
import disclaimer from '../Images/Datascience4.png'
import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom";


 
const TermsandCondition = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className='terms-and-conditions blog-detials-single'>
            <Helmet>
                <title>Terms and Conditions</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <link rel="canonical" href="https://www.careerera.com/terms-and-conditions"/>
            </Helmet>

            <Hero
                title="Terms  "
                detail="and Condition"
                batch={<> <Link to="/" className="no-underline badge bg-info">Home</Link>
        <span className="mx-2"> / </span>Terms </>} 
                img={disclaimer}
            />

            <div className="container py-16">
                <div className="text-left">
                    <h2 className="text-center font-bold">Terms and Conditions</h2>
                    <div className="border-t-2 border-gray-500 w-14 my-3 mx-auto"></div>

                    <div className='content normal'>
                        <div>
                            <h3 className="text-2xl mt-5 mb-0 font-semibold">
                                1.Acceptance of this Agreement
                            </h3>
                            <p className="mt-3 ">
                                1.1 By clicking on the 'SIGNUP' option, the participant
                                ("You" or "Your") agrees to the terms and conditions,
                                obligations, representations, warranties and agreements
                                contained herein (the "Agreement"). In the event, You
                                are not willing to accept the Agreement, You shall not
                                be authorised or allowed to proceed further to view or
                                use in any manner any content, information, courseware,
                                products and services ("Services") published, available
                                or provided on www.careerera.com (the "Website"), which
                                is owned, maintained and monitored by Careerer / SNVA
                                LLC. ("Us", "We" or "Our").
                                <br />
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl mt-5 mb-0 font-semibold">
                                2. User ID and Password
                            </h3>
                            <p className="mt-3 ">
                                2.1 By entering into this Agreement, You acknowledge and
                                agree that Your user ID and password ("Participant
                                Account") is for Your exclusive use only. Use or sharing
                                of Your Participant Account with another user is not
                                permitted and is cause for immediate blocking of Your
                                access to the Website, the Services and the Content and
                                Courseware and termination of this Agreement.
                                <br />
                            </p>
                            <p className="mt-3 ">
                                2.1 By entering into this Agreement, You acknowledge and
                                agree that Your user ID and password ("Participant
                                Account") is for Your exclusive use only. Use or sharing
                                of Your Participant Account with another user is not
                                permitted and is cause for immediate blocking of Your
                                access to the Website, the Services and the Content and
                                Courseware and termination of this Agreement.
                                <br />
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl mt-5 mb-0 font-semibold">
                                3. Content and Courseware
                            </h3>
                            <p className="mt-3 ">
                                3.1 As a part of our Services offered through our
                                Website, We shall grant you access to our content,
                                courseware, practice tests, and other information,
                                documents, data which may be in audio/video, written,
                                graphic, recorded, photographic or any machine-readable
                                format in relation to the specific certification
                                training course You have registered for ("Content and
                                Courseware").
                                <br />
                            </p>
                            <p className="mt-3 ">
                                3.2 We reserve the right to amend, revise or update the
                                Content and Courseware offered to You. In the event such
                                amendment, revision or updation occurs, We may require
                                you pay an additional amount of fees to access such
                                amended, revised or updated Content and Courseware.
                                <br />
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl mt-5 mb-0 font-semibold">
                                5. Usage of the Website and Services
                            </h3>
                            <p className="mt-3 ">
                                5.1 We grant you a personal, restricted,
                                non-transferable, non-exclusive and revocable license to
                                use the Website, the Services and the Content and
                                Courseware offered through the Website till the time the
                                completion of the certification training course that You
                                have enrolled for or termination of this Agreement
                                according to the terms and conditions set forth herein,
                                whichever is earlier. The Services and the Content and
                                Courseware are provided solely for Your personal and
                                non-commercial use to assist you in completing the
                                certification training course You have registered for
                                ("Restricted Purpose").
                                <br />
                            </p>
                            <p className="mt-3 ">
                                5.2 You are permitted online access to the Website, the
                                Services and the Content and Courseware and may
                                download, save, or print the Content and Courseware
                                solely for the Restricted Purpose.
                                <br />
                            </p>
                            <p className="mt-3 ">
                                5.3 You are not permitted to reproduce, transmit,
                                distribute, sub-license, broadcast, disseminate or
                                prepare derivative works of the Content and Courseware,
                                or any part thereof, in any manner or through any
                                communication channels or means, for any purpose other
                                than the Restricted Purpose, without Our prior written
                                consent.
                                <br />
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl mt-5 mb-0 font-semibold">
                                6. Intellectual Property Rights
                            </h3>
                            <p className="mt-3 ">
                                6.1 While You are granted a limited and non-exclusive
                                right to use the Website, the Services and the Content
                                and Courseware for the Restricted Purpose as set forth
                                in this Agreement, You acknowledge and agree that We are
                                the sole and exclusive owner of the Website, the
                                Services and the Content and Courseware and as such are
                                vested with all intellectual property rights and other
                                proprietary rights in the Website, the Services and the
                                Content and Courseware.
                                <br />
                            </p>
                            <p className="mt-3 ">
                                6.2 You acknowledge and agree that this Agreement other
                                than permitting You to use the Website, the Services and
                                the Content and Courseware for the Restricted Purpose
                                does not convey to You in any manner or form any right,
                                title or interest of a proprietary or any other nature
                                in the Website, the Services and the Content and
                                Courseware.
                                <br />
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl mt-5 mb-0 font-semibold">
                                7. Usage of Personal Information of Participants
                            </h3>
                            <p className="mt-3 ">
                                7.1 We reserve the right to feature Your picture in any
                                photos, videos, or other promotional material used by
                                Us. Further, We may use Your personal information to
                                inform You about other certification training courses
                                offered by Us. However, We shall not distribute or share
                                Your personal information with any third party marketing
                                database or disclose Your personal information to any
                                third party except on a case-to-case basis after proper
                                verification of such third party or if required under
                                any applicable law.
                                <br />
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl mt-5 mb-0 font-semibold">
                                8. Limitation of Liability
                            </h3>
                            <p className="mt-3 ">
                                8.1 You expressly agree that use of the Website, the
                                Services and the Content and Courseware are at Your sole
                                risk. We do not warrant that the Website or the Services
                                or access to the Content and Courseware will be
                                uninterrupted or error free; nor is there any warranty
                                as to the results that may be obtained from the use of
                                the Website, the Services or the Content and Courseware
                                or as to the accuracy or reliability of any information
                                provided through the Website, the Services or the
                                Content and Courseware. In no event will We or any
                                person or entity involved in creating, producing or
                                distributing the Website, the Services or the Content
                                and Courseware be liable for any direct, indirect,
                                incidental, special or consequential damages arising out
                                of the use of or inability to use the Website, the
                                Services or the Content and Courseware.
                                <br />
                            </p>
                            <p className="mt-3 ">
                                8.2 The disclaimer of liability contained in this clause
                                applies to any and all damages or injury caused by any
                                failure of performance, error, omission, interruption,
                                deletion, defect, delay in operation or transmission,
                                computer virus, communication line failure, theft or
                                destruction or unauthorised access to, alteration of, or
                                use of records or any other material, whether for breach
                                of contract, negligence, or under any other cause of
                                action.
                                <br />
                            </p>
                            <p className="mt-3 ">
                                8.3 You hereby specifically acknowledge that We are not
                                liable for any defamatory, offensive, wrongful, or
                                illegal conduct of third parties, or other users of the
                                Website, the Services or the Content and Courseware and
                                that the risk of damage or injury from the foregoing
                                rests entirely with each user.
                                <br />
                            </p>
                            <p className="mt-3 ">
                                8.4 You agree that Our liability or the liability of Our
                                affiliates, directors, officers, employees, agents and
                                licensors, if any, arising out of any kind of legal
                                claim (whether in contract, tort or otherwise) in any
                                way connected with the Services or the Content and
                                Courseware shall not exceed the fee you paid to Us for
                                the particular certification training course.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl mt-5 mb-0 font-semibold">
                                9. Term and Termination
                            </h3>
                            <p className="mt-3 ">
                                9.1 This Agreement will become effective upon Your
                                acceptance of the terms of this Agreement by Your
                                clicking on the "I ACCEPT" button and, subject to the
                                terms and conditions of this Agreement, will remain in
                                effect till You maintain a current, fully paid up online
                                Participant Account, or until terminated by Us,
                                whichever is earlier.
                                <br />
                            </p>
                            <p className="mt-3 ">
                                9.2 We reserve the right to terminate this Agreement and
                                block Your access to the Content and Courseware with
                                immediate effect by sending a written notice through
                                email to You to this effect ("Immediate Termination
                                Date"), if such termination is made as a result of Your
                                misrepresentation, default, misconduct or breach of Your
                                obligations related to or under this Agreement ("Event
                                of Default"). On the occurrence of any Event of Default,
                                We shall be authorised to exercise all the rights and
                                remedies under this Agreement or applicable Law or
                                available in equity to seek indemnification for any Loss
                                or Claim resulting from any such Event of Default.
                                <br />
                            </p>
                            <p className="mt-3 ">
                                9.3 The provisions of clause 4.3, clause 7.2, clause 8
                                and clause 11 of this Agreement shall survive the
                                termination of this Agreement.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl mt-5 mb-0 font-semibold">10. Indemnity</h3>
                            <p className="mt-3 ">
                                10.1 You agree to indemnify and hold Us, Our
                                contractors, licensors, directors, officers, employees
                                and agents, harmless from and against any and all
                                claims, losses, damages, liabilities and expenses
                                including attorneys' fees, arising out of Your
                                unauthorised use of the Website, the Services and the
                                Content and Courseware or any violation or breach of
                                this Agreement or any provisions hereof.
                                <br />
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl mt-5 mb-0 font-semibold">11. Waiver</h3>
                            <p className="mt-3 ">
                                11.1 Neither failure nor delay on the part of any party
                                to exercise any right, remedy, power or privilege
                                hereunder shall operate as a waiver thereof, or of the
                                exercise of any other right, remedy, power or privilege.
                                No term of this Agreement shall be deemed waived, and no
                                breach consented to, unless such waiver or consent shall
                                be in writing and signed by the party claimed to have
                                waived or consented. No waiver of any rights or consent
                                to any breaches shall constitute a waiver of any other
                                rights or consent to any other breach.
                                <br />
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl mt-5 mb-0 font-semibold">
                                12. Severability
                            </h3>
                            <p className="mt-3 ">
                                12.1 In the event any provision of this Agreement is
                                held invalid or unenforceable under the applicable laws
                                of India, the remaining provisions shall continue in
                                full force and effect, and the Agreement shall be deemed
                                to be reformed by replacing such invalidated or
                                unenforceable provision with a valid and enforceable
                                provision that gives effect as closely as possible to
                                the intentions of the parties as expressed by the
                                invalidated or unenforceable provision.
                                <br />
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl mt-5 mb-0 font-semibold">
                                13. Governing Law and Jurisdiction
                            </h3>
                            <p className="mt-3 ">
                                13.1 For Participants who are a resident of the U.S.A.,
                                this Agreement shall be governed by and construed in
                                accordance with the Laws of Massachusetts and the courts
                                in Massachusetts shall have the exclusive jurisdiction
                                over any matter relating to, in connection with, or
                                arising out of, this Agreement.
                                <br />
                            </p>

                            <p className="mt-3 ">
                                13.2 For Participants who are not a resident of the
                                U.S.A., this Agreement shall be governed by and
                                construed in accordance with the Laws of India and the
                                courts in Noida, India shall have the exclusive
                                jurisdiction over any matter relating to, in connection
                                with, or arising out of, this Agreement.
                                <br />
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl mt-5 mb-0 font-semibold">
                                14. Amendment and Assignment
                            </h3>
                            <p className="mt-3 ">
                                14.1 We reserve the right to unilaterally amend or
                                modify this Agreement without giving any prior
                                notification to You. We shall however publish the
                                revised agreement on the Website so that You are aware
                                of the revisions, modifications and amendments made by
                                Us to this Agreement. You acknowledge and agree that it
                                is Your responsibility to check the Website periodically
                                for any revisions, modifications and amendments. Your
                                continued use of or access to the Website, the Services
                                and the Content and Courseware following the posting of
                                any changes to this Agreement shall constitute
                                acceptance of those changes.
                                <br />
                            </p>

                            <p className="mt-3 ">
                                14.2 You are not permitted to assign this Agreement or
                                the rights and obligations mentioned in this Agreement
                                to any third party and You only shall be held liable for
                                any breach of this Agreement or any terms and conditions
                                hereof.
                                <br />
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl mt-5 mb-0 font-semibold">
                                15. Entire Agreement
                            </h3>
                            <p className="mt-3 ">
                                15.1 This Agreement, along with the privacy policy,
                                refund policy, rescheduling policy, terms of use and any
                                additional guidelines, rules and/or disclaimers posted
                                on the Website constitutes the entire agreement
                                governing Your use of our Website and supersedes any
                                prior agreements, if any, relating to any matter dealt
                                with in this Agreement.
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TermsandCondition
