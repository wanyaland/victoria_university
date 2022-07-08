import React, { Component } from "react";
import BreadNavBar from "./breadNav";
import NavBar from "./navbar";
import Footer from "./footer";
import ResNav from "./res_nav";
import { Link } from "react-router-dom";
import ResBanner from "./res_banner";
import "../assets/css/publications-custom-style.css";

class PublicRes extends Component {
  componentDidMount() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("activer");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  }
  change_icon(id, id2) {
    var element = document.getElementById(id);
    element.classList.add("hider");
    var element2 = document.getElementById(id2);
    element2.classList.add("block");
  }
  change_icon2(id, id2) {
    var element = document.getElementById(id);
    element.classList.remove("hider");
    var element2 = document.getElementById(id2);
    element2.classList.remove("block");
    console.log("HI4");
  }

  show_publication() {
    // var publications_container = document.getElementById(
    //   "publications-container"
    // );
    // var publication2 = publications_container.querySelectorAll(
    //   ".publications-child"
    // );
    // publication2.forEach((element) => {
    //   var current_publication = element.querySelectorAll(".Publications");
    //   current_publication.forEach((item) => {
    //     if (item.classList.contains("show")) {
    //       item.classList.remove("show");
    //     } else {
    //       item.classList.add("show");
    //       // item.nextElementSibling.classList.remove("show");
    //     }
    //   });
    // });

    const publication1 = document.getElementById("publications-child1");
    const publication2 = document.getElementById("publications-child2");
    const publication3 = document.getElementById("publications-child3");
    const publication4 = document.getElementById("publications-child4");
    const publication5 = document.getElementById("publications-child5");

    const publicationsArray = [
      publication1,
      publication2,
      publication3,
      publication4,
      publication5,
    ];

    publicationsArray.forEach((item) => {
      const publication = item.querySelector(".Publications");
      publication.classList.add("show");
    });
  }

  render() {
    return (
      <React.Fragment>
        <BreadNavBar />
        <NavBar />
        <ResBanner />
        <section className="w3l-top-header-content">
          <div className="hny-top-menu">
            <div
              className="top-hd"
              style={{ padding: "5px 0px 5px 0px", backgroundColor: "#024c74" }}
            >
              <div className="container-fluid">
                <div className="" style={{ color: "#EEE" }}>
                  <Link to="/">
                    <span className="underline" style={{ color: "#EEE" }}>
                      Victoria University
                    </span>
                  </Link>
                  &nbsp;/&nbsp;
                  <Link to="/research">
                    <span className="underline" style={{ color: "#EEE" }}>
                      Research At VU
                    </span>
                  </Link>
                  &nbsp;
                  <span style={{ color: "#EEE" }}>/ About Research</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w3l-team-main">
          <div className="team py-5">
            <div className="py-lg-5">
              <div
                className="justify-content-center"
                style={{ display: "flex" }}
              >
                <ResNav />
                <div
                  className="col-lg-9"
                  style={{
                    padding: "25px",
                    backgroundColor: "#FFF",
                    borderBottom: "#CCC 1px solid",
                    borderRight: "#CCC 1px solid",
                    borderTop: "#CCC 1px solid",
                  }}
                >
                  <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6
                      className="hny-title"
                      style={{
                        fontSize: "48px",
                        color: "#f74040",
                        fontWeight: "600",
                      }}
                    >
                      Publications
                    </h6>
                    <div
                      className="publications-container"
                      id="publications-container"
                    >
                      <div
                        className="publications-child"
                        id="publications-child1"
                      >
                        <div className="child-left">
                          <img src="assets/images/img/vc.JPG" alt="" />
                        </div>
                        <div className="child-right">
                          <h1>Prof. Lawrence Muganga</h1>
                          <p>
                            Vice Chancellor
                            <br />
                          </p>
                          <button
                            className="read-more"
                            onClick={function () {
                              const publication1 =
                                document.getElementById("publication1");
                              const button1 =
                                document.getElementById("read-more1");
                              const publication2 =
                                document.getElementById("publication2");
                              const button2 =
                                document.getElementById("read-more2");
                              const publication3 =
                                document.getElementById("publication3");
                              const button3 =
                                document.getElementById("read-more3");
                              const publication4 =
                                document.getElementById("publication4");
                              const button4 =
                                document.getElementById("read-more4");
                              const publication5 =
                                document.getElementById("publication5");
                              const button5 =
                                document.getElementById("read-more5");
                              const publication6 =
                                document.getElementById("publication6");
                              const button6 =
                                document.getElementById("read-more6");
                              if (publication1.classList.contains("show")) {
                                publication1.classList.remove("show");
                                button1.textContent = "View Publications";
                              } else {
                                publication1.classList.add("show");
                                button1.textContent = "Hide Publications";
                                publication2.classList.remove("show");
                                button2.textContent = "View Publications";
                                publication3.classList.remove("show");
                                button3.textContent = "View Publications";
                                publication4.classList.remove("show");
                                button4.textContent = "View Publications";
                                publication5.classList.remove("show");
                                button5.textContent = "View Publications";
                                publication6.classList.remove("show");
                                button6.textContent = "View Publications";
                                window.location.href = "#publications-child1";
                              }
                            }}
                            id="read-more1"
                          >
                            View Publications
                          </button>
                        </div>
                        <div
                          className="Publications"
                          m
                          id="publication1"
                          style={{ width: "100%" }}
                        >
                          <br />
                          <br />
                          <h5>Publications</h5>
                          <ul>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/328007333_You_Can't_Make_Fish_Climb_Trees_Overcoming_Educational_Malpractice_through_Authentic_Learning"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                You Can't Make “Fish Climb Trees”: Overcoming
                                Educational Malpractice through Authentic
                                Learning
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/353754546_Cup_quality_profiles_of_Robusta_Coffee_Wilt_Disease_Resistant_Varieties_grown_in_three_Agro-ecologies_in_Uganda"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Cup quality profiles of Robusta Coffee Wilt
                                Disease Resistant Varieties grown in three
                                Agro‐ecologies in Uganda
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/333773987_Screening_for_lactic_acid_bacteria_based_on_antihyperglycaemic_and_probiotic_potential_and_application_in_synbiotic_set_yoghurt"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Screening for lactic acid bacteria based on
                                antihyperglycaemic and probiotic potential and
                                application in synbiotic set yoghurt
                              </a>
                            </li>

                            <li>
                              <a
                                href="https://www.researchgate.net/publication/353754546_Cup_quality_profiles_of_Robusta_Coffee_Wilt_Disease_Resistant_Varieties_grown_in_three_Agro-ecologies_in_Uganda"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Cup quality profiles of Robusta Coffee Wilt
                                Disease Resistant Varieties grown in three
                                Agro‐ecologies in Uganda
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/336117384_Teacher-Centered_vs_Student-Centered"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Teacher-Centered vs. Student-Centered
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/333773987_Screening_for_lactic_acid_bacteria_based_on_antihyperglycaemic_and_probiotic_potential_and_application_in_synbiotic_set_yoghurt"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Screening for lactic acid bacteria based on
                                antihyperglycaemic and probiotic potential and
                                application in synbiotic set yoghurt
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/332351362_Here_are_the_ABCs_of_teaching_to_maximize_students%27_learning"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Here are the ABCs of teaching to maximize
                                students’ learning
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/329465737_Instructors%27_Perceptions_of_Authentic_Learning_in_the_Pedagogical_Approaches_of_Postsecondary_Education_in_Sub-Saharan_Africa"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Instructors’ Perceptions of Authentic Learning
                                in the Pedagogical Approaches of Postsecondary
                                Education in Sub-Saharan Africa
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/328007082_Instructors%27_Perceptions_of_Authentic_Learning_in_the_Pedagogical_Approaches_of_Postsecondary_Education_in_Sub-Saharan_Africa_A_Case_for_Uganda"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Instructors’ Perceptions of Authentic Learning
                                in the Pedagogical Approaches of Postsecondary
                                Education in Sub-Saharan Africa: A Case for
                                Uganda
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/305853115_Authentic_Learning_in_African_Post-Secondary_Education_and_the_Creative_Economy"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Authentic Learning in African Post-Secondary
                                Education and the Creative Economy
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/328174838_The_Importance_of_Hermeneutic_Theory_in_Understanding_and_Appreciating_Interpretive_Inquiry_as_a_Methodology"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                The Importance of Hermeneutic Theory in
                                Understanding and Appreciating Interpretive
                                Inquiry as a Methodology
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/276298627_Screening_for_lactic_acid_bacteria_based_on_antihyperglycaemic_and_probiotic_potential_and_application_in_synbiotic_set_yoghurt"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Screening for lactic acid bacteria based on
                                antihyperglycaemic and probiotic potential and
                                application in synbiotic set yoghurt
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="publications-child"
                        id="publications-child2"
                      >
                        <div className="child-left">
                          <img src="assets/images/img/Prof. Aug.jpg" alt="" />
                        </div>
                        <div className="child-right">
                          <h1>Prof. Augustine Osamor Ifelebuegu</h1>
                          <p>
                            DVC
                            <br />
                          </p>
                          <button
                            className="read-more"
                            onClick={function () {
                              const publication1 =
                                document.getElementById("publication1");
                              const button1 =
                                document.getElementById("read-more1");
                              const publication2 =
                                document.getElementById("publication2");
                              const button2 =
                                document.getElementById("read-more2");
                              const publication3 =
                                document.getElementById("publication3");
                              const button3 =
                                document.getElementById("read-more3");
                              const publication4 =
                                document.getElementById("publication4");
                              const button4 =
                                document.getElementById("read-more4");
                              const publication5 =
                                document.getElementById("publication5");
                              const button5 =
                                document.getElementById("read-more5");
                              const publication6 =
                                document.getElementById("publication6");
                              const button6 =
                                document.getElementById("read-more6");
                              if (publication2.classList.contains("show")) {
                                publication2.classList.remove("show");
                                button2.textContent = "View Publications";
                              } else {
                                publication2.classList.add("show");
                                button2.textContent = "Hide Publications";
                                publication1.classList.remove("show");
                                button1.textContent = "View Publications";
                                publication3.classList.remove("show");
                                button3.textContent = "View Publications";
                                publication4.classList.remove("show");
                                button4.textContent = "View Publications";
                                publication5.classList.remove("show");
                                button5.textContent = "View Publications";
                                publication6.classList.remove("show");
                                button6.textContent = "View Publications";
                                window.location.href = "#publications-child2";
                              }
                            }}
                            id="read-more2"
                          >
                            View Publications
                          </button>
                          <br />
                        </div>
                        <div
                          className="Publications"
                          id="publication2"
                          style={{ width: "100%" }}
                        >
                          <br />
                          <br />
                          <h5>Publications</h5>
                          <ul>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/259278691_Sonochemical_degradation_of_endocrine_disrupting_chemicals_17b-estradiol_and_17a-ethinylestradiol_in_water_and_wastewater"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Sonochemical degradation of endocrine disrupting
                                chemicals 17β-estradiol and 17α-ethinylestradiol
                                in water and wastewater
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/272795935_Liquid-phase_sorption_characteristics_of_human_hair_as_a_natural_oil_spill_sorbent"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Liquid-phase sorption characteristics of human
                                hair as a natural oil spill sorbent
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/321840384_Brexit_and_Article_50_of_the_Treaty_of_the_European_Union_Implications_for_UK_Energy_Policy_and_Security"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Brexit and Article 50 of the Treaty of the
                                European Union: Implications for UK Energy
                                Policy and Security
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/342899452_Investigating_the_Impact_of_Temperature_on_Relative_Permeability_Curves_Curing_Geological_CO2_Storage"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Investigating the Impact of Temperature on
                                Relative Permeability Curves Curing Geological
                                CO2 Storage
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/344027151_The_fiscal_regime_for_UK_shale_gas_Analysing_the_impacts_of_pad_allowance_on_shale_gas_investments"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                The fiscal regime for UK shale gas: Analysing
                                the impacts of pad allowance on shale gas
                                investments
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/342515203_The_influence_of_temperature_on_wettability_alteration_during_CO_2_storage_in_saline_aquifers"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                The influence of temperature on wettability
                                alteration during CO 2 storage in saline
                                aquifers
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/341902894_Kinetics_Isotherms_and_Thermodynamic_Modeling_of_the_Adsorption_of_Phosphates_from_Model_Wastewater_Using_Recycled_Brick_Waste"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Kinetics, Isotherms, and Thermodynamic Modeling
                                of the Adsorption of Phosphates from Model
                                Wastewater Using Recycled Brick Waste
                              </a>
                            </li>
                            <li>
                              <a
                                href="researchgate.net/publication/340276667_A_Comparative_Assessment_of_Pig_Manure_and_Poultry_Manure_in_the_Biodegradation_of_Diesel_Contaminated_Soil"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                A Comparative Assessment of Pig Manure and
                                Poultry Manure in the Biodegradation of Diesel
                                Contaminated Soil
                              </a>
                            </li>
                            <li>
                              <a
                                href="researchgate.net/publication/334496271_Modelling_the_effects_of_ferric_salt_dosing_for_chemical_phosphorus_removal_on_the_settleability_of_activated_sludge"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Modelling the effects of ferric salt dosing for
                                chemical phosphorus removal on the settleability
                                of activated sludge
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/333183938_The_Role_of_Emotional_Intelligence_Factors_in_Workers'_Occupational_Health_and_Safety_Performance-A_Case_Study_of_the_Petroleum_Industry"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                The Role of Emotional Intelligence Factors in
                                Workers’ Occupational Health and Safety
                                Performance—A Case Study of the Petroleum
                                Industry
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/333183938_The_Role_of_Emotional_Intelligence_Factors_in_Workers'_Occupational_Health_and_Safety_Performance-A_Case_Study_of_the_Petroleum_Industry"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                The Role of Emotional Intelligence Factors in
                                Workers’ Occupational Health and Safety
                                Performance—A Case Study of the Petroleum
                                Industry
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/333044927_Coalbed_methane_development_in_Indonesia_Design_and_economic_analysis_of_upstream_petroleum_fiscal_policy"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Coalbed methane development in Indonesia: Design
                                and economic analysis of upstream petroleum
                                fiscal policy
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/331099150_Brexit_and_UK_Energy_Security_Perspectives_from_Unconventional_Gas_Investment_and_the_Effects_of_Shale_Gas_on_UK_Energy_Prices"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Brexit and UK Energy Security: Perspectives from
                                Unconventional Gas Investment and the Effects of
                                Shale Gas on UK Energy Prices
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/330521172_Effect_of_Aluminium_Salt_Dosing_on_Activated_Sludge_Settleability_Indicators_A_New_Settleability_Model_Development"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Effect of Aluminium Salt Dosing on Activated
                                Sludge Settleability Indicators: A New
                                Settleability Model Development
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/327042169_Renewable_Energy_in_Africa_Policies_Sustainability_and_Affordability"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Renewable Energy in Africa: Policies,
                                Sustainability, and Affordability
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/328277861_Oil_and_Gas_Production_and_the_Growth_of_Ghana's_Economy_An_Initial_Assessment"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Oil and Gas Production and the Growth of Ghana’s
                                Economy: An Initial Assessment
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/327441760_Adsorptive_Properties_of_Poly1-methylpyrrol-2-ylsquaraine_Particles_for_the_Removal_of_Endocrine-Disrupting_Chemicals_from_Aqueous_Solutions_Batch_and_Fixed-Bed_Column_Studies"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Adsorptive Properties of
                                Poly(1-methylpyrrol-2-ylsquaraine) Particles for
                                the Removal of Endocrine-Disrupting Chemicals
                                from Aqueous Solutions: Batch and Fixed-Bed
                                Column Studies
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/326709327_The_Impact_of_Aluminium_Salt_Dosing_for_Chemical_Phosphorus_Removal_on_the_Settleability_of_Activated_Sludge"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                The Impact of Aluminium Salt Dosing for Chemical
                                Phosphorus Removal on the Settleability of
                                Activated Sludge
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/325309803_Low_Cost_Sustainable_Materials_for_Grey_Water_Reclamation"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Low Cost Sustainable Materials for Grey Water
                                Reclamation
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/322892073_Analysis_of_Penalties_Imposed_on_Organisations_for_Breaching_Safety_and_Health_Regulations_in_the_UK"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Analysis of Penalties Imposed on Organisations
                                for Breaching Safety and Health Regulations in
                                the UK
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/320950331_The_application_of_Bayesian_-_Layer_of_Protection_Analysis_method_for_risk_assessment_of_critical_subsea_gas_compression_systems"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                The application of Bayesian – Layer of
                                Protection Analysis method for risk assessment
                                of critical subsea gas compression systems
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/320038110_A_Technique_for_the_Retrospective_and_Predictive_Analysis_of_Cognitive_Errors_for_the_Oil_and_Gas_Industry_TRACEr-OGI"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                A Technique for the Retrospective and Predictive
                                Analysis of Cognitive Errors for the Oil and Gas
                                Industry (TRACEr-OGI)
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/317269949_Human_factors_analysis_and_classification_system_for_the_oil_and_gas_industry_HFACS-OGI"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Human factors analysis and classification system
                                for the oil and gas industry (HFACS-OGI)
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/315467081_Environmental_effects_of_crude_oil_spill_on_the_physicochemical_and_hydrobiological_characteristics_of_the_Nun_River_Niger_Delta"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Environmental effects of crude oil spill on the
                                physicochemical and hydrobiological
                                characteristics of the Nun River, Niger Delta
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/315705246_Grey_water_reclamation_for_urban_non-potable_reuse_-_challenges_and_solutions_a_review"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Grey water reclamation for urban non-potable
                                reuse - challenges and solutions a review
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/311617374_Field_Evaluation_of_Improved_Oil_Recovery_Methods_in_a_Libyan_Oilfield"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Field Evaluation of Improved Oil Recovery
                                Methods in a Libyan Oilfield
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/311617589_Application_of_Analytic_Hierarchy_Process_to_Identify_the_Most_Influencing_Human_Factors_HFs_and_Performance_Influencing_Factors_PIFs_in_Process_Safety_Accidents"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Application of Analytic Hierarchy Process to
                                Identify the Most Influencing Human Factors
                                (HFs) and Performance Influencing Factors (PIFs)
                                in Process Safety Accidents
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/308352943_Mechanistic_evaluation_and_reaction_pathway_of_UV_photo-assisted_Fenton-like_degradation_of_progesterone_in_water_and_wastewater"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Mechanistic evaluation and reaction pathway of
                                UV photo-assisted Fenton-like degradation of
                                progesterone in water and wastewater
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/308397535_The_impact_of_alum_on_the_bulking_of_a_full_scale_activated_sludge_plant"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                The impact of alum on the bulking of a full
                                scale activated sludge plant
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/305766633_Oil_Spill_Clean-up_from_Sea_Water_using_Waste_Chicken_Feathers"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Oil Spill Clean-up from Sea Water using Waste
                                Chicken Feathers
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/305766303_The_fate_and_behaviour_of_steroid_hormones_in_wastewater_sludge_anaerobic_digestion_at_mesophilic_and_thermophilic_temperatures"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                The fate and behaviour of steroid hormones in
                                wastewater sludge anaerobic digestion at
                                mesophilic and thermophilic temperatures
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/305766408_The_Adsorptive_Properties_of_Fired_Clay_Pellets_for_the_Removal_of_Phosphate_in_Wastewater_Treatment"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                The Adsorptive Properties of Fired Clay Pellets
                                for the Removal of Phosphate in Wastewater
                                Treatment
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/279178432_Promoting_competition_and_the_emergence_of_an_efficient_domestic_economy"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Promoting competition and the emergence of an
                                efficient domestic economy
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/277342020_Comparative_potential_of_black_tea_leaves_waste_to_granular_activated_carbon_in_adsorption_of_endocrine_disrupting_compounds_from_aqueous_solution"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Comparative potential of black tea leaves waste
                                to granular activated carbon in adsorption of
                                endocrine disrupting compounds from aqueous
                                solution
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/272795782_An_Evaluation_of_the_Adsorptive_Properties_of_Coconut_Husk_for_Oil_Spill_Cleanup"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                An Evaluation of the Adsorptive Properties of
                                Coconut Husk for Oil Spill Cleanup
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/268801044_Optimising_Final_Clarifier_Design_and_Performance_of_an_Activated_Sludge_Plant_using_Mathematical_Modelling"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Optimising Final Clarifier Design and
                                Performance of an Activated Sludge Plant using
                                Mathematical Modelling
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/263096902_Water_Resources_in_the_Built_Environment_Management_Issues_and_Solutions"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Water Resources in the Built Environment:
                                Management Issues and Solutions
                              </a>
                            </li>
                            <br />

                            <a
                              href="https://scholar.google.co.uk/citations?user=bQQvgqUAAAAJ&hl=en"
                              target={"_blank"}
                              rel="noreferrer"
                              style={{
                                color: "#ffffff",
                                fontSize: "26px",
                                padding: "10px",
                              }}
                              className=" btn-primary"
                            >
                              Click here for more publications
                            </a>
                          </ul>
                        </div>
                      </div>

                      <div
                        className="publications-child"
                        id="publications-child3"
                      >
                        <div className="child-left">
                          <img src="assets/images/img/Prof. Athur.jpg" alt="" />
                        </div>
                        <div className="child-right">
                          <h1>Prof. Athur Ahimbisibwe</h1>
                          <p>
                            Academic Registrar
                            <br />
                          </p>
                          <button
                            className="read-more"
                            onClick={function () {
                              const publication1 =
                                document.getElementById("publication1");
                              const button1 =
                                document.getElementById("read-more1");
                              const publication2 =
                                document.getElementById("publication2");
                              const button2 =
                                document.getElementById("read-more2");
                              const publication3 =
                                document.getElementById("publication3");
                              const button3 =
                                document.getElementById("read-more3");
                              const publication4 =
                                document.getElementById("publication4");
                              const button4 =
                                document.getElementById("read-more4");
                              const publication5 =
                                document.getElementById("publication5");
                              const button5 =
                                document.getElementById("read-more5");
                              const publication6 =
                                document.getElementById("publication6");
                              const button6 =
                                document.getElementById("read-more6");
                              if (publication3.classList.contains("show")) {
                                publication3.classList.remove("show");
                                button3.textContent = "View Publications";
                              } else {
                                publication1.classList.remove("show");
                                button1.textContent = "View Publications";
                                publication2.classList.remove("show");
                                button2.textContent = "View Publications";
                                publication3.classList.add("show");
                                button3.textContent = "Hide Publications";
                                publication4.classList.remove("show");
                                button4.textContent = "View Publications";
                                publication5.classList.remove("show");
                                button5.textContent = "View Publications";
                                publication6.classList.remove("show");
                                button6.textContent = "View Publications";
                                window.location.href = "#publications-child3";
                              }
                            }}
                            id="read-more3"
                          >
                            View Publications
                          </button>
                        </div>
                        <div
                          className="Publications"
                          id="publication3"
                          style={{ width: "100%" }}
                        >
                          <br />
                          <br />
                          <br />
                          <h5>Publications</h5>
                          <ul>
                            <li>
                              <a
                                href="https://www.tandfonline.com/doi/abs/10.1080/15228916.2014.920610"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Ahimbisibwe, A. (2014). The Influence of
                                Contractual Governance Mechanisms, Buyer–
                                Supplier Trust and Supplier Opportunistic
                                Behavior on Supplier Performance. Journal of
                                African Business, 15:2, 85-99
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.tandfonline.com/doi/abs/10.1080/15228916.2012.693436"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Ahimbisibwe, A., & Nangoli, S. (2012). Project
                                Communication, Individual Commitment, Social
                                Networks and Perceived Project Performance.
                                Journal of African Business, 13 (2):101-114
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.emeraldinsight.com/doi/abs/10.1108/JOPP-12-04-2012-B001"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Ahimbisibwe, A., Muhwezi, M., & Nangoli, S.
                                (2012).Outsourced Contracts, Buyer- Supplier
                                Trust, Supplier Opportunistic Behavior and
                                Supplier Performance in Ugandan Public Procuring
                                and Disposing Entities (PDE’s). Journal of
                                Public Procurement, 12 (4):435-470.
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.emeraldinsight.com/doi/abs/10.1108/JEIM-06-2015-0056"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Ahimbisibwe, A., Daellenbach, U., & Cavana, R.Y.
                                (2017). Empirical Comparison of Traditional
                                Plan-Based and Agile Methodologies: Critical
                                Success Factors for Outsourced Software
                                Development Projects from Vendors’ Perspective.
                                Journal of Enterprise Information Management
                                (Emerald), 30 (3): 400-453
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.emeraldinsight.com/doi/abs/10.1108/JEIM-08-2013-0060"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Ahimbisibwe, A., Cavana, R.Y., & Daellenbach, U.
                                (2015). A Contingency Fit Model Of Critical
                                Success Factors for Software Development
                                Projects. Journal of Enterprise Information
                                Management (Emerald), 28 (1): 7-33
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.emeraldinsight.com/doi/pdfplus/10.1108/RMJ-06-2015-0024"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Tumuhairwe, R., & Ahimbisibwe, A. (2016).
                                Procurement Records Compliance, Effective Risk
                                management and Records Management Performance:
                                Evidence from Ugandan Public Procuring and
                                Disposing Entities. Records Management Journal
                                (Emerald), 26(1): 83-101.{" "}
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.emeraldinsight.com/doi/abs/10.1108/JSMA-02-2013-0012?fullSc=1"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Nangoli, S., Ahimbisibwe, A., Namagembe, S., &
                                Bashir, H. (2013). Social Networks: A strategy
                                for Enhancing Project Stakeholder Commitment.
                                Journal of Strategy and Management (Emerald),
                                6(4): 399-410
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.springer.com/gp/book/9783319492797"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Kansiime, D., Ntayi, J., & Ahimbisibwe, A.
                                (2017). Contractual Governance Mechanisms,
                                Dynamic Capabilities, Transactional Specific
                                Relationships and Supplier Performance in
                                Uganda. In Global Public Procurement Theories
                                and Practices; Springer International Publishing
                                AG. Editors: Thai, Khi.V (Ed.). eBook ISBN
                                978-3-319-49280-3; Number of Pages XIV, 339;
                                Pages 139-155
                              </a>
                            </li>
                            <li>
                              <a
                                href="http://www.eajournals.org/journals/european-journal-of-logistics-purchasing-and-supply-chain-management-ejlpscm/vol-4-issue-2-april-2016/supply-chain-visibility-supply-chain-velocity-supply-chain-alignment-and-humanitarian-supply-chain-relief-agility/"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Ahimbisibwe, A., Ssebulime, R., Tumuhairwe, R.,
                                & Tusiime, W. (2016). Supply Chain Visibility,
                                Supply Chain Velocity, Supply Chain Alignment
                                and Humanitarian Supply Chain Relief Agility.
                                European Journal of Logistics, Purchasing and
                                Supply Chain Management,4 (2): 1-10.{" "}
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/288228956_The_moderating_influence_of_inherent_project_risk_on_the_relationship_between_project_planning_and_perceived_project_success"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Ahimbisibwe, A., Tusiime, W., & Tumuhairwe, R.
                                (2015). The Moderating Influence of Inherent
                                Project Risk on the Relationship between Project
                                Planning and Perceived Project Success.
                                International Journal of Supply Chain
                                Management, 4(3): 69-77.
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/328980533_Mediating_influence_of_Individual_Commitment_and_Social_Networks_on_the_relationship_between_Project_Communication_and_Perceived_Project_Performance_A_Structural_Equation_Modelling_Approach_European_J"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Ahimbisibwe, A., Tumuhairwe, R., & Tusiime, W.
                                (2015). Mediating influence of Individual
                                Commitment and Social Networks on the
                                relationship between Project Communication and
                                Perceived Project Performance: A Structural
                                Equation Modelling Approach. European Journal of
                                Business and Management, 7, (23): 126-135.
                              </a>
                            </li>
                            <li>
                              <a
                                href="http://www.researchjournali.com/view.php?id=1932"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Ahimbisibwe, A., Tusiime, W., & Tumuhairwe, R.
                                (2016). Adoption of E-Procurement Technology in
                                Uganda: Migrating from the Manual Public
                                Procurement Systems to the Internet. Journal of
                                Supply Chain Management, 3 (1):1-23.
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.researchgate.net/publication/328980544_Contractual_Governance_Mechanisms_and_Supplier_Delivery_Performance_Testing_mediating_effects_of_Buyer-Supplier_Trust_and_Supplier_Opportunism_European_Journal_of_Business_and_Management_7_2494-"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Ahimbisibwe, A., Tusiime, W., & Tumuhairwe, R.
                                (2015). Contractual Governance Mechanisms and
                                Supplier Delivery Performance: Testing mediating
                                effects of Buyer-Supplier Trust and Supplier
                                Opportunism. European Journal of Business and
                                Management, 7 (24):94-111.
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.springer.com/gp/book/9783319492797"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Kansiime, D., Ntayi, J., & Ahimbisibwe, A.
                                (2017). Contractual Governance Mechanisms,
                                Dynamic Capabilities, Transactional Specific
                                Relationships and Supplier Performance in
                                Uganda. In Global Public Procurement Theories
                                and Practices; Springer International Publishing
                                AG. Editors: Thai, Khi.V (Ed.). eBook ISBN
                                978-3-319-49280-3; Number of Pages XIV, 339;
                                Pages 139-155.
                              </a>
                            </li>
                            <li>
                              Ahimbisibwe, A., Ssentamu, A., & Bucyana, M.
                              (2019). Supplier Delivery Performance of Public
                              Procurement Contracts in Ugandan Central
                              Government Procuring and Disposing Entities
                              (PDEs). European Journal of Logistics, Purchasing
                              and Supply Chain Management, 7 (3):12-39.
                            </li>
                            <li>
                              Ahimbisibwe, A., Baluka, M., & Bucyana, M. (2019).
                              Contractuctual Governance Mechanisms,
                              Whistleblowing, Contract Monitoring and Contractor
                              Performance of Works. European Journal of
                              Logistics, Purchasing and Supply Chain Management,
                              7 (3):40-67.
                            </li>

                            <li>
                              Ahimbisibwe, A.,Tumuhairwe, R., & Tusiime,
                              W.(2016). Feedback on Formative Assessments and
                              Student Satisfaction with Feedback: Graduate
                              students’ Perceptions of Feedback in a Ugandan
                              University. Journal of Management, 4 (1):1-14.
                            </li>
                            <li>
                              Muhwezi, M., & Ahimbisibwe, A. (2015). Contract
                              Management, Inter Functional Coordination, Trust
                              and Contract Performance of Works Contracts in
                              Ugandan Public Procuring and Disposing Entities.
                              European Journal of Business and Management, 7
                              (20):76-86.
                            </li>
                            <li>
                              Ahimbisibwe, A., Muhwezi, M., & Eyaa, S. (2012).
                              Supplier Opportunism, Contract Management and
                              Service Delivery in Outsourced Contracts in Public
                              Procuring and Disposing Entities (PDE’s) in
                              Uganda. Journal of Public Procurement and Contract
                              Management, 1(1): 64-84.
                            </li>
                            <li>
                              Ahimbisibwe, A., Nangoli, S., & Tusiime, W.
                              (2012). Mediating Effects of Network Degree and
                              Network transitivity on the Relationship between
                              Project Communication Strategies and Perceived
                              Project Success. International Journal of
                              Economics and Management Sciences, 2 (2): 01-10.
                            </li>
                            <li>
                              Ahimbisibwe, A., Nangoli, S. & Tusiime, W. (2012).
                              Formal Contractual Governance Mechanisms, Contract
                              Contingencies, Inter-Organizational Trust,
                              Supplier Opportunism and Outsourcing Performance.
                              International Journal of Business and Behavioural
                              Sciences, 2(9):7-20.
                            </li>
                            <li>
                              Ahimbisibwe, A., & Nangoli, S. (2012). Social
                              Networks: Mediator of Project Communication and
                              Perceived Project Success. International Journal
                              of Humanities and Social Science, 2 (20):73-85.
                            </li>
                            <li>
                              Ahimbisibwe, A., & Muhwezi, M. (2012). The Effect
                              of Vertical Collaborations, Buyer- Supplier
                              Compliance and Contract Performance in Public
                              Procuring and Disposing Entities (PDEs) in Uganda.
                              A Case of National Water and Sewerage Corporation
                              (NWSC) Uganda. Operations Research Society of
                              Eastern Africa Journal, 2(1):21-54.
                            </li>
                            <li>
                              Ahimbisibwe, A., Nangoli, S., & Tusiime, W.
                              (2013). Project Communication and Perceived
                              Project Performance: The Mediating Influence of
                              Individual Commitment in Uganda’s Citizenship
                              Projects. Operations Research Society of Eastern
                              Africa Journal, 3(3): 1-22.
                            </li>
                            <li>
                              Tusiime, W., Ahimbisibwe, A. & Nangoli, S. (2013).
                              Relationship between the Perceived Factors for
                              Effective Logistics and Customer Satisfaction: A
                              Case of Tanzania’s Telecommunication Industry.
                              Operations Research Society of Eastern Africa
                              Journal, ORSEA 10th Anniversary.
                            </li>
                            <li>
                              Ahimbisibwe, A., & Nangoli, S. (2012). Using the
                              Behavioural Factors to explain Perceived Project
                              Performance of Ugandan Citizenship Projects: A
                              Multivariate Analysis. International Journal of
                              Business and Social Science, 3 (10):208-224.
                            </li>
                            <li>
                              Ahimbisibwe, A., & Nangoli, S. (2012). Moderating
                              Effect of Buyer-Supplier Trust on the Relationship
                              between Outsourced Formal Contracts and Supplier
                              Delivery Performance: An Empirical Study of Public
                              Sector Procurement. International Journal of
                              Business and Social Science, 3 (17):50-71.
                            </li>
                            <li>
                              Nangoli, S., Namagembe, S., Ahimbisibwe, A. &
                              Bashir Hassan. (2013). The Antecedent Role of
                              Social Networks in Project Communication.
                              International Journal of Economics and Management
                              Sciences, 2(8): 25-32.
                            </li>
                            <li>
                              Ahimbisibwe, A., Sheffield, J., & Lemétayer, J.
                              (2011). What Works When? Exploring Contingencies
                              in Software Development Methodology. Australian
                              and New Zealand Academy of Management (ANZAM)
                              Conference Proceedings: 7-9 December, Wellington,
                              New Zealand (Awarded best Paper of the year in
                              Technology, Innovation and Supply Chain
                              Management).
                            </li>
                            <li>
                              Cavana, B., Ahimbisibwe, A., & Kala, R. (2012).
                              Structural Equation Modelling of Undergraduate
                              Management Students’ Perceptions of Feedback in a
                              New Zealand University. 46th Operations Research
                              of New Zealand Conference Proceedings: 10-11
                              December, Wellington, New Zealand.
                            </li>
                            <li>
                              Ahimbisibwe, A., & Muhwezi, M. (2010). Vertical
                              Collaborations, Buyer-Supplier Compliance and
                              Contract Performance in Public Procuring and
                              Disposing Entities (PDEs) in Uganda. A Case of
                              National Water and Sewerage Corporation (NWSC)
                              Uganda.Operations Research Society of Eastern
                              Africa (ORSEA) Conference Proceedings, Kampala,
                              Uganda.
                            </li>
                            <li>
                              Ahimbisibwe, A. (2011). Contingency Theory in
                              Software development: A multivariate Analysis.
                              Australian and New Zealand Academy of Management
                              (ANZAM) Doctoral Symposium: 5-6 December,
                              Wellington, New Zealand.
                            </li>
                            <li>
                              Ahimbisibwe, A. (2011). Contingency Theory and
                              Methodology Selection for Software Development
                              Projects: A Multivariate Analysis. Paper Presented
                              at the Post Graduate Students Association (PGSA)
                              Research Seminar on Thursday 09, Feb 2012,
                              Victoria University of Wellington, New Zealand.
                            </li>
                            <li>
                              Ahimbisibwe, A., Ntayi, J. & Muhwezi, M. (2009).
                              Outsourced Contracts, Trust, Opportunistic
                              Behavior and Service Delivery in Public Procuring
                              and Disposing Entities in Uganda: 14th Annual
                              International Management Conference
                              (AIMC)Proceedings, Kampala, Uganda.
                            </li>
                            <li>
                              Ahimbisibwe, A., Muhwezi, M., & Eyaa, S. (2010).
                              Supplier-Opportunism, Contract Management and
                              Service Delivery in Outsourced Contracts in Public
                              Procuring and Disposing Entities in Uganda: 15th
                              Annual International Management Conference (AIMC)
                              Proceedings, Kampala, Uganda.
                            </li>
                            <li>
                              Ahimbisibwe, A. (2010). Vertical Collaborations,
                              Transaction costs, Buyer- Supplier Compliance and
                              Contract Performance in Public Procuring and
                              Disposing Entities (PDEs) in Uganda. A Case of
                              National Water and Sewerage Corporation (NWSC)
                              Uganda. Paper Presented at the Faculty of
                              Computing and Management Science research seminar,
                              Katikati Restaurant Kampala, Uganda.
                            </li>
                            <li>
                              Ahimbisibwe, A., Nangoli, S. & Tusiime, W. (2013).
                              Project Communication and Perceived Project
                              Performance: The Mediating Influence of Individual
                              Commitment in Uganda’s Citizenship
                              Projects.Research paper presented at the 9th
                              Operations Research Society of Eastern Africa
                              (ORSEA) conference October 17-18. Imperial Resort
                              Beach Hotel, Entebbe. Kampala. Uganda.
                            </li>
                            <li>
                              Tusiime, W., Ahimbisibwe, A., & Nangoli, S.
                              (2013). Relationship between the Perceived Factors
                              for Effective Logistics and Customer Satisfaction:
                              A case of Tanzania’s Telecommunication Industry.
                              Research paper presented at the 9th Operations
                              Research Society of Eastern Africa (ORSEA)
                              conference October 17-18. Imperial Resort Beach
                              Hotel, Entebbe. Kampala. Uganda.
                            </li>
                            <li>
                              Ahimbisibwe, A., & Moya, M. (2015). Migrating
                              Public Procurement Systems to the Internet:
                              Adoption, Practices, Willingness, and Challenges
                              of e-procurement Technology in Uganda’s Procuring
                              and Disposing Entities (PDE’s). 20th Annual
                              International Management Conference (AIMC) and the
                              3rd International Conference of Liberal Arts and
                              Social Sciences (ICOLASS). September 08-10,
                              Imperial Royal Hotel- Kampala, Uganda.
                            </li>
                            <li>
                              Ahimbisibwe, A. (2015). Feedback on Formative
                              Assessments and Student Satisfaction with
                              Feedback: Graduate students’ Perceptions of
                              Feedback in a Ugandan University. 20th Annual
                              International Management Conference (AIMC) and the
                              3rd International Conference of Liberal Arts and
                              Social Sciences (ICOLASS).September 08-10,
                              Imperial Royal Hotel- Kampala, Uganda.
                            </li>
                            <li>
                              Ahimbisibwe, A. (2015). Identifying the Critical
                              Success Factors in Software Development
                              Methodology Fit. 20th Annual International
                              Management Conference (AIMC) and the 3rd
                              International Conference of Liberal Arts and
                              Social Sciences (ICOLASS).September 08-10,
                              Imperial Royal Hotel- Kampala, Uganda.
                            </li>
                            <li>
                              Ahimbisibwe, A., Tumuhairwe, R., Tusiime, W., &
                              Bagenda, B. (2015). Contractual Governance
                              Mechanisms and Supplier Delivery Performance:
                              Testing Mediating Effects of Buyer-Supplier Trust
                              and Supplier Opportunism. 20th Annual
                              International Management Conference (AIMC) and the
                              3rd International Conference of Liberal Arts and
                              Social Sciences (ICOLASS). September 08-10,
                              Imperial Royal Hotel- Kampala, Uganda.
                            </li>
                            <li>
                              Ahimbisibwe, A., & Mutebi, A. (2015). Ethical Work
                              Climate and Ethical Attitudes of Procurement
                              Officers: Empirical Evidence from Government
                              Organizations in Uganda. 20th Annual International
                              Management Conference (AIMC) and the 3rd
                              International Conference of Liberal Arts and
                              Social Sciences (ICOLASS). September 08-10,
                              Imperial Royal Hotel- Kampala, Uganda.
                            </li>
                            <li>
                              Ahimbisibwe, A. (2015). The moderating influence
                              of inherent project risk on the relationship
                              between project planning and perceived project
                              success. 20th Annual International Management
                              Conference (AIMC) and the 3rd International
                              Conference of Liberal Arts and Social Sciences
                              (ICOLASS). September 08-10, Imperial Royal Hotel-
                              Kampala, Uganda.
                            </li>
                            <li>
                              Tumuhairwe, R., & Ahimbisibwe, A. (2015).
                              Procurement Records Compliance, Effective Risk
                              Management and Records Management Performance:
                              Evidence from Ugandan Public Procurement and
                              Disposing Entities. 20th Annual International
                              Management Conference (AIMC) and the 3rd
                              International Conference of Liberal Arts and
                              Social Sciences (ICOLASS). September 08-10,
                              Imperial Royal Hotel- Kampala, Uganda.
                            </li>
                            <li>
                              Bagenda, B., Ahimbisibwe, A., & Tusiime, W.
                              (2015). Motor Cycle Regulation and Accident
                              Reduction in Uganda: A Case of Kampala City
                              Council Authority. 20th Annual International
                              Management Conference (AIMC) and the 3rd
                              International Conference of Liberal Arts and
                              Social Sciences (ICOLASS). September 08-10,
                              Imperial Royal Hotel- Kampala, Uganda.
                            </li>
                            <li>
                              Tusiime, W., Ahimbisibwe, A., & Bagenda, B.
                              (2015). Logistics Outsourcing and Waste Management
                              Enhancement: A Case of Kampala Capital City
                              Authority. 20th Annual International Management
                              Conference (AIMC) and the 3rd International
                              Conference of Liberal Arts and Social Sciences
                              (ICOLASS). September 08-10, Imperial Royal
                              Hotel-Kampala, Uganda.
                            </li>
                            <li>
                              Ahimbisibwe, A., & Moya, M. (2015). Migrating
                              Public Procurement Systems to the Internet:
                              Adoption of E-Procurement Technology in Uganda’s
                              Procuring and Disposing Entities (PDE’s). 11th
                              Operations Research Society of Eastern Africa 28th
                              & 29th September. Dar es Salaam, Tanzania.
                            </li>
                            <li>
                              Tumuhairwe, R., & Ahimbisibwe, A. (2015).
                              Procurement Records Compliance, Effective Risk
                              Management and Records Management Performance:
                              Evidence from Ugandan Public Procurement and
                              Disposing Entities. 11th Operations Research
                              Society of Eastern Africa Conference 28th & 29th
                              September. Dar es Salaam, Tanzania.
                            </li>
                            <li>
                              Ahimbisibwe, A. (2015). Feedback on Formative
                              Assessments and Student Satisfaction With
                              Feedback: Graduate students’ Perceptions of
                              Feedback in a Ugandan University. 11th Operations
                              Research Society of Eastern Africa Conference 28th
                              & 29th September. Dar es Salaam, Tanzania.
                            </li>
                            <li>
                              Ahimbisibwe, A. Identifying the Critical Success
                              Factors in Software Development Methodology Fit.
                              11th Operations Research Society of Eastern Africa
                              Conference 28th & 29th September. Dar es
                              Salaam,Tanzania.
                            </li>
                            <li>
                              Ahimbisibwe, A., Tumuhairwe, R., Tusiime, W., &
                              Bagenda, B. (2015). Contractual Governance
                              Mechanisms and Supplier Delivery Performance:
                              Testing Mediating Effects of Buyer-Supplier Trust
                              and Supplier Opportunism. 11th Operations Research
                              Society of Eastern Africa Conference 28th & 29th
                              September. Dar es Salaam,Tanzania.
                            </li>
                            <li>
                              Ahimbisibwe, A., & Mutebi, A. (2015). Ethical Work
                              Climate and Ethical Attitudes of Procurement
                              Officers: Empirical Evidence from Government
                              Organizations in Uganda. 11th Operations Research
                              Society of Eastern Africa Conference 28th & 29th
                              September. Dar es Salaam,Tanzania.
                            </li>
                            <li>
                              Ahimbisibwe, A. The Moderating Influence of
                              Inherent Project Risk on the Relationship between
                              Project Planning and Perceived Project Success.
                              11th Operations Research Society of Eastern Africa
                              Conference 28th & 29th September. Dar es
                              Salaam,Tanzania.
                            </li>
                            <li>
                              Bagenda, B., Ahimbisibwe, A., & Tusiime, W.
                              (2015). Motor Cycle Regulation and Accident
                              Reduction in Uganda: A Case of Kampala City
                              Council Authority. 11th Operations Research
                              Society of Eastern Africa Conference 28th & 29th
                              September. Dar es Salaam, Tanzania.
                            </li>
                            <li>
                              Tusiime, W., Ahimbisibwe, A., & Bagenda, B.
                              (2015). Logistics Outsourcing and Waste Management
                              Enhancement: A Case of Kampala Capital City
                              Authority. 11th International Operations Research
                              Society of Eastern Africa Conference 28th & 29th
                              September. Dar es Salaam,Tanzania.
                            </li>
                            <li>
                              Ahimbisibwe, A. (2015). Adoption of E-Procurement
                              Technology in Uganda: Migrating from the Manual
                              Public Procurement Systems to the Internet’.
                              International Conference for the Advancement of
                              Business and Management Practices in Africa
                              (ICABUMPA) and the Intelligence for Innovation
                              (iN4iN) Conference, October 27th - 29th, Kenyatta
                              International Conference Center (KICC), Nairobi
                              Kenya.
                            </li>
                            <li>
                              Ahimbisibwe, A. & Mizaei, M. (2013). How to Manage
                              a PhD Project using Modern Project Management
                              Techniques. A research paper presented at Victoria
                              University Postgraduate Students Association
                              (PGSA) Colloquium, Friday, 12, July 2013.
                              Wellington. New Zealand.
                            </li>
                            <li>
                              Ahimbisibwe, A. (2008). Strategic Procurement
                              Management. A Study Guide for the Master of
                              Science in Procurement and Supply Chain
                              Management.
                            </li>
                            <li>
                              Ahimbisibwe, A. (2008). Supply chain operations
                              and Strategy. A Study Guide for the Master of
                              Science in Procurement and Supply Chain
                              Management.
                            </li>
                            <li>
                              Ahimbisibwe, A. (2008). Supply chain optimization
                              and alignment. A Study Guide for the Master of
                              Science in Procurement and Supply Chain
                              Management.
                            </li>
                            <li>
                              Ahimbisibwe, A. (2008). Stores and Inventory
                              Management. Study Guide for the Bachelor of
                              Procurement and Supply Chain Management
                            </li>
                            <li>
                              Ahimbisibwe, A. (2008). Logistics and Distribution
                              Management. Study Guide for the Bachelor of
                              Procurement and Supply Chain Management and
                              Bachelor of Transport and Logistics Management.
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="publications-child"
                        id="publications-child4"
                      >
                        <div className="child-left">
                          <img src="assets/images/img/kakeeto1.jpg" alt="" />
                        </div>
                        <div className="child-right">
                          <h1>Dr. David Kakeeto</h1>
                          <p>
                            Dean of Faculty of Science and Technology
                            <br />
                          </p>
                          <button
                            className="read-more"
                            onClick={function () {
                              const publication1 =
                                document.getElementById("publication1");
                              const button1 =
                                document.getElementById("read-more1");
                              const publication2 =
                                document.getElementById("publication2");
                              const button2 =
                                document.getElementById("read-more2");
                              const publication3 =
                                document.getElementById("publication3");
                              const button3 =
                                document.getElementById("read-more3");
                              const publication4 =
                                document.getElementById("publication4");
                              const button4 =
                                document.getElementById("read-more4");
                              const publication5 =
                                document.getElementById("publication5");
                              const button5 =
                                document.getElementById("read-more5");
                              const publication6 =
                                document.getElementById("publication6");
                              const button6 =
                                document.getElementById("read-more6");
                              if (publication4.classList.contains("show")) {
                                publication4.classList.remove("show");
                                button4.textContent = "View Publications";
                              } else {
                                publication1.classList.remove("show");
                                button1.textContent = "View Publications";
                                publication2.classList.remove("show");
                                button2.textContent = "View Publications";
                                publication3.classList.remove("show");
                                button3.textContent = "View Publications";
                                publication4.classList.add("show");
                                button4.textContent = "Hide Publications";
                                publication5.classList.remove("show");
                                button5.textContent = "View Publications";
                                publication6.classList.remove("show");
                                button6.textContent = "View Publications";
                                window.location.href = "#publications-child4";
                              }
                            }}
                            id="read-more4"
                          >
                            View publications
                          </button>
                          <br />
                        </div>

                        <div
                          className="Publications"
                          id="publication4"
                          style={{ width: "100%" }}
                        >
                          <br />
                          <br />
                          <br />
                          <h5>Publications</h5>
                          <ul>
                            <li>
                              {/* <a href="#ssss">My current publications</a> */}
                              Kakeeto D; Najjemba, JL; Kabugo, D and Masembe, E.
                              (2022), Utilizing Social Constructivism to
                              cultivate teacher educators’ and trainees’ digital
                              competence: energizing leaner-cantered approach
                              (in print).
                            </li>
                            <li>
                              {/* <a href="#ssss">My current publications</a> */}
                              Kakeeto D, Mugagga AM, Bisaso R (2020) Cultural
                              Processes and Teacher-Educators’ Technology
                              Knowledge and Skills at Makerere University.
                            </li>
                            <li>
                              {/* <a href="#ssss">My current publications</a> */}
                              Kakeeto D, Mugagga AM, Bisaso R (2020) Curriculum
                              Design and Teacher Educators’ Digital Competence:
                              Promoting Learner-Centered Teaching Approach in
                              Higher Institutions of Learning.
                            </li>
                            <li>
                              {/* <a href="#ssss">My current publications</a> */}
                              Kabugo, D; Kakeeto, D (2019) Acquiring Digital
                              Education Leadership Capabilities through
                              Heutagogy: A case of C-DELTA Implementation at
                              Makerere University.
                            </li>
                            <li>
                              {/* <a href="#ssss">My current publications</a> */}
                              Kakeeto D & Bakkabulindi F.E.K (2012) ICT and
                              students’ learning practices. The East African
                              Researcher Journal. Marianum Press.
                            </li>
                            <li>
                              {/* <a href="#ssss">My current publications</a> */}
                              Kakeeto D. (2021), Utilizing a social
                              constructivist approach to cultivate teacher
                              educators’ and trainees’ digital competence at
                              Makerere University. (PhD Thesis, Makerere
                              University).
                            </li>
                            <li>
                              {/* <a href="#ssss">My current publications</a> */}
                              Kakeeto D. (2009), Influence of ICT on students’
                              learning practices in secondary schools in Kampala
                              and Wakiso Districts. (Masters Dissertation,
                              Makerere University).
                            </li>
                            <li>
                              {/* <a href="#ssss">My current publications</a> */}
                              Kakeeto D. (2002), Impact of family background on
                              students’ academic performance in secondary
                              schools, Buwekula Mubende District. (Undergraduate
                              Dissertation, Makerere University).
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* <div
                        className="publications-child"
                        id="publications-child5"
                      >
                        <div className="child-left">
                          <img src="assets/images/img/rosemary.jpg" alt="" />
                        </div>
                        <div className="child-right">
                          <h1>Dr. Rosemary Nakijoba</h1>
                          <p>
                            Dean of Faculty of Humanities and Social Sciences
                            <br />
                          </p>
                          <button
                            className="read-more"
                            onClick={function () {
                              const publication1 =
                                document.getElementById("publication1");
                              const button1 =
                                document.getElementById("read-more1");
                              const publication2 =
                                document.getElementById("publication2");
                              const button2 =
                                document.getElementById("read-more2");
                              const publication3 =
                                document.getElementById("publication3");
                              const button3 =
                                document.getElementById("read-more3");
                              const publication4 =
                                document.getElementById("publication4");
                              const button4 =
                                document.getElementById("read-more4");
                              const publication5 =
                                document.getElementById("publication5");
                              const button5 =
                                document.getElementById("read-more5");
                              const publication6 =
                                document.getElementById("publication6");
                              const button6 =
                                document.getElementById("read-more6");
                              if (publication5.classList.contains("show")) {
                                publication5.classList.remove("show");
                                button5.textContent = "View Publications";
                              } else {
                                publication1.classList.remove("show");
                                button1.textContent = "View Publications";
                                publication2.classList.remove("show");
                                button2.textContent = "View Publications";
                                publication3.classList.remove("show");
                                button3.textContent = "View Publications";
                                publication4.classList.remove("show");
                                button4.textContent = "View Publications";
                                publication5.classList.add("show");
                                button5.textContent = "Hide Publications";
                                publication6.classList.remove("show");
                                button6.textContent = "View Publications";
                                window.location.href = "#publications-child5";
                              }
                            }}
                            id="read-more5"
                          >
                            View publications
                          </button>
                          <br />
                        </div>

                        <div
                          className="Publications"
                          id="publication5"
                          style={{ width: "100%" }}
                        >
                          <br />
                          <br />
                          <br />
                          <h5>Publications</h5>
                          <ul>
                            <li>
                              <a
                                href="http://etd.uwc.ac.za/"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                PhD Thesis "The Synergy between Gender
                                relations, Child Labour and Disability in Post
                                War Acholi Sub-region of Northern Uganda"
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://doi.org/10.21467/ajss.10.1.52-62"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Nakijoba, R., Mugabi Ddungu, R., & Awobamise, A.
                                O. (2022). COVID-19 School Closures in Uganda
                                and their Impact on the Well-being of Teachers
                                in Private Institutions in Semi-urban Districts.
                                Advanced Journal of Social Science, 10(1), 52–
                                62.
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://doi.org/10.21467/ajss.9.1.10-26"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Mugabi, R. D., Nakijoba, R., Nakirijja, D. S., &
                                Sengendo, M. (2021). Formal and Non-formal
                                Skills Improvement for the Marginalised Youth in
                                Uganda. Advanced Journal of Social Science,
                                9(1), 10–26
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://econpapers.repec.org/scripts/getreflist.pl?h=repec%3Aris%3Asphecs%3A0408;reflist=citec;pg=1"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Ddungu Racheal Mugabi; Nakijoba Rosemary;
                                Awobamise Ayodeji and Merab Ariokot, (2021),
                                ASSESSMENT OF SOCIAL MEDIA’S INFLUENCE ON THE
                                ACADEMIC PERFORMANCE OF TERTIARY INSTITUTION
                                STUDENT, Annals of Spiru Haret University,
                                Economic Series, 21, (3), 167-190
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.laboutiqueafricavivre.com"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                Nakijoba R. (2014). Links between Voice and
                                Power in the empowerment of rural women leaders,
                                Aiivu Sub-county, Arua district.
                                ISBN-13:978-3659648762
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div> */}
                    </div>

                    <div
                      className="publications-child"
                      id="publications-child6"
                    >
                      <div className="child-left">
                        <img src="assets/images/img/dean-fhs.jpg" alt="" />
                      </div>
                      <div className="child-right">
                        <h1>Dr. Aisha Musaazi Sebunya Nakitto</h1>
                        <p>
                          Dean of Faculty of Health Sciences
                          <br />
                        </p>
                        <button
                          className="read-more"
                          onClick={function () {
                            const publication1 =
                              document.getElementById("publication1");
                            const button1 =
                              document.getElementById("read-more1");
                            const publication2 =
                              document.getElementById("publication2");
                            const button2 =
                              document.getElementById("read-more2");
                            const publication3 =
                              document.getElementById("publication3");
                            const button3 =
                              document.getElementById("read-more3");
                            const publication4 =
                              document.getElementById("publication4");
                            const button4 =
                              document.getElementById("read-more4");
                            const publication5 =
                              document.getElementById("publication5");
                            const button5 =
                              document.getElementById("read-more5");
                            const publication6 =
                              document.getElementById("publication6");
                            const button6 =
                              document.getElementById("read-more6");
                            if (publication6.classList.contains("show")) {
                              publication6.classList.remove("show");
                              button6.textContent = "View Publications";
                            } else {
                              publication1.classList.remove("show");
                              button1.textContent = "View Publications";
                              publication2.classList.remove("show");
                              button2.textContent = "View Publications";
                              publication3.classList.remove("show");
                              button3.textContent = "View Publications";
                              publication4.classList.remove("show");
                              button4.textContent = "View Publications";
                              publication5.classList.remove("show");
                              button5.textContent = "View Publications";
                              publication6.classList.add("show");
                              button6.textContent = "Hide Publications";
                              window.location.href = "#publications-child6";
                            }
                          }}
                          id="read-more6"
                        >
                          View publications
                        </button>
                        <br />
                      </div>

                      <div
                        className="Publications"
                        id="publication6"
                        style={{ width: "100%" }}
                      >
                        <br />
                        <br />
                        <br />
                        <h5>Publications</h5>
                        <ul>
                          <li>
                            {/* <a
                              href="http://etd.uwc.ac.za/"
                              target={"_blank"}
                              rel="noreferrer"
                            > */}
                            Nakitto, A.M.S., Rudloff, S., Borsch, C., and
                            Wagner, A.E. (2021): Solanum anguivi Lam. fruit
                            preparations counteract the negative effects of a
                            high-sugar diet on the glucose metabolism in
                            Drosophila melanogaster. Food Funct. Doi:
                            10.1039/D1FO01363G.
                            {/* </a> */}
                          </li>
                          <li>
                            {/* <a
                              href="https://doi.org/10.21467/ajss.10.1.52-62"
                              target={"_blank"}
                              rel="noreferrer"
                            > */}
                            Nakitto, A.M.S., Muyonga, J.H., Byaruhanga, Y.B.,
                            and Wagner, A.E. (2021): Solanum anguivi Lam.
                            fruits: Their Potential Effects on Type 2 Diabetes
                            Mellitus. Molecules 2021, 26, 2044. Doi:
                            10.3390/molecules26072044.
                            {/* </a> */}
                          </li>
                          <li>
                            {/* <a
                              href="https://econpapers.repec.org/scripts/getreflist.pl?h=repec%3Aris%3Asphecs%3A0408;reflist=citec;pg=1"
                              target={"_blank"}
                              rel="noreferrer"
                            > */}
                            Nakitto, A.M.S., Byaruhanga, Y.B., Wagner, A.E.,
                            Muyonga, J.H. (2022): Morphological characteristics,
                            bioactive compounds content, and antioxidant
                            activity of different accessions of Solanum anguivi
                            Lam. Journal of Applied Botany and Food Quality 94,
                            220 - 228. doi:10.5073/JABFQ.2021.094.027.
                            {/* </a> */}
                          </li>
                          <li>
                            {/* <a
                              href="https://www.laboutiqueafricavivre.com"
                              target={"_blank"}
                              rel="noreferrer"
                            > */}
                            Nakitto, A.M., Muyonga, J.H., and Nakimbugwe, D.
                            (2015): Effects of combined traditional processing
                            methods on the nutritional quality of beans. Food
                            Science and Nutrition, 3: 233 - 241.
                            doi:10.1002/fsn3.209.
                            {/* </a> */}
                          </li>
                        </ul>
                      </div>
                    </div>

                    <p className="my-4" style={{}}>
                      Click to view publications
                    </p>
                    <p className="mb-4">
                      <ul style={{ listStyle: "none" }}>
                        <p className="my-4">
                          <li className="underline lister">
                            <a
                              href="assets/docs/THE CEOs 2 mail.pdf"
                              className="underline"
                              download={"assets/docs/THE CEOs 2 mail.pdf"}
                              style={{ color: "#0077b5" }}
                            >
                              The CEOs 1st Edition{" "}
                              <span className="fa fa-file-pdf-o"></span>
                            </a>
                          </li>
                        </p>
                        <p className="my-4">
                          <li className="underline lister">
                            <a
                              href="assets/docs/TG50FINAL.pdf"
                              className="underline"
                              download={"assets/docs/TG50FINAL.pdf"}
                              style={{ color: "#0077b5" }}
                            >
                              Discover The Experience{" "}
                              <span className="fa fa-file-pdf-o"></span>
                            </a>
                          </li>
                        </p>
                      </ul>
                    </p>
                    {/* <p className="my-4">
							<h4 style={{color: '#0077b5'}}>Importance of Research</h4>
							The cardinal aim and advantage of engaging in research is to enable researchers gain a deeper understanding of subjects under inquiry. Additional benefits of research include:
							<p className="my-4"><ul style={{listStyle: 'none'}}>
                       	 	<li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">obtaining finer understanding and familiarity with a topic of interest</span></li>
                       	 	<li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">learning a new methodological skill</span></li>
                       	 	<li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">gaining social networks by building relationships with faculty and research infrastructure</span></li>
                       	 	<li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">exploring a specific industry concentration as a starting point for thought leadership</span></li>
                       	 	<li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">preparing for thesis research and preparing for graduate school</span></li>
                       	 	<li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">demonstrating value for future employers and contributing to a body of knowledge</span></li>
						</ul></p>
						</p> */}
                    <br />
                    {/* <img
                      src="assets/images/vr.jpg"
                      className="img-fluid"
                      alt=""
                    /> */}
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </React.Fragment>
    );
  }
}

export default PublicRes;
