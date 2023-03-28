const countryPhoneNumber = {
    IN: "91",
    AF: "93",
    AX: "358",
    AL: "355",
    DZ: "213",
    AS: "1-684",
    AD: "376",
    AO: "244",
    AI: "1-264",
    AQ: "672",
    AG: "1-268",
    AR: "54",
    AM: "374",
    AW: "297",
    AU: "61",
    AT: "43",
    AZ: "994",
    BS: "1-242",
    BH: "973"
}

const countryCode = [
    "IN",
    "AF",
    "AX",
    "AL",
    "DZ",
    "AS",
    "AD",
    "AO",
    "AI",
    "AQ",
    "AG",
    "AR",
    "AM",
    "AW",
    "AU",
    "AT",
    "AZ",
    "BS",
    "BH"
]

const countryName = {
    "IN": "India",
    "AF": "Afghanistan",
    "AX": "Åland Islands",
    "AL": "Albania",
    "DZ": "Algeria",
    "AS": "American Samoa",
    "AD": "Andorra",
    "AO": "Angola",
    "AI": "Anguilla",
    "AQ": "Antarctica",
    "AG": "Antigua and Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AW": "Aruba",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas",
    "BH": "Bahrain",
}


export const questions = [
    {
        id: 1,
        type: "input",
        placeholder: "Type your answer here ...",
        isRequired: true,
        title: {
            isDynamic: false,
            text: "What's your first name?"
        },
        lastQuestion: false,
        ResponseTitle: "First Name"
    },
    {
        id: 2,
        type: "input",
        placeholder: "Type your answer here ...",
        isRequired: true,
        title: {
            isDynamic: true,
            dependentValue: [{
                questionId: 1,
                word: "_firstname"
            }],
            text: "and your last name, _firstname ?"
        },
        lastQuestion: false,
        ResponseTitle: "Last Name"
    },
    {
        id: 3,
        type: "dropdown",
        isRequired: true,
        placeholder: "Type or select an option",
        title: {
            isDynamic: false,
            text: "What industry is your company in?",
            subText: "We will personalize your learning experience accordingly",
        },
        dropdownOptions: [
            "Accounting",
            "Airlines / Aviation",
            "Alternative Dispute Resolution",
            "Alternative Medicine",
            "Animation",
            "Apparel & Fashion",
            "Architecture & Planning",
            "Arts and Crafts",
            "Automotive",
            "Aviation & Aerospace",
            "Banking",
            "Biotechnology",
            "Broadcast Media",
            "Building Materials",
            "Business Supplies and Equipment",
            "Capital Markets",
            "Chemicals",
            "Civic & Social Organization",
            "Civil Engineering",
            "Commercial Real Estate",
            "Computer & Network Security",
            "Computer Games",
            "Computer Hardware",
            "Computer Networking",
            "Computer Software",
            "Construction",
            "Consumer Electronics",
            "Crypto",
            "Consumer Goods",
            "Consumer Services",
            "Cosmetics",
            "Dairy",
            "Defense & Space",
            "Design",
            "Edtech",
            "Education Management",
            "E - Learning",
            "Electrical / Electronic Manufacturing",
            "Entertainment",
            "Environmental Services",
            "Events Services",
            "Executive Office",
            "Facilities Services",
            "Farming",
            "Financial Services",
            "Fine Art",
            "Fishery",
            "Food & Beverages",
            "Food Production",
            "Fund - Raising",
            "Furniture",
            "Gambling & Casinos",
            "Glass, Ceramics & Concrete",
            "Government Administration",
            "Government Relations",
            "Graphic Design",
            "Health, Wellness and Fitness",
            "Higher Education",
            "Hospital & Health Care",
            "Hospitality",
            "Human Resources",
            "Import and Export",
            "Individual & Family Services",
            "Industrial Automation",
            "Information Services",
            "Information Technology and Services",
            "Insurance",
            "International Affairs",
            "International Trade and Developm,ent",
            "Internet",
            "Investment Banking",
            "Investment Management",
            "Judiciary",
            "Law Enforcement",
            "Law Practice",
            "Legal Services",
            "Legislative Office",
            "Leisure, Travel & Tourism",
            "Libraries",
            "Logistics and Supply Chain",
            "Luxury Goods & Jewelry",
            "Machinery",
            "Management Consulting",
            "Maritime",
            "Marketing and Advertising",
            "Market Research",
            "Mechanical or Industrial Engineering",
            "Media Production",
            "Medical Devices",
            "Medical Practice",
            "Mental Health Care",
            "Military",
            "Mining & Metals",
            "Motion Pictures and Film",
            "Museums and Institutions",
            "Music",
            "Nanotechnology",
            "Newspapers",
            "Nonprofit Organization Management",
            "Oil & Energy",
            "Online Media",
            "Outsourcing / Offshoring",
            "Package / Freight Delivery",
            "Packaging and Containers",
            "Paper & Forest Products",
            "Performing Arts",
            "Pharmaceuticals",
            "Philanthropy",
            "Photography",
            "Plastics",
            "Political Organization",
            "Primary / Secondary Education",
            "Printing",
            "Professional Training & Coaching",
            "Program Development",
            "Public Policy",
            "Public Relations and Communications",
            "Public Safety",
            "Publishing",
            "Railroad Manufacture",
            "Ranching",
            "Real Estate",
            "Recreational Facilities and Services",
            "Religious Institutions",
            "Renewables & Environment",
            "Research",
            "Restaurants",
            "Retail",
            "Security and Investigations",
            "Semiconductors",
            "Shipbuilding",
            "Sporting Goods",
            "Sports",
            "Staffing and Recruiting",
            "Supermarkets",
            "Telecommunications",
            "Textiles",
            "Think Tanks",
            "Tobacco",
            "Translation and Localization",
            "Transportation / Trucking / Railroad",
            "Utilities",
            "Venture Capital & Private Equity",
            "Veterinary",
            "Warehousing",
            "Wholesale",
            "Wine and Spirits",
            "Wireless",
            "Writing and Editing"
        ],
        lastQuestion: false,
        ResponseTitle: "Industry of Company"
    },
    {
        id: 4,
        type: "option",
        optionLimit: 1,
        isRequired: true,
        title: {
            isDynamic: false,
            text: "Your role in your company?",
            subText: "We want to understand how you spend your time right now. [ 🔴DEVELOPER NOTICE: Options in the questions ahead depend on this question's response/s. ]"
        },
        options: [
            "Founder or CXO",
            "Product Team",
            "Marketing Team",
            "VC"
        ],
        lastQuestion: false,
        ResponseTitle: "Role"
    },
    {
        id: 5,
        type: "option",
        optionLimit: 2,
        isRequired: true,
        title: {
            isDynamic: true,
            text: "_firstname, what's your professional goal for the next 12 months?",
            dependentValue: [{
                questionId: 1,
                word: "_firstname"
            }],
        },
        options: [
            "Get Hired",
            "Get Promoted",
            "Connect with like-minded people",
            "Structured approach to growth",
            "Build a growth team"
        ],
        lastQuestion: false,
        ResponseTitle: "Professional Goal"
    },
    {
        id: 6,
        type: "email",
        isRequired: true,
        title: {
            isDynamic: false,
            text: "Email you'd like to register with?",
            subText: "We will keep all our communications with you through this email. Do check your spam inbox if you can't find our application received email. [ 🔴DEVELOPER NOTICE: Responses submitted to this form will be forwarded to the email you input here, for you to test data submissions. ]"
        },
        placeholder: "name@example.com",
        lastQuestion: false,
        ResponseTitle: "Email"
    },
    {
        id: 7,
        type: "phone",
        isRequired: true,
        title: {
            isDynamic: false,
            text: "Your phone number",
            subText: "We won't call you unless it is absolutely required to process your application."
        },
        placeholder: "08123456789",
        lastQuestion: true,
        countryPhoneNumber,
        countryCode,
        countryName,
        ResponseTitle: "Phone"
    }
]


export const totalQuestions = 7