import React, { useEffect } from 'react'
import Hero from '../Atoms/Hero'
import disclaimer from '../Images/Datascience4.png'
import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom";



const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="full-w privacy-policy blog-detials-single">
            <Helmet>
                <title>Privacy Policy</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <link rel="canonical" href="https://www.careerera.com/privacy-policy" />
            </Helmet>

            <Hero
                title="Privacy"
                detail="Policy" 
                batch={<> <Link to="/" className="no-underline badge bg-info">Home</Link>
                <span className="mx-2"> / </span>Privacy </>} 
                img={disclaimer}
            />
            <div className="container py-16">
                <h1 className="text-center font-bold">Privacy Policy</h1>
                <div className="border-t-2 border-gray-500 w-14 my-3 mx-auto"></div>

                <div className='content normal'>

                    <>
                        <p className="text-2xl mt-2 mb-0 font-semibold mb-1">1. Introduction</p>
                        <p>
                            Careerera (together with its subsidiaries, and international affiliates,
                            hereinafter "Careerera," "us," "we," or "our" or “the Company”) is committed
                            to security and management of personal data, to function effectively and
                            successfully for the benefit of our stakeholders, customers and for the
                            community. In doing so, it is essential that people’s privacy is protected
                            through the lawful and appropriate means for handling the personal data.
                            Therefore, we have implemented this privacy policy (hereinafter referred to
                            as ‘‘policy’’).
                        </p>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">2. Aim</p>
                        <p>
                            This policy aims to protect personal data of the various stakeholders
                            connected to our organization. This policy is aimed at providing individuals
                            notice of the basic principles by which the company processes the personal
                            data of individuals (“Personal Data”) who visits, uses, deals with and/or
                            transacts through the website and includes a guest user and browser
                            (hereinafter ‘you’, ‘user’).
                        </p>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">3. Purpose and Scope</p>
                        <p>
                            The purpose of this policy is to describe how Careerera collects, uses, and
                            shares information about you through our online interfaces (e.g., websites
                            and mobile applications) owned and controlled by us, including but not
                            limited to https://www.Careerera.com/ (hereinafter the "website"). This
                            policy is also designed to provide information on how Careerera ensures data
                            security, conducts data transfers and process requests from data subjects.
                        </p>
                        <p>
                            This policy control applies to all systems, people and processes that
                            constitute the organization’s information systems, including board members,
                            directors, employees and other third parties who have access to Personal
                            Data available within Careerera.
                        </p>
                        <p>
                            The company is also committed to ensure that its employees conduct
                            themselves in line with this, and other related, policies. Where third
                            parties process data on behalf of Careerera, the Company endeavours to
                            obtain assurances from such third parties that your Personal Data will be
                            safeguarded consistently.
                        </p>
                        <p>
                            Careerera offers curated and specially designed higher education and
                            industry-relevant certification programs online (“hereinafter individually
                            or collectively referred to as Program”). This Privacy Policy applies to all
                            our services unless specified otherwise.
                        </p>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">4. Types of Personal Data collected</p>
                        <p>
                            The Personal Data that we collect about you depends on the context of your
                            interactions with us, the products, services and features that you use, your
                            location, and the applicable laws.
                        </p>
                        <p>
                            Personal Data is stored in personnel files or within the electronic records
                            (on servers in India or other countries) of Careerera. The following types
                            of Personal Data may be held by the Company, as appropriate, on relevant
                            individuals:
                        </p>
                        <p className="mb-btnnospc mt-4 mb-0">A. Personal Identification Data</p>
                        <ul className="unorder_list">
                            <li>First Name, Last name</li>
                            <li>Job title &amp; Company</li>
                            <li>Signature</li>
                            <li>Photographs</li>
                        </ul>
                        <p className="mb-btnnospc mt-4 mb-0">B. Identification Data</p>
                        <ul className="unorder_list">
                            <li>Social security or tax identification numbers</li>
                            <li>Aadhar number and PAN</li>
                        </ul>
                        <p className="mb-btnnospc mt-4 mb-0">C. Financial Data</p>
                        <ul className="unorder_list">
                            <li>Bank Account information</li>
                            <li>Salary Information</li>
                            <li>Payment gateway account details</li>
                            <li>E-wallet account details</li>
                        </ul>
                        <p className="mb-btnnospc mt-4 mb-0">D. Personal Characteristics</p>
                        <ul className="unorder_list">
                            <li>Age</li>
                            <li>Gender</li>
                            <li>Date of Birth</li>
                            <li>Marital Status</li>
                            <li>Nationality</li>
                        </ul>
                        <p className="mb-btnnospc mt-4 mb-0">E. Contact Data</p>
                        <ul className="unorder_list">
                            <li>Postal address</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                        </ul>
                        <p className="mb-btnnospc mt-4 mb-0">F. Education and Recruitment Data</p>
                        <ul className="unorder_list">
                            <li>Educational qualification(s)</li>
                            <li>Working goals</li>
                            <li>Post-qualification experience</li>
                        </ul>
                        <p className="mb-btnnospc mt-4 mb-0">G. Electronic Identification Data</p>
                        <ul className="unorder_list">
                            <li>Login credentials (If you are a registered user)</li>
                            <li>Visitors IP Data</li>
                            <li>Date and time of website visit</li>
                            <li>Pages visited and navigation on the website</li>
                            <li>Browser being used</li>
                            <li>County of accessing website</li>
                            <li>Language of the browser being used</li>
                            <li>Words searched for</li>
                            <li>Pixel tags</li>
                        </ul>
                        <p className="mb-btnnospc mt-4 mb-0">H. Inquiries</p>
                        <ul className="unorder_list">
                            <li>
                                Personal Data stated in the form – for example: Name, address, phone
                                number, country
                            </li>
                            <li>Subject of Inquiry</li>
                            <li>Personal details (Name on the card, billing address)</li>
                            <li>Payment details (card numbers, card type)</li>
                            <li>
                                Recordings of calls with students and users showing interest in our
                                Program.
                            </li>
                            <li>
                                Information about your interactions with customer service and maintenance
                                interactions with us.
                            </li>
                        </ul>
                        <p className="mb-btnnospc mt-4 mb-0">I. User Generated Data</p>
                        <ul className="unorder_list">
                            <li>Projects and Assignments submitted</li>
                            <li>Peer feedback and grading</li>
                            <li>Program performance data</li>
                            <li>Response to quizzes, standalone quizzes, exams, and surveys</li>
                            <li>Web Cam Recordings (during assessments related to online courses)</li>
                            <li>Posts made to public forums through our platform</li>
                            <li>
                                Any other information necessary to ensure conformity with test/ assessment
                                rules, area of interests
                            </li>
                        </ul>
                        <p className="mb-btnnospc mt-4 mb-0">J. Marketing Data</p>
                        <ul className="unorder_list">
                            <li>Your preferences in receiving marketing information from us</li>
                            <li>Your communication preferences</li>
                        </ul>
                        <p> </p>
                        <p className="mb-btnnospc mt-4 mb-0">K. Behavioural Data</p>
                        <ul className="unorder_list">
                            <li>
                                Data inferred or assumed information relating to your behaviour and
                                interests based on your online activity on our sites
                            </li>
                        </ul>
                        <p>
                            We do not collect any payments information processed by third-party payment
                            gateway providers.
                        </p>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">5. Special Categories of Personal Data</p>
                        <p>
                            Special Category of Personal Data includes details about your race or
                            ethnicity, religious or philosophical beliefs, sex life, sexual orientation,
                            political opinions, trade unions memberships, information about your health
                            and genetic and biometric data.
                        </p>
                        <p>We do not collect or process any special or sensitive Personal Data.</p>
                        <p>
                            Should we specifically require “special” or “sensitive” Personal Data in
                            connection with one or more of the uses described below, we will request
                            your explicit consent to use the data in accordance with this policy and/or
                            in the ways described at the point where you were asked to disclose the
                            data.
                        </p>
                        <p>
                            Other legal basis for our processing of special category data may include,
                            as permitted by applicable law, for scientific research, for employment,
                            social security or social protection law, for reasons of substantial public
                            interest, or as necessary for the establishment, exercise or defence of
                            legal claims. If you voluntarily share with us or post/upload any “special”
                            or “sensitive” Personal Data to this website for any other reason, you
                            consent that we may use such data in accordance with applicable law and this
                            policy. You can contact our DPO for more information about our processing of
                            your Personal Data.
                        </p>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">6. Sources of data collection</p>
                        <p>
                            The data collected by the company is derived directly from the data provided
                            by the user or by use of our sites.
                        </p>
                        <p className="mb-btnnospc mt-4 mb-0">Data Collected when You:</p>
                        <ul className="unorder_list">
                            <li>
                                Register for various seminars, webinars or any other outreach initiatives
                                made available by us or Educational Partner’s offline activities
                            </li>
                            <li>Request a quote for the various products and services offered by us</li>
                            <li>
                                Place feedback, complete any customer surveys circulated or interact with
                                our customer services online
                            </li>
                            <li>View our services or visit our website pages on the internet</li>
                            <li>Browse our website</li>
                            <li>
                                When you appear for assignments, exams or any other assessments in
                                relation to online course
                            </li>
                            <li>When you avail scholarships, refunds and referrals</li>
                        </ul>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">Data Collected from third parties</p>
                        <p>
                            We receive Personal Data such as access or login details, profile picture or
                            any other text / image in relation to your Personal Data which may be
                            available with such third parties.
                        </p>
                        <p>
                            We also receive information about your visits to this platform and to other
                            websites using pixel tags.
                        </p>
                        <p>
                            Third parties from whom we receive your Personal Data include, our service
                            providers, other networks connected to our service, our advertising
                            partners, our marketing and advertising affiliates, our educational
                            partners, scholarship providers, analytics providers, recruiters and such
                            other third-party sources.
                        </p>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">7. Cookies</p>
                        <p>
                            Cookies are text files placed on your computer to collect standard Internet
                            log information and visitor behaviour information. When you visit our
                            websites, we may collect information from you automatically through cookies
                            or similar technology.
                        </p>
                        <p>
                            Furthermore, we may allow third-party advertising companies (such as
                            Facebook, Google, Twitter, Quora and Bing) to place cookies on our website.
                            These cookies enable such companies to track your activity across various
                            sites where they display Ads and record your activities, so they can show
                            Ads that they consider relevant to you as you browse the Internet. These
                            cookies store information about the content you are browsing, together with
                            an identifier linked to your device or IP address.
                        </p>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">How do we use cookies?</p>
                        <p>
                            Careerera uses cookies in a range of ways to improve your experience on our
                            website, including:
                        </p>
                        <ul className="unorder_list">
                            <li>
                                To recognize our website user and to enhance user experience when
                                interacting with our website
                            </li>
                            <li>
                                We moreover use cookies to help us to analyse the use and performance of
                                our website and services
                            </li>
                            <li>
                                We also use cookies to improve the delivery and value of various services
                                and products offered by us.{" "}
                            </li>
                        </ul>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">What types of cookies do we use?</p>
                        <p>There are a few different types of cookies, however, our website uses:</p>
                        <ul className="unorder_list">
                            <li>
                                Persistent Cookies. We use persistent Cookies to improve your experience
                                of using the Sites. This includes recording your acceptance of our Cookie
                                Policy to remove the cookie message which first appears when you use the
                                Sites.
                            </li>
                            <li>
                                Session Cookies. Session Cookies are temporary and deleted from your
                                machine when your web browser closes. We use session Cookies to help us
                                track internet usage as described above.
                            </li>
                            <li>
                                Analytical/Performance Cookies. Analytical cookies allow us to recognise
                                and count the number of visitors and see how many visitors move around our
                                website while they are using it. This helps us improve the way our website
                                works, for example, by ensuring the users find what they are looking for.
                            </li>
                            <li>
                                Functionality Cookies. Functionality Cookies recognise when you return to
                                the website. This enables the company to create greater content for you
                                and remember your likes and dislikes and other preferences.
                            </li>
                            <li>
                                Targeting Cookies. Targeting Cookies records the visit to our website, the
                                pages navigated to and the links clicked upon. It helps to formulate
                                information relevant to the user’s area of interests.
                            </li>
                        </ul>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">How to manage cookies?</p>
                        <p>
                            Most browsers allow you to refuse to accept cookies and to delete cookies.
                            The methods for doing so vary from browser to browser, and from version to
                            version. Disabling some cookies form the website, may have a negative impact
                            and may result in some non-availability of some features.
                        </p>
                        <p>
                            If you want to remove previously stored Cookies, you can manually delete the
                            Cookies at any time. However, this will not prevent the Sites from placing
                            further Cookies on your device unless and until you adjust your Internet
                            browser setting as described above.
                        </p>
                        <p>
                            You can however obtain up-to-date information about blocking and deleting
                            cookies via these links:
                        </p>
                        <ul className="unorder_list">
                            <li>https://support.google.com/chrome/answer/95647 (Chrome)</li>
                            <li>
                                https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences
                                (Firefox)
                            </li>
                            <li>https://www.opera.com/help/tutorials/security/cookies/ (Opera)</li>
                            <li>
                                https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies
                                (Internet Explorer)
                            </li>
                            <li>https://support.apple.com/kb/PH21411 (Safari)</li>
                        </ul>
                        <p>
                            These opt-out mechanisms rely on cookies to remember your choices. If you
                            delete your cookies, use another computer or device, or change browsers, you
                            will need to repeat this process. In addition, opting out of interest-based
                            ads will not opt you out of all ads, but rather only those ads that are
                            personalized to your interests.
                        </p>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">8. Data Analytics</p>
                        <p>
                            We use Analytics tools and search information providers to measure how
                            visitors interact with content on our website. We also use Facebook Custom
                            Audiences to ask Facebook to show you ads that are customized based on your
                            interaction with our websites or our Facebook applications and to measure
                            how you interact with those ads. Additional information on how these
                            services use such technologies can be found on Google’s website, Adobe’s
                            website and Facebook’s website.
                        </p>
                        <p>
                            If you do not wish to have data relating to your visits to our websites
                            collected through Google Analytics, you may opt-out by installing the{" "}
                            <a href="https://tools.google.com/dlpage/gaoptout" target='_blank' rel='noreferrer' >
                                Google Analytics opt-out browser add-on.
                            </a>{" "}
                            You may opt-out of Facebook Custom Audiences by visiting Facebook’s opt-out
                            page.
                        </p>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">9. Aggregated Data</p>
                        <p>
                            “Aggregated Data” means records that have been stripped of Personal Data and
                            has been manipulated or combined to provide generalised, anonymous
                            information. Your identity and personal information are not available in
                            Aggregated Data. We combine your Personal Data on an anonymous basis with
                            other information to generate Aggregated Data for internal and commercial
                            use and for sharing with affiliates, subsidiaries and business partners for
                            planning and marketing purposes.
                        </p>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">10. Data protection principles</p>
                        <p>
                            Where third parties process data on behalf of Careerera, we endeavour to
                            obtain assurances from such third parties that your Personal Data will be
                            safeguarded consistently. We understand that it will be accountable for the
                            processing, management and regulation, and storage and retention of all
                            Personal Data held in the form of manual records and on computers.
                        </p>
                        <p>All Personal Data obtained and held by the Company will:</p>
                        <ul className="unorder_list">
                            <li>be processed fairly, lawfully and in a transparent manner</li>
                            <li>be collected for specific, explicit, and legitimate purposes</li>
                            <li>
                                be adequate, relevant and limited to what is necessary for the purposes of
                                processing
                            </li>
                            <li>
                                be kept accurate and up to date. Every reasonable effort will be made to
                                ensure that inaccurate data is rectified or erased without delay
                            </li>
                            <li>not be kept for longer than is necessary for its given purpose</li>
                            <li>
                                be processed in a manner that ensures appropriate security of Personal
                                Data including protection against unauthorised or unlawful processing,
                                accidental loss, destruction or damage by using appropriate technical or
                                organisation measures
                            </li>
                            <li>
                                comply with the relevant laws and procedures for international
                                transferring of Personal Data applicable to us.
                            </li>
                        </ul>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                            11. Legal basis for processing your Personal Data
                        </p>
                        <p>
                            Certain jurisdictions require that we have a lawful basis to justify our
                            processing of your Personal Data.
                        </p>
                        <p>
                            Where applicable, the lawful basis that Careerera relies upon to justify a
                            particular processing activity may differ from the lawful basis used to
                            justify a different processing activity.
                        </p>
                        <p>
                            Careerera relies on the following lawful basis to process Personal Data, as
                            permitted under applicable law:
                        </p>
                        <ul className="unorder_list">
                            <li>
                                Processing necessary for the negotiation, execution, or performance of
                                contracts
                            </li>
                            <li>Processing to comply with legal and regulatory obligations</li>
                            <li>
                                Processing in furtherance of our legitimate interests, including our
                                interests to conduct legitimate business activities (such as improving our
                                products and services, to communicate with you, to secure our systems,
                                among other legitimate interests)
                            </li>
                            <li>
                                Processing necessary to protect vital interest of a user or any other
                                natural person
                            </li>
                            <li>Processing necessary for public interest</li>
                            <li>Processing based on your consent</li>
                        </ul>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">12. Consent</p>
                        <p>
                            We may obtain your consent to collect and use certain types of Personal Data
                            when we are required to do so by law.
                        </p>
                        <p>
                            Once consent is obtained from the individual to use his or her information
                            for those purposes, Careerera has the individual's implied consent to
                            collect or receive any supplementary information that is necessary to fulfil
                            the same purposes. Express consent will also be obtained if, or when, a new
                            use is identified.
                        </p>
                        <p>
                            Consent may also be implied where a user is given notice and a reasonable
                            opportunity to opt-out of his or her personal information being used for
                            mail-outs, the marketing of new services or products, and the client,
                            customer, member does not opt-out.
                        </p>
                        <p>
                            Subject to certain exceptions (e.g., the personal information is necessary
                            to provide the service or product, or the withdrawal of consent would
                            frustrate the performance of a legal obligation), individuals can withhold
                            or withdraw their consent for Careerera to use their personal information in
                            certain ways.
                        </p>
                        <p>
                            Further, by using this website/ acknowledging this privacy policy / by
                            voluntarily providing us with your Personal Data, you consent to collection,
                            storage, and processing of your Personal Data in accordance with this
                            privacy policy and our Terms of Service.
                        </p>
                        <p>
                            If you refuse or withdraw your consent, or if you choose not to provide us
                            with any required Personal Data, we may not be able to provide you the
                            services that can be offered on our Platform.
                        </p>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">13. Purpose of collecting Personal Data</p>
                        <p>We collect your Personal Data for the following purposes</p>
                        <ul className="unorder_list">
                            <li>To fulfil or meet the reason you provided the information;</li>
                            <li>
                                We use your information for managing and processing purposes, including,
                                but not limited to, tracking attendance, progress and completion of a
                                Program. As part of our management and processing of the Program, we will
                                use certain Personal Data to administer exams, projects, and other
                                assessments for the Program. For example, as part of an exam, Careerera
                                may use certain information collected from you in order to verify your
                                identity or to monitor your performance during the exam to confirm that
                                you are abiding by the applicable testing rules or requirements;
                            </li>
                            <li>
                                To send you updates about the Programs, other Careerera events, platform
                                maintenance or new services provided by Careerera, among other things,
                                through itself or through third parties, via WhatsApp, email, SMS, phone
                                call or any other medium;
                            </li>
                            <li>Provide Chat Room services;</li>
                            <li>To enhance the quality of our content and product offerings;</li>
                            <li>
                                Compliance with security and other mandatory policies and building access;
                            </li>
                            <li>
                                Providing information to relevant external authorities for tax, social
                                security and other purposes as legally required;
                            </li>
                            <li>
                                Conducting surveys to assess your satisfaction, including but not limited
                                to its processes or policies;
                            </li>
                            <li>
                                Setting up and maintaining accounts and subscriptions with third parties
                                that provide information and research services or communication services;
                            </li>
                            <li>
                                Making decisions about your continued engagement, employment or
                                membership;
                            </li>
                            <li>
                                Dealing with legal or regulatory disputes or investigations involving you,
                                our work, or other partners, employees, workers and contractors, including
                                accidents at work, potential and actual negligence claims and professional
                                discipline matters;
                            </li>
                            <li>
                                To monitor use of our information and communication systems to ensure
                                compliance with our IT and document management policies;
                            </li>
                            <li>
                                To ensure network and information security, including preventing
                                unauthorized access to our computer and electronic communications systems
                                and preventing malicious software distribution;
                            </li>
                            <li>
                                Business management and planning, including accounting, auditing and
                                insuring;
                            </li>
                            <li>
                                Planning or reviewing options in relation to the operation or management;
                            </li>
                            <li>Keeping registers required by law or regulation;</li>
                            <li>Communicating with you, for example to respond to inquiries;</li>
                            <li>
                                Enhancing the safety and security of the services and preventing fraud, or
                                protecting our or our customers’, or your rights or property;
                            </li>
                            <li>
                                Enforcing applicable terms and conditions and other applicable policies;
                            </li>
                        </ul>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">14. Advertising and Marketing</p>
                        <p>
                            We strive to provide you with choices regarding certain Personal Data uses,
                            particularly around marketing and advertising. You will receive marketing
                            communications from us if you have requested information from us or if you
                            provided us with your details and expressly consented to receiving that
                            marketing.
                        </p>
                        <p>
                            We may use your Personal Identification, Identity, Contact, Electronic and
                            User generated Data to form a view on what we think you may want or need, or
                            what may be of interest to you. This is how we decide which services and
                            offers may be relevant for you.
                        </p>
                        <p>
                            We also enter into agreements with third parties to serve Ads on our behalf
                            across the internet, social networking sites and blogs. These third parties
                            may collect Personal Data about your visits to our platform and your
                            interactions with our products and use this information to target
                            advertisements for goods and services.
                        </p>
                        <p>
                            Where electronic direct marketing communications are being sent, you have
                            the option to opt-out in each communication sent, and this choice will be
                            recognised and adhered to by us.
                        </p>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">15. Disclosure of Personal Data</p>
                        <p>
                            Careerera is a global company and may share the personal information
                            collected or provide such access to other companies within the Careerera
                            group.
                        </p>
                        <p>
                            Examples of third parties with whom Careerera may share Personal Data
                            includes:
                        </p>
                        <p>
                            With government bodies, including tax and social security authorities, to
                            comply with applicable laws (including employment and tax laws), to obtain
                            licenses or approvals, and upon request during an audit or assessment;
                        </p>
                        <ul className="unorder_list">
                            <li>
                                With suppliers, subcontractors and service providers, to maintain an
                                efficient and commercially viable business, including technology, telecom,
                                internet providers;
                            </li>
                            <li>
                                With professional advisers, consultants, and employment and recruitment
                                agencies, to conduct background verification and reference checks,
                                administer benefits and payroll, deal with disciplinary and grievance
                                issues and maintain emergency contact details;
                            </li>
                            <li>
                                With our legal advisors and external auditors for legal advice and to
                                conduct business audits;
                            </li>
                            <li>
                                With service providers for business continuity management and contingency
                                planning in the event of business disruptions.
                            </li>
                            <li>
                                With certain companies in order to establish a membership to participate
                                in digital wallets, payment services or rewards programme
                            </li>
                        </ul>
                        <p>
                            We require all third parties to respect the security of your Personal Data
                            and to treat it in accordance with the law. We do not allow our third-party
                            service providers to use your Personal Data for their own purposes and only
                            permit them to process your Personal Data for specified purposes and in
                            accordance with our instructions.
                        </p>
                        <p>
                            In addition to the examples cited above, Careerera also shares your Personal
                            Data with:
                        </p>
                        <div className="full-w border">
                            <div className="table-responsive">
                                <table className="table min-widen-400 table-bordered mb-0">
                                    <thead>
                                        <tr>
                                            <th className='align-top text-black text-base' width="250">Recipients</th>
                                            <th className='align-top text-black text-base' width="300">Category(ies) of Personal Data we share</th>
                                            <th className='align-top text-black text-base'>Why we share it</th>
                                            <th className='align-top text-black text-base' width="150">Location(s)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='align-top text-black font-medium  text-base'>
                                                <strong>Educational Partners</strong>
                                                <ul className="unorder_list">
                                                    <li>University or company offering the course</li>
                                                    <li>External graders</li>
                                                    <li>Mentors</li>
                                                </ul>
                                            </td>
                                            <td className='align-top text-black font-medium  text-base'>
                                                <ul className="unorder_list">
                                                    <li>Personal Identification Data</li>
                                                    <li>Personal Characteristics Data</li>
                                                    <li>Contact Data</li>
                                                    <li>User generated data</li>
                                                </ul>
                                            </td>
                                            <td className='align-top text-black font-medium  text-base'>
                                                <ul className="unorder_list">
                                                    <li>
                                                        Evaluate and assess your progress and performance in the
                                                        Program
                                                    </li>
                                                    <li>report on your progress in the Program</li>
                                                    <li>
                                                        enable them to issue a certificate to you on completion of the
                                                        Program
                                                    </li>
                                                </ul>
                                            </td>
                                            <td className='align-top text-black font-medium  text-base'>Global</td>
                                        </tr>
                                        <tr>
                                            <th className='align-top text-black text-base'>Employers; Sponsors and Scholarship Providers</th>
                                            <td className='align-top text-black font-medium  text-base'>
                                                <ul className="unorder_list">
                                                    <li>Personal Identification Data</li>
                                                    <li>Personal Characteristics Data</li>
                                                    <li>Contact Data</li>
                                                    <li>User generated data</li>
                                                </ul>
                                            </td>
                                            <td className='align-top text-black font-medium  text-base'>
                                                If you are taking a Program that is sponsored or paid for by your
                                                employer or a sponsor, or if you have availed a scholarship from a
                                                third-party scholarship provider, we may share your Personal Data
                                                and grades, evaluations or progress
                                            </td>
                                            <td className='align-top text-black font-medium  text-base'>Global</td>
                                        </tr>
                                        <tr>
                                            <th />
                                            <td />
                                            <td className='align-top text-black font-medium  text-base'>
                                                in the Program with your employer/sponsor/scholarship provider.
                                                This information may be shared at any time during the Program or
                                                afterwards.
                                            </td>
                                            <td />
                                        </tr>
                                        <tr>
                                            <th className='align-top text-black text-base'>Service Providers</th>
                                            <td className='align-top text-black font-medium  text-base'>
                                                <ul className="unorder_list">
                                                    <li>Personal Identification Data</li>
                                                    <li>Personal Characteristics Data</li>
                                                    <li>Contact Data</li>
                                                    <li>User generated data</li>
                                                    <li>Financial Data</li>
                                                    <li>Electronic Identification Data</li>
                                                    <li>Data generated from inquires</li>
                                                    <li>Marketing Data</li>
                                                </ul>
                                            </td>
                                            <td className='align-top text-black font-medium  text-base'>
                                                We provide access to or share your information with operations and
                                                maintenance contractors and other third parties who perform
                                                services on our behalf strictly on confidential terms. They
                                                provide a variety of services to us, including billing, sales,
                                                marketing, test proctoring, couriers, mentoring, recruitment
                                                consulting, product content and features, advertising, analytics,
                                                research, customer service, data storage, security, fraud
                                                prevention, credit facilities, payment processing and legal
                                                services
                                            </td>
                                            <td className='align-top text-black font-medium  text-base'>Global</td>
                                        </tr>
                                        <tr>
                                            <th className='align-top text-black text-base'>Third Parties</th>
                                            <td className='align-top text-black font-medium  text-base'>
                                                <ul className="unorder_list">
                                                    <li>Personal Identification Data</li>
                                                    <li>Personal Characteristics Data</li>
                                                    <li>Contact Data</li>
                                                    <li>User generated data</li>
                                                    <li>Financial Data</li>
                                                    <li>Electronic </li>
                                                </ul>
                                            </td>
                                            <td className='align-top text-black font-medium  text-base'>
                                                <ul className="unorder_list">
                                                    <li>
                                                        we share certain Personal Data and materials with third
                                                        parties including, but not limited to, service providers{" "}
                                                    </li>
                                                </ul>
                                            </td>
                                            <td className='align-top text-black font-medium  text-base'>Global</td>
                                        </tr>
                                        <tr>
                                            <th />
                                            <td className='align-top text-black font-medium  text-base'>
                                                <p>Identification Data</p>
                                                <ul className="unorder_list">
                                                    <li>Data generated from inquires</li>
                                                    <li>Marketing Data</li>
                                                    <li>Education and Recruitment Data</li>
                                                    <li>Behavioural Data</li>
                                                </ul>
                                            </td>
                                            <td className='align-top text-black font-medium  text-base'>
                                                <p>
                                                    such as Facebook or WhatsApp in order to provide you services
                                                    that you have requested or services that Careereraprovides in
                                                    conjunction with the Programs
                                                </p>
                                                <ul className="unorder_list">
                                                    <li>
                                                        to arrange and provide networking activities to previous,
                                                        current or potential students of Careerera
                                                    </li>
                                                    <li>
                                                        may share information that can be used to directly contact you
                                                        with third-party business partners, such as companies that may
                                                        be offering products or services or other opportunities that
                                                        may be of interest to you.
                                                    </li>
                                                </ul>
                                            </td>
                                            <td />
                                        </tr>
                                        <tr>
                                            <th />
                                            <td />
                                            <td className='align-top text-black font-medium  text-base'>
                                                <ul className="unorder_list">
                                                    <li>To third party business partners</li>
                                                </ul>
                                            </td>
                                            <td />
                                        </tr>
                                        <tr>
                                            <td className='align-top text-black font-medium  text-base'>
                                                <strong>
                                                    Recruitment Service providers
                                                    <strong>
                                                        <ul className="unorder_list">
                                                            <li>Recruitment agency</li>
                                                            <li>Potential employers</li>
                                                        </ul>
                                                    </strong>
                                                </strong>
                                            </td>
                                            <td className='align-top text-black font-medium  text-base'>
                                                <ul className="unorder_list">
                                                    <li>Personal Identification Data</li>
                                                    <li>Personal Characteristics Data</li>
                                                    <li>Contact Data</li>
                                                    <li>User generated data</li>
                                                    <li>Education and Recruitment Data</li>
                                                </ul>
                                            </td>
                                            <td className='align-top text-black font-medium  text-base'>
                                                If you opt for any of our recruitment services or if you
                                                participate in any of our recruitment activities, we will be
                                                sharing your information with recruiters and potential employers.
                                            </td>
                                            <td className='align-top text-black font-medium  text-base'>Global</td>
                                        </tr>
                                        <tr>
                                            <th className='align-top text-black text-base'>Associate and Business Transfers</th>
                                            <td className='align-top text-black font-medium  text-base'>
                                                <ul className="unorder_list">
                                                    <li>Personal Identification Data</li>
                                                    <li>Personal Characteristics Data</li>
                                                    <li>Contact Data</li>
                                                    <li>User generated data</li>
                                                </ul>
                                            </td>
                                            <td className='align-top text-black font-medium  text-base'>
                                                <p>
                                                    We share your Personal Data with our associates for business
                                                    purposes.
                                                </p>
                                                <p>
                                                    Careerera may disclose and/or transfer your Personal Data to an
                                                    acquirer, assignee or other successor entity in connection with
                                                    a sale, merger, or reorganisation of all or substantially all of
                                                    the equity, business or assets of Careerera to which your
                                                    Personal{" "}
                                                </p>
                                            </td>
                                            <td className='align-top text-black font-medium  text-base'>Global</td>
                                        </tr>
                                        <tr>
                                            <th />
                                            <td />
                                            <td className='align-top text-black font-medium  text-base'>Data relates </td>
                                            <td />
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">16. Data subject rights</p>
                        <p>
                            Some jurisdictions have provided individuals with certain rights in relation
                            to the processing of their Personal Data. This is the case where you or the
                            any of our subsidiaries or affiliates with which you interact is located in
                            the European Union, though these rights may be available in other
                            jurisdictions as well. These rights are not available to everyone, and they
                            do not necessarily apply in all contexts. Depending on applicable law, you
                            may have the right to:
                        </p>
                        <ul className="unorder_list">
                            <li>Request access to your Personal Data.</li>
                            <li>
                                Request correction of your Personal Data (should your Personal Data be
                                inaccurate, incomplete, or obsolete).
                            </li>
                            <li>Request deletion of your Personal Data</li>
                            <li>
                                Withdraw your consent to processing (where we processed Personal Data on
                                the basis of your consent). Please note that withdrawing your consent
                                applies only to future processing activities.
                            </li>
                            <li>Object to the processing of your Personal Data.</li>
                            <li>Request restrictions on the processing of your Personal Data.</li>
                            <li>Request the transfer of your Personal Data to you or a third party.</li>
                            <li>Opt-out of certain transfers to third parties.</li>
                        </ul>
                        <p>
                            To exercise a right that you believe you may be entitled to under applicable
                            law, please write to us at dpo@Careerera.com.
                        </p>
                        <p>We may need to verify your identity before we fulfil your request.</p>
                        <p>
                            Please note that certain conditions in relation to processing of your
                            rights, will vary as many countries have varying data privacy rights. Our
                            response and further processing of request to exercise these rights will
                            depend upon the law applicable in relation to the rights exercised by you.
                            We may refuse requests that are unreasonably repetitive, require
                            disproportionate technical effort, risk the privacy of others, may
                            compromise and ongoing investigation, or are impractical. It is our policy
                            to never discriminate against you for exercising any of these rights.
                        </p>
                        <p>
                            You may have the right to complain to a data protection authority about our
                            processing of your Personal Data. For more information, please contact your
                            local data protection authority.
                        </p>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">17. Our Policy on Children’s Data</p>
                        <p>
                            Children’s data privacy is important to us. Our Sites are not intended for
                            children Age to constitute a user as children is different for different
                            jurisdictions. The age (for valid consent) of children varies across
                            jurisdictions. For example, under GDPR child is a person aged 16 years or
                            below, and in United Kingdom, children is someone who is aged 13 , in case
                            of Singapore and Qatar the valid age for providing consent is 18 years.
                        </p>
                        <p>
                            As a general policy, our company does not engage in the collection,
                            processing, storage, use, dissemination, and transfer of Personal Data of
                            children.
                        </p>
                        <p>
                            In case such a collection becomes necessary for the performance of our
                            contractual obligations, or when required under the concerned law, we shall
                            notify you in a time-bound and appropriate manner, informing the purposes
                            and reasons for such collection and seek your explicit consent, and where
                            applicable, parental authorization, prior to the processing of such data.
                        </p>
                        <p>
                            We will take appropriate steps to delete any Personal Data of children’s
                            that has been collected on our website without verified parental consent
                            upon learning of the existence of such Personal Data, subject to conditions
                            stipulated in the laws of applicable jurisdiction.
                        </p>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">18. Data Security</p>
                        <p>
                            Careerera will ensure that appropriate technical and organizational measures
                            are in place, supported by privacy impact and risk assessments, to ensure a
                            high level of security for Personal Data, and secure environment for
                            information held both manually and electronically.
                        </p>
                        <p>
                            Careerera implements appropriate security measures designed to prevent
                            unlawful or unauthorized processing of personal information and accidental
                            loss of or damage to personal information. Careerera maintains written
                            security management policies and procedures designed to prevent, detect,
                            contain, and correct violations of measures taken to protect the
                            confidentiality, integrity, availability, or security of your Personal
                            Information. These policies and procedures assign specific data security
                            responsibilities and accountabilities to specific individuals, include a
                            risk management program that includes periodic risk assessment and provide
                            an adequate framework of controls that safeguard your personal information.
                        </p>
                        <p>
                            In addition, as part of its organizational security measures, employees at
                            Careerera must:
                        </p>
                        <ul className="unorder_list">
                            <li>
                                ensure that all files or written information of a confidential nature are
                                stored in a secure manner and are only accessed by people who have a need
                                and a right to access them
                            </li>
                            <li>
                                ensure that all files or written information of a confidential nature are
                                not left where they can be read by unauthorised people
                            </li>
                            <li>
                                check regularly on the accuracy of data being entered into computers
                            </li>
                            <li>
                                always use the passwords provided to access the computer system cautiously
                                and such access should not be circulated, unless absolutely necessary
                            </li>
                            <li>
                                use computer screen blanking to ensure that Personal Data is not left on
                                screen when not in use.
                            </li>
                        </ul>
                        <p>
                            Personal Data should not be kept or transported on laptops, USB sticks, or
                            similar devices, unless authorised by [insert details]. Where Personal Data
                            is recorded on any such device it should be protected by:
                        </p>
                        <ul className="unorder_list">
                            <li>
                                ensuring that data is recorded on such devices only where absolutely
                                necessary
                            </li>
                            <li>
                                using an encrypted system — a folder should be created to store the files
                                that need extra protection and all files created or moved to this folder
                                should be automatically encrypted
                            </li>
                            <li>
                                ensuring that laptops or USB drives are not left lying around where they
                                can be stolen.
                            </li>
                        </ul>
                        <p>
                            Failure to follow the Company’s rules on data security may be dealt with via
                            the Company’s disciplinary procedure. Appropriate sanctions include
                            dismissal with or without notice dependent on the severity of the failure.
                        </p>
                        <p>
                            We also take steps to ensure that our service providers, contractors and
                            other third parties maintain similar level of data protection measures when
                            processing your Personal Data. While we strive to secure your Personal Data,
                            please note that 100% security of Personal Data cannot be guaranteed and
                            that Careerera shall not be liable for any misuse or loss of Personal Data
                            carried out by third party cloud service provider.
                        </p>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">19. International data transfers</p>
                        <p>
                            Our website is primarily operated and managed on servers located and
                            operated within India. However, owing to the global nature of Careerera,
                            your Personal Data may also be stored in third party data servers located in
                            other countries where Careerera provides its products and services.
                        </p>
                        <p>
                            Careerera engages sub-contractors, service providers and other third parties
                            for facilitating our products, service offerings and to offer support
                            services to you, and your Personal Data may be transferred to servers of
                            such sub-contractors, service providers and other third parties. Depending
                            upon the location of our service providers, your information, including
                            Personal Data, may be transferred to and maintained on computers located
                            outside of your state, province, country or other governmental jurisdiction
                            where the data protection laws may differ than those from your jurisdiction.
                        </p>
                        <p>
                            Further, your Personal Data may be transferred may be shared, disclosed, and
                            transferred between various Careerera group companies where such transfers
                            are required for legitimate business reasons.
                        </p>
                        <p>
                            Where required under applicable law we will seek your express consent for
                            such transfers. In all other cases, by consenting to this policy, you also
                            provide consent to Careerera to transfer your Personal Data to Careerera
                            affiliated companies, service providers or any third-party entity in
                            locations around the world. We take steps to ensure that a degree of data
                            protection which is similar to this policy is afforded to such Personal Data
                            transferred.
                        </p>
                        <p>
                            Where Careerera transfers your personal information internationally, we will
                            comply with applicable legal requirements and where required we will enter
                            into a data transfer agreement with the recipient of the personal
                            information, which in the case of European Personal Data may include the
                            Standard Contractual Clauses. In other cases, and where applicable, we shall
                            enter into separate Data Processing Agreements with the third parties /
                            service providers / contractors and such other recipients of Personal Data.
                            Further as the Company takes steps to ensure that transfers of Personal Data
                            to any public authority cannot be massive, disproportionate, and
                            indiscriminate in a manner that would go beyond what is necessary in a
                            democratic society. In the event of conflicts between these and public
                            authority requirements, the company will find a practical solution that
                            fulfils the purpose of this Policy.
                        </p>
                        <p>
                            We are committed to take all steps reasonably necessary to ensure that your
                            data is treated securely and in accordance with our data privacy and
                            security standards.
                        </p>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">20. Records management</p>
                        <p>
                            Records management refers to a set of activities required for systematically
                            controlling the creation, distribution, use, maintenance, and disposition of
                            recorded information maintained as evidence of business activities and
                            transactions. It is impossible to be compliant with information law without
                            robust records management policies and practises. Good records management
                            practices ensure not only record quality, but that Personal Data is only
                            kept for as long as necessary for its original purpose and help support data
                            minimization.
                        </p>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">21. Organization and Responsibilities</p>
                        <p>
                            Careerera will maintain records of data processing as required by the laws.
                        </p>
                        <p>
                            The ‘Data Protection Officer’ (DPO) has the specific responsibility of
                            overseeing data protection and ensuring that we comply with the data
                            protection principles and relevant legislation. The DPO will ensure that the
                            Data Processing Register is kept up to date and demonstrates how the data
                            protection principles are adhered to by our activities. Individual members
                            of staff have a duty to contribute to ensure that the measures outlined in
                            the Register are accurately reflected in our practice.
                        </p>
                        <p>
                            Our compliance with relevant policies and regulatory requirements in respect
                            of data protection as part of our Data Management Strategy will be
                            periodically monitored internally by a designated governance group. All
                            employees, volunteers, consultants, partners, or other parties who will be
                            handling Personal Data on behalf of Careerera will be appropriately trained
                            and supervised where necessary.
                        </p>
                        <p>
                            The collection, storage, use and sharing of Personal Data will be regularly
                            reviewed by the Data Protection Officer, the Governance Group, and any
                            relevant business area. We will adhere to relevant codes of conduct where
                            they have been identified and discussed as appropriate.
                        </p>
                        <p>
                            Where there is likely to be a high risk to individuals rights and freedoms
                            due to a processing activity, we will first undertake a Data Protection
                            Impact Assessment (DPIA) and consult with the relevant supervisory authority
                            prior to processing, if necessary.
                        </p>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">22. Conflicts of Law</p>
                        <p>
                            This Policy is intended to comply with the laws and regulations in the place
                            of establishment and of the countries in which company operates. In the
                            event of any conflict between this Policy and applicable laws and
                            regulations, the latter shall prevail.
                        </p>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">23. Retention of Personal Data</p>
                        <p>
                            We retain your Personal Data, not longer than necessary for the purposes for
                            which it was collected. The length of time to retain Personal Data depends
                            on the purposes for which we collect and use it and/or as may be required to
                            comply with applicable laws, to establish, exercise, or defend our legal
                            rights.
                        </p>
                        <p>
                            The users can exercise their rights enumerated herein. Also, if in case
                            required to extend the period of retention of such data, we shall obtain
                            your consent for the same. Further, we may also dispose the data prior to
                            completion of the period of retention, if the purpose for which it was
                            collected is exhausted.
                        </p>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">24. Procedures</p>
                        <p>
                            The Company has taken the following steps to protect the Personal Data of
                            relevant stakeholders, which it holds or to which it has access:
                        </p>
                        <p>It appoints or employs employees with specific responsibilities for: </p>
                        <ul className="unorder_list">
                            <li> the processing and controlling of data</li>
                            <li>
                                the comprehensive reviewing and auditing of its data protection systems
                                and procedures
                            </li>
                            <li>
                                overviewing the effectiveness and integrity of all the data that must be
                                protected.
                            </li>
                            There are clear lines of responsibility and accountability for these
                            different roles.
                            <li>
                                it provides its employees with information and training to make them aware
                                of the importance of protecting Personal Data, to teach them how to do
                                this, and to understand how to treat information confidentially
                            </li>
                            <li>
                                it can account for all Personal Data it holds, where it comes from, who it
                                is shared with and also who it might be shared with
                            </li>
                            <li>
                                it carries out risk assessments as part of its reviewing activities to
                                identify any vulnerabilities in its Personal Data handling and processing,
                                and to take measures to reduce the risks of mishandling and potential
                                breaches of data security. The procedure includes an assessment of the
                                impact of both use and potential misuse of Personal Data in and by the
                                Company
                            </li>
                            <li>
                                it recognises the importance of seeking individuals’ consent for
                                obtaining, recording, using, sharing, storing and retaining their Personal
                                Data, and regularly reviews its procedures for doing so, including the
                                audit trails that are needed and are followed for all consent decisions.
                                The Company understands that consent must be freely given, specific,
                                informed and unambiguous. The Company will seek consent on a specific and
                                individual basis where appropriate. Full information will be given
                                regarding the activities about which consent is sought. Relevant
                                individuals have the absolute and unimpeded right to withdraw that consent
                                at any time
                            </li>
                            <li>
                                it has the appropriate mechanisms for detecting, reporting and
                                investigating suspected or actual Personal Data breaches, including
                                security breaches. It is aware of its duty to report significant breaches
                                that cause significant harm to the affected individuals to the relevant
                                supervisory authority, and is aware of the possible consequences
                            </li>
                            <li>
                                it is aware of the implications international transfer of Personal Data
                                internationally.
                            </li>
                        </ul>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">25. Breach notification</p>
                        <p>
                            Where a data breach is likely to result in a risk to the rights and freedoms
                            of individuals, it will be reported to the relevant supervisory authority
                            within 72 hours of the Company becoming aware of it and may be reported in
                            more than one instalment. Individuals will be informed directly in the event
                            that the breach is likely to result in a high risk to the rights and
                            freedoms of that individual. If the breach is sufficient to warrant
                            notification to the public, the Company will do so without undue delay.
                        </p>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">26. External Links on our website</p>
                        <p>
                            For your convenience we may provide links to sites operated by organizations
                            other than Careerera ("Third Party Sites") that we believe may be of
                            interest to you. We do not disclose your Personal Data to these Third-Party
                            Sites unless we have a lawful basis on which to do so. We do not endorse and
                            are not responsible for the privacy practices of these Third-Party Sites. If
                            you choose to click on a link to one of these Third-Party Sites, you should
                            review the privacy policy posted on the other websites to understand how
                            that Third-Party website collects and uses your Personal Data.
                        </p>

                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">27. Information for California Residents</p>
                        <p>
                            In particular, depending upon your relationship with Careerera we may have
                            collected the following categories of Personal Data within the last twelve
                            (12) months:
                        </p>
                        <div className="full-w border mb-3">
                            <div className="table-responsive">
                                <table className="table min-widen-200 table-bordered mb-0">
                                    <thead>
                                        <tr>
                                            <th className='align-top text-black text-base'>Identifiers.</th>
                                            <th className='align-top text-black text-base'>
                                                A real name, alias, postal address, unique personal identifier,
                                                online identifier, Internet Protocol address, email address,
                                                account name, Social Security number, driver’s license number,
                                                passport number, or other similar identifiers.
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='align-top text-black font-medium  text-base'>
                                                Personal Information categories listed in the California Customer
                                                Records statute (Cal. Civ. Code § 1798.80(e)).
                                            </td>
                                            <td className='align-top text-black font-medium  text-base'>
                                                A name, signature, Social Security number, physical
                                                characteristics or description, address, telephone number,
                                                passport number, driver’s license or state identification card
                                                number, insurance policy number, education, employment, employment
                                                history, bank account number, credit card number, debit card
                                                number, or any other financial information, medical information,
                                                or health insurance information. Some Personal Information
                                                included in this category may overlap with other categories.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-top text-black font-medium  text-base'>
                                                Protected classification characteristics under California or
                                                federal law.
                                            </td>
                                            <td className='align-top text-black font-medium  text-base'>
                                                Age, race, color, ancestry, national origin, citizenship, religion
                                                or creed, marital status, medical condition, physical or mental
                                                disability, sex (including gender, gender identity, gender
                                                expression, pregnancy or childbirth and related medical
                                                conditions), sexual orientation, veteran or military status,
                                                genetic information (including familial genetic information).
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-top text-black font-medium  text-base'>Commercial information.</td>
                                            <td className='align-top text-black font-medium  text-base'>
                                                Records of personal property, products or services purchased,
                                                obtained, or considered, or other purchasing or consuming
                                                histories or tendencies.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-top text-black font-medium  text-base'>Biometric information.</td>
                                            <td className='align-top text-black font-medium  text-base'>
                                                Genetic, physiological, behavioural, and biological
                                                characteristics, or activity patterns used to extract a template
                                                or other identifier or identifying information, such as,
                                                fingerprints, faceprints, and voiceprints, iris or retina scans,
                                                keystroke, gait, or other physical patterns, and sleep, health, or
                                                exercise data.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-top text-black font-medium  text-base'>Internet or other similar network activity.</td>
                                            <td className='align-top text-black font-medium  text-base'>
                                                Browsing history, search history, information on a consumer’s
                                                interaction with a website, application, or advertisement.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-top text-black font-medium  text-base'>Geolocation data.</td>
                                            <td className='align-top text-black font-medium  text-base'>Physical location or movements.</td>
                                        </tr>
                                        <tr>
                                            <td className='align-top text-black font-medium  text-base'>Sensory data.</td>
                                            <td className='align-top text-black font-medium  text-base'>
                                                Audio, electronic, visual, thermal, olfactory, or similar
                                                information
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-top text-black font-medium  text-base'>Professional or employment-related information.</td>
                                            <td className='align-top text-black font-medium  text-base'>Current or past job history or performance evaluations.</td>
                                        </tr>
                                        <tr>
                                            <td className='align-top text-black font-medium  text-base'>
                                                Non-public education information (per the Family Educational
                                                Rights and Privacy Act (20 U.S.C. Section 1232g, 34 C.F.R. Part
                                                99)).
                                            </td>
                                            <td className='align-top text-black font-medium  text-base'>
                                                Education records directly related to a student maintained by an
                                                educational institution or party acting on its behalf, such as
                                                grades, transcripts, class lists, student schedules, student
                                                identification codes, student financial information, or student
                                                disciplinary records.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-top text-black font-medium  text-base'>Inferences drawn from other Personal Information.</td>
                                            <td className='align-top text-black font-medium  text-base'>
                                                Profile reflecting a person’s preferences, characteristics,
                                                psychological trends, predispositions, behaviour, attitudes,
                                                intelligence, abilities, and aptitudes.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-top text-black font-medium  text-base'>Sensitive personal Information</td>
                                            <td className='align-top text-black font-medium  text-base'>
                                                Consumers Social Security, driver's license, identification card,
                                                passport number, a consumer’s account log‐in, financial account,
                                                debit card, or credit card number in combination with any required
                                                security or access code, password, or credentials allowing access
                                                to an account, genetic data, contents of consumer's mail, email or
                                                text messages, consumers racial or ethnic origin, religious or
                                                philosophical beliefs, or union membership and their genetic data
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p>
                            <span>
                                <span>
                                    <span>
                                        <span>
                                            <span>
                                                For more information on types of Personal Data we collect,
                                                including the sources we receive information from, review
                                                section&nbsp;
                                            </span>
                                        </span>
                                    </span>
                                    <strong>
                                        <span>
                                            <span>
                                                <span style={{ color: "#363636" }}>
                                                    Types of Personal Data collected
                                                </span>
                                            </span>
                                        </span>
                                    </strong>
                                    <span>
                                        <span>
                                            <span>
                                                . We collect and use these categories of personal information for
                                                the business purposes described in section&nbsp;
                                            </span>
                                        </span>
                                    </span>
                                    <strong>
                                        <span>
                                            <span>
                                                <span style={{ color: "#363636" }}>
                                                    Purpose of Collecting data,&nbsp;
                                                </span>
                                            </span>
                                        </span>
                                    </strong>
                                    <span>
                                        <span>
                                            <span>including to provide and manage our platforms.</span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </p>
                        <p>
                            <span>
                                <span>
                                    <span>
                                        <span>
                                            <span>
                                                Careerera does not engage in selling of Personal Data (as defined
                                                under CCPA). In case of advertising technology activities used,
                                                such as those disclosed in the&nbsp;
                                            </span>
                                        </span>
                                    </span>
                                    <strong>
                                        <span>
                                            <span>
                                                <span style={{ color: "#363636" }}>
                                                    Advertising and Marketing&nbsp;
                                                </span>
                                            </span>
                                        </span>
                                    </strong>
                                    <span>
                                        <span>
                                            <span>&amp;&nbsp;</span>
                                        </span>
                                    </span>
                                    <strong>
                                        <span>
                                            <span>
                                                <span style={{ color: "#363636" }}>Data Analytics section</span>
                                            </span>
                                        </span>
                                    </strong>
                                    <span>
                                        <span>
                                            <span>
                                                , we will comply with applicable law as to such activity. If you
                                                are a California consumer and wish to opt-out of the sale of your
                                                Personal Data, See the “Do Not Sell My Personal Information” page
                                                on our Site homepage to exercise your right and know more on how
                                                to opt-out of the sale of Personal Information.
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </p>
                        <p>
                            <span>
                                <span>
                                    <span>
                                        <span>
                                            <span>
                                                You may also submit a request to us at dpo@Careerera.com.
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </p>
                        <p>
                            <span>
                                <span>
                                    <span>
                                        <span>
                                            <span>
                                                We use and partner with different types of entities to assist with
                                                our daily operations and manage our platforms. Please review the
                                                section&nbsp;
                                            </span>
                                        </span>
                                    </span>
                                    <strong>
                                        <span>
                                            <span>
                                                <span style={{ color: "#363636" }}>
                                                    Disclosure of your Personal Data&nbsp;
                                                </span>
                                            </span>
                                        </span>
                                    </strong>
                                    <span>
                                        <span>
                                            <span>
                                                for more detail about the parties we have shared your Personal
                                                Data with.
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </p>
                        <p>
                            <span>
                                <span>
                                    <span>
                                        <span>
                                            <span>
                                                We will not discriminate against you for exercising any of your
                                                CCPA rights. We may choose in the future to offer you certain
                                                financial incentives permitted by the CCPA that can result in
                                                different prices, rates, or quality levels. Any CCPA-permitted
                                                financial incentive we offer will reasonably relate to your
                                                Personal Data’s value and contain written terms that describe the
                                                Program’s material aspects.
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </p>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">
                            28. Use of this website and our Terms of Service
                        </p>
                        <p>
                            This website is the property of the Careerera. Our Terms of Use and this
                            Privacy Policy collectively govern the use of the Platform and the Programs
                            offered by Careerera. This Privacy Policy shall form a part of the Terms by
                            way of reference. By using this website and the information offered herein,
                            you indicate your acceptance of these Terms of Use.
                        </p>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">29. Updates to this policy</p>
                        <p>
                            We may update our Privacy Policy from time to time. We will take reasonable
                            steps to inform all Careerera entities, Customers, Business Partners, and
                            other data subjects affected by the revisions by posting the new Privacy
                            Policy on this page and/or via email.
                        </p>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">30. Data Controller/ Company Details</p>
                        <p>
                            The "Data Controller" (i.e., Careerera) means the entity that will make the
                            decisions about how your data is used and that is responsible for deciding
                            how it holds personal information about you.
                        </p>
                        <p>
                            Since Careerera is made up of different legal entities, the entity who will
                            be the controller for your data is dependent on the situation where your
                            Personal Data is collected.
                        </p>
                        <p className="text-2xl mt-2 mb-0 font-semibold mt-5 mb-1">31. Data Protection Officer</p>
                        <p>
                            The company, in accordance with the applicable laws, and all applicable
                            rules made thereunder, has appointed a Data Protection Officer; who can be
                            reached at the details below:
                        </p>
                        <p>Name: Mr</p>
                        <p>Email Address: dpo@Careerera.com</p>
                    </>

                </div>

            </div>
        </div>
    )
}
export default Privacy
