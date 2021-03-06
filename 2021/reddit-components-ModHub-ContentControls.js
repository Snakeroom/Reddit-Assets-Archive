// https://www.redditstatic.com/desktop2x/reddit-components-ModHub-ContentControls.b0413ba8fd3d5c9480f4.js
// Retrieved at 7/15/2021, 10:30:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModHub-ContentControls"], {
		"./src/reddit/components/ModHub/ContentControls/FormPlaceholder/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3H4J-fB2PhD0fgCLF9tXok",
				section: "_1Hnvz7VS_Thd3WZDQl5N_b",
				sectionTitle: "_3BIh6QNUrwD0lTaBBamAEI",
				line: "_3GvWrsFFOdI--KTOZNsaI-",
				sectionBodyRow: "drysb1q3Lkf7zfCJxlW_W"
			}
		},
		"./src/reddit/components/ModHub/ContentControls/FormSections/AutomatedReporting/Filter/index.m.less": function(e, t, n) {
			e.exports = {
				content: "_3B4M6QK9bUKm-hq6ibDdLD",
				description: "QU6Z1AydR1scQPJkLzse6",
				levelLabel: "_1sOGEONeRsHVzT4_eiFEHw",
				title: "_32tGjsPcq5gq7VueCE-FEo"
			}
		},
		"./src/reddit/components/ModHub/ContentControls/FormSections/AutomatedReporting/LevelLabel/index.m.less": function(e, t, n) {
			e.exports = {
				label: "pkJQYGkM8b-LY4u9scc-w"
			}
		},
		"./src/reddit/components/ModHub/ContentControls/FormSections/AutomatedReporting/index.m.less": function(e, t, n) {
			e.exports = {
				description: "_1XYu9keDg3_j4x4WII3e-k",
				filter: "_3Nflwp49IG82nIYvwBp6ij",
				title: "_3gXhgv8lal623n-2rw_KZ2"
			}
		},
		"./src/reddit/components/ModHub/ContentControls/LabeledControl/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1Vk6FmhAGPpv6fsrx4fN8D",
				labelText: "_27Ub6E-q4-xb4sHTiBXEYX"
			}
		},
		"./src/reddit/components/ModHub/ContentControls/MinMaxInput/index.m.less": function(e, t, n) {
			e.exports = {
				maxInput: "z5CgDLVGyjVsRBZ9Z-3Jv",
				minInput: "_1J7fuJeaJVWqqOvMsSj0hY",
				errorMessages: "_3zn_FPWIKOJgf6K3UZXW7f"
			}
		},
		"./src/reddit/components/ModHub/ContentControls/MultiStringsInput/index.m.less": function(e, t, n) {
			e.exports = {
				control: "eVLn7tWK1ObofC3pC9wdA",
				wordsCountdown: "_3sZRN5mJ-T3izL9iAD8Xix"
			}
		},
		"./src/reddit/components/ModHub/ContentControls/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2xRLFCFyi-_HwZoUJPlLC_",
				topBar: "_2QPrf-q3-N7UPtIIdC3GaY",
				pageDetailText: "_2QhtAlu6f0_8F9xR-QkqGZ",
				contentContainer: "_2-rpR3swo9nJDSZs_i8E44",
				formBody: "_1d945r4X4wXFWdEw_bWVWK",
				toggleSetting: "_1yyj9tAQLKPfYxZs1IsMn0",
				characterCountdown: "_2Snztju9z5KvEFq-mFlAnl",
				multipleInput: "_30ds8I9Zm9lZuPc162HyST",
				repostFrequencyInput: "_17Fy7j4GAdgKn6PeGEKdxa",
				sectionLegend: "_36NG9T5luXl1lTigni_X6H",
				bodyRestrictionSetting: "_2_acL9Bd_JGVQZkgnCNKRx",
				radioOption: "_1326u5USmDZ0AYBh-EhQvV",
				domainsTextarea: "_36I8Gb01vkdrn2SQccc3AB",
				textarea: "_3-u4D0OonO7K_3ZCe8KYOF",
				externalLink: "_3s4FMBJf7Lzu2Gv9w_qsIz",
				loadingIcon: "Y1g7ad1duR0lZLp99fhCz"
			}
		},
		"./src/reddit/components/ModHub/ContentControls/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/lodash/debounce.js"),
				o = n.n(i),
				a = n("./node_modules/lodash/isEmpty.js"),
				r = n.n(a),
				l = n("./node_modules/react/index.js"),
				d = n.n(l),
				c = n("./node_modules/react-redux/es/index.js"),
				m = n("./node_modules/reselect/es/index.js"),
				u = n("./src/reddit/actions/contentControls/index.ts"),
				g = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/components/BlockNavigation/index.tsx"),
				b = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				p = n("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				f = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				x = n("./src/reddit/components/TrackingHelper/index.tsx"),
				y = n("./src/reddit/controls/Button/index.tsx"),
				k = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				S = n("./node_modules/lodash/omitBy.js"),
				R = n.n(S),
				C = n("./src/reddit/models/PostRequirements/index.ts"),
				E = n("./src/reddit/selectors/telemetry.ts"),
				v = n("./src/telemetry/models/PostRequirement.ts");
			const _ = {
					[C.a.None]: v.BodyRestrictionPolicy.Optional,
					[C.a.NotAllowed]: v.BodyRestrictionPolicy.Disabled,
					[C.a.Required]: v.BodyRestrictionPolicy.Required
				},
				q = e => {
					const t = {
						bodyBlacklistedStrings: e.bodyBlacklistedStrings,
						bodyRegexPatterns: e.bodyRegexes,
						bodyRequiredStrings: e.bodyRequiredStrings,
						bodyRestrictionPolicy: _[e.bodyRestrictionPolicy],
						linkBlacklistedDomainsLength: e.domainBlacklist.length,
						linkWhitelistedDomainsLength: e.domainWhitelist.length,
						numberRepostFrequencyDays: e.linkRepostAge || void 0,
						requirePostFlair: e.isFlairRequired,
						titleBlacklistedStrings: e.titleBlacklistedStrings,
						titleRegexPatterns: e.titleRegexes,
						titleRequiredStrings: e.titleRequiredStrings,
						titleTextMaxLength: e.titleTextMaxLength || void 0,
						titleTextMinLength: e.titleTextMinLength || void 0
					};
					return R()(t, e => Array.isArray(e) && !e.length)
				},
				w = e => t => ({
					source: "post_requirements",
					action: "save",
					noun: "settings",
					...E.defaults(t),
					postRequirement: q(e),
					subreddit: E.subreddit(t),
					userSubreddit: E.userSubreddit(t)
				});
			var L = n("./src/reddit/selectors/activeModalId.ts"),
				B = n("./src/reddit/selectors/contentControls.ts"),
				T = n("./src/reddit/selectors/platform.ts"),
				N = n("./src/config.ts"),
				P = n("./src/reddit/models/AutomatedReporting/index.ts");
			const M = `${N.a.redditModHelpUrl}/hc/en-us/articles/360010322091`,
				O = 2,
				D = 300,
				F = 400,
				j = 90,
				I = 1e5,
				A = 15,
				H = 40,
				W = 5,
				U = {
					guidelines: {
						enabled: !1,
						guidelineText: "",
						clientErrors: []
					},
					titleRequiredStrings: {
						enabled: !1,
						strings: [],
						clientErrors: []
					},
					titleBlacklistedStrings: {
						enabled: !1,
						strings: [],
						clientErrors: []
					},
					titleLength: {
						enabled: !1,
						min: null,
						max: null,
						clientErrors: []
					},
					titleRegexes: {
						enabled: !1,
						regexes: [],
						serverErrors: []
					},
					bodyRequirement: {
						enabled: !0,
						restrictionPolicy: C.a.None
					},
					bodyRequiredStrings: {
						enabled: !1,
						strings: [],
						clientErrors: []
					},
					bodyBlacklistedStrings: {
						enabled: !1,
						strings: [],
						clientErrors: []
					},
					bodyRegexes: {
						enabled: !1,
						regexes: [],
						serverErrors: []
					},
					linkDomains: {
						enabled: !1,
						restrictionPolicy: C.b.Whitelist,
						domainsText: "",
						clientErrors: [],
						serverErrors: []
					},
					repostFrequency: {
						enabled: !1,
						days: null
					},
					flairRequirement: {
						enabled: !1
					},
					automatedReporting: {
						levelAbuse: P.a.Off,
						levelHate: P.a.Off,
						wordlistEnabled: !1,
						wordlist: []
					}
				};
			var G = n("./node_modules/lodash/times.js"),
				V = n.n(G),
				K = n("./src/lib/classNames/index.ts"),
				J = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				z = n("./src/reddit/components/ModHub/ContentControls/FormPlaceholder/index.m.less"),
				Q = n.n(z);
			var Y = ({
					isLoading: e
				}) => l.createElement("div", {
					className: Object(K.a)(Q.a.container, Object(J.a)({
						isLoading: !1
					}))
				}, V()(3).map(t => l.createElement("div", {
					key: t,
					className: Q.a.section
				}, l.createElement("div", {
					className: Object(K.a)(Q.a.sectionTitle, Object(J.b)({
						isLoading: e
					}))
				}), l.createElement("div", {
					className: Q.a.line
				}), V()(2).map(t => l.createElement("div", {
					key: t,
					className: Object(K.a)(Q.a.sectionBodyRow, Object(J.b)({
						isLoading: e
					}))
				}))))),
				Z = n("./src/reddit/featureFlags/index.ts"),
				X = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				$ = n("./src/reddit/controls/ErrorText/index.tsx"),
				ee = n("./src/reddit/controls/FormFields/index.tsx"),
				te = n("./src/reddit/controls/RadioInput/index.tsx"),
				ne = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				se = n("./src/reddit/components/ModHub/ContentControls/LabeledControl/index.m.less"),
				ie = n.n(se);
			const oe = e => e.preventDefault();
			var ae = e => d.a.createElement("div", {
					className: Object(K.a)(e.className, ie.a.container)
				}, d.a.createElement("label", {
					className: ie.a.label,
					onClick: oe
				}, d.a.createElement("div", {
					className: ie.a.labelText
				}, e.label), e.children)),
				re = (e, t, n) => {
					let s = Math.abs(parseInt(e, 10));
					return Number.isInteger(s) ? (void 0 !== t && s < t && (s = t), void 0 !== n && s > n && (s = n), s) : null
				};
			const le = e => null !== e ? e.toString() : "",
				de = e => e.map(e => e.trim().toLowerCase()).filter(Boolean);
			var ce = e => {
					const {
						min: t,
						max: n,
						minLimit: i,
						maxLimit: o
					} = e, a = [];
					return null !== t && (t < i || t > o) && a.push({
						field: "min",
						message: s.fbt._("Minimum must be between {min} and {max}", [s.fbt._param("min", `${i}`), s.fbt._param("max", `${o}`)], {
							hk: "3za1lQ"
						})
					}), null !== n && (n < i || n > o) && a.push({
						field: "max",
						message: s.fbt._("Maximum must be between {min} and {max}", [s.fbt._param("min", `${i}`), s.fbt._param("max", `${o}`)], {
							hk: "3qr1O"
						})
					}), !a.length && null !== t && null !== n && t > n && a.push({
						field: "both",
						message: s.fbt._("Maximum must be greater than or equal to minimum", null, {
							hk: "1pXTqq"
						})
					}), a
				},
				me = n("./src/reddit/components/ModHub/ContentControls/MinMaxInput/index.m.less"),
				ue = n.n(me);
			class ge extends d.a.Component {
				constructor() {
					super(...arguments), this.minInputRef = d.a.createRef(), this.maxInputRef = d.a.createRef(), this.onChange = (e, t) => {
						const {
							min: n,
							max: s,
							minLimit: i,
							maxLimit: o
						} = this.props, a = Math.min(i, 1), r = re(e.target.value, a, o), l = {
							min: "min" === t ? r : n,
							max: "max" === t ? r : s
						};
						this.props.onChange({
							...l,
							clientErrors: ce({
								...l,
								maxLimit: o,
								minLimit: i
							})
						})
					}, this.onMinChange = e => this.onChange(e, "min"), this.onMaxChange = e => this.onChange(e, "max"), this.onBlur = () => {
						const {
							min: e,
							max: t
						} = this.props, n = this.minInputRef.current, s = this.maxInputRef.current;
						n.value = le(e), s.value = le(t)
					}
				}
				render() {
					const {
						errors: e,
						max: t,
						maxLimit: n,
						min: i,
						minLimit: o
					} = this.props, a = e.map(e => e.message), r = e.some(e => "both" === e.field), l = r || e.some(e => "min" === e.field), c = r || e.some(e => "max" === e.field);
					return d.a.createElement("div", {
						onBlur: this.onBlur
					}, d.a.createElement("div", null, d.a.createElement(ee.b, {
						className: ue.a.minInput,
						inputRef: this.minInputRef,
						isInvalid: l,
						label: s.fbt._("min", null, {
							hk: "1OxOYM"
						}),
						max: n,
						min: o,
						onChange: this.onMinChange,
						type: "number",
						value: le(i)
					}), d.a.createElement(ee.b, {
						className: ue.a.maxInput,
						inputRef: this.maxInputRef,
						isInvalid: c,
						label: s.fbt._("max", null, {
							hk: "2IodGV"
						}),
						max: n,
						min: o,
						onChange: this.onMaxChange,
						type: "number",
						value: le(t)
					})), d.a.createElement($.a, {
						className: ue.a.errorMessages,
						messages: a
					}))
				}
			}
			var he = n("./src/lib/lessComponent.tsx"),
				be = n("./src/reddit/featureFlags/component.tsx"),
				pe = n("./src/reddit/components/ModHub/ContentControls/index.m.less"),
				fe = n.n(pe);
			const xe = he.a.wrapped(X.o, "toggleSetting", fe.a),
				ye = Object(be.a)("newPostRequirements", d.a.Fragment),
				ke = () => d.a.createElement("a", {
					className: fe.a.externalLink,
					href: "https://docs.python.org/2/library/re.html#regular-expression-syntax",
					rel: "noopener noreferrer",
					target: "_blank"
				}, s.fbt._("Python RegEx syntax", null, {
					hk: "5NwTW"
				})),
				Se = e => e.regexes.map(t => {
					const n = e.serverErrors.find(e => e.regex === t);
					return n ? n.message : ""
				}),
				Re = e => e.serverErrors.filter(e => null === e.regex).map(e => e.message);
			class Ce extends d.a.Component {
				constructor() {
					super(...arguments), this.onToggleFlairRequirement = () => {
						const {
							formState: e
						} = this.props;
						this.props.onChange({
							flairRequirement: {
								...e.flairRequirement,
								enabled: !e.flairRequirement.enabled
							}
						})
					}, this.onToggleTitleLength = () => {
						const {
							formState: e
						} = this.props;
						this.props.onChange({
							titleLength: {
								...e.titleLength,
								enabled: !e.titleLength.enabled
							}
						})
					}, this.onBodyRestrictionPolicyChange = e => {
						const {
							bodyRequirement: t
						} = this.props.formState;
						this.props.onChange({
							bodyRequirement: {
								...t,
								restrictionPolicy: e
							}
						})
					}, this.onToggleTitleRegex = () => {
						const {
							titleRegexes: e
						} = this.props.formState;
						this.props.onChange({
							titleRegexes: {
								...e,
								enabled: !e.enabled
							}
						})
					}, this.onToggleBodyRegex = () => {
						const {
							bodyRegexes: e
						} = this.props.formState;
						this.props.onChange({
							bodyRegexes: {
								...e,
								enabled: !e.enabled
							}
						})
					}, this.onTitleLengthChange = e => {
						const {
							titleLength: t
						} = this.props.formState;
						this.props.onChange({
							titleLength: {
								...t,
								...e
							}
						})
					}, this.onTitleRegexChange = e => {
						const {
							titleRegexes: t
						} = this.props.formState;
						this.props.onChange({
							titleRegexes: {
								...t,
								regexes: e,
								serverErrors: []
							}
						})
					}, this.onBodyRegexChange = e => {
						const {
							bodyRegexes: t
						} = this.props.formState;
						this.props.onChange({
							bodyRegexes: {
								...t,
								regexes: e,
								serverErrors: []
							}
						})
					}
				}
				render() {
					const {
						formState: e
					} = this.props, t = e.bodyRequirement.restrictionPolicy === C.a.NotAllowed;
					return d.a.createElement("fieldset", null, d.a.createElement("legend", {
						className: fe.a.sectionLegend
					}, s.fbt._("Advanced post requirements", null, {
						hk: "RkyyQ"
					})), d.a.createElement(xe, {
						on: e.flairRequirement.enabled,
						onClick: this.onToggleFlairRequirement,
						label: s.fbt._("Require post flair", null, {
							hk: "40S3NC"
						}),
						subtext: s.fbt._("Posts without flair can’t be submitted. (Note that this requirement is ignored if your community hasn’t set up flair yet.)", null, {
							hk: "1uKE6c"
						})
					}), d.a.createElement(X.c, {
						className: fe.a.bodyRestrictionSetting,
						direction: "column",
						label: s.fbt._("Text post body", null, {
							hk: "1NjP8q"
						}),
						subtext: s.fbt._("Allow text posts to have body text", null, {
							hk: "2aqrIz"
						})
					}, d.a.createElement(te.a, {
						disabled: !1,
						name: "body_restriction",
						onChange: this.onBodyRestrictionPolicyChange,
						value: e.bodyRequirement.restrictionPolicy
					}, d.a.createElement(ne.a, {
						className: fe.a.radioOption,
						showButton: !0,
						value: C.a.None
					}, s.fbt._("Post body is optional", null, {
						hk: "33sNwD"
					})), d.a.createElement(ne.a, {
						className: fe.a.radioOption,
						showButton: !0,
						value: C.a.Required
					}, s.fbt._("Post body is required", null, {
						hk: "36DfJm"
					})), d.a.createElement(ne.a, {
						className: fe.a.radioOption,
						showButton: !0,
						value: C.a.NotAllowed
					}, s.fbt._("Post body is disabled", null, {
						hk: "3MemfQ"
					})))), d.a.createElement(xe, {
						on: e.titleLength.enabled,
						onClick: this.onToggleTitleLength,
						label: s.fbt._("Restrict post title length", null, {
							hk: "3hiTGG"
						}),
						subtext: s.fbt._("Set a minimum and/or maximum post title length", null, {
							hk: "aLDGs"
						})
					}), e.titleLength.enabled && d.a.createElement(ae, {
						label: s.fbt._("Character length", null, {
							hk: "37rbXi"
						})
					}, d.a.createElement(ge, {
						onChange: this.onTitleLengthChange,
						min: e.titleLength.min,
						max: e.titleLength.max,
						minLimit: O,
						maxLimit: D,
						errors: e.titleLength.clientErrors
					})), d.a.createElement(xe, {
						on: e.titleRegexes.enabled,
						onClick: this.onToggleTitleRegex,
						label: s.fbt._("Use title text RegEx requirements", null, {
							hk: "4bqbLM"
						}),
						subtext: s.fbt._("Use regular expressions for more advanced title matching. These use the {linkToDocumentation}", [s.fbt._param("linkToDocumentation", d.a.createElement(ke, null))], {
							hk: "2rDR9r"
						})
					}), e.titleRegexes.enabled && d.a.createElement(ae, {
						label: s.fbt._("Title must match one of:", null, {
							hk: "GtVrU"
						})
					}, d.a.createElement(ee.d, {
						className: fe.a.multipleInput,
						disabled: !1,
						errors: Se(e.titleRegexes),
						values: e.titleRegexes.regexes,
						onChange: this.onTitleRegexChange,
						maxLength: W,
						addValueText: s.fbt._("Add regex", null, {
							hk: "3W7WpW"
						})
					}), d.a.createElement($.a, {
						messages: Re(e.titleRegexes)
					})), d.a.createElement(ye, null, d.a.createElement(xe, {
						disabled: t,
						on: e.bodyRegexes.enabled,
						onClick: this.onToggleBodyRegex,
						label: s.fbt._("Use body text RegEx requirements", null, {
							hk: "2kadJl"
						}),
						subtext: s.fbt._("Use regular expressions for more advanced body text matching. These use the {linkToDocumentation}", [s.fbt._param("linkToDocumentation", d.a.createElement(ke, null))], {
							hk: "3mk1ff"
						})
					}), !t && e.bodyRegexes.enabled && d.a.createElement(ae, {
						label: s.fbt._("Body must match one of:", null, {
							hk: "1pLBfl"
						})
					}, d.a.createElement(ee.d, {
						className: fe.a.multipleInput,
						disabled: !1,
						errors: Se(e.bodyRegexes),
						values: e.bodyRegexes.regexes,
						onChange: this.onBodyRegexChange,
						maxLength: W,
						addValueText: s.fbt._("Add regex", null, {
							hk: "3W7WpW"
						})
					}), d.a.createElement($.a, {
						messages: Re(e.bodyRegexes)
					}))))
				}
			}
			var Ee = n("./node_modules/lodash/difference.js"),
				ve = n.n(Ee),
				_e = n("./src/reddit/hooks/useExperimentVariant.ts"),
				qe = n("./src/reddit/hooks/useTracking.ts"),
				we = n("./src/lib/memoizeByReference/index.ts"),
				Le = n("./src/reddit/components/MultiOptionSelect/index.tsx"),
				Be = n("./src/reddit/components/ModHub/ContentControls/MultiStringsInput/index.m.less"),
				Te = n.n(Be);
			class Ne extends d.a.Component {
				constructor() {
					super(...arguments), this.state = {
						pendingItemText: ""
					}, this.onInputChanged = e => {
						this.setState({
							pendingItemText: e
						})
					}, this.getOptions = Object(we.a)(e => e.map(e => ({
						id: e,
						displayText: e,
						selected: !0
					}))), this.getMaxWords = () => this.props.maxWords || A, this.onOptionsChanged = e => {
						const t = this.getOptions(this.props.strings),
							n = new Map;
						t.forEach(e => n.set(e.displayText, e)), e.forEach(e => n.set(e.displayText, e));
						const s = [...n.values()].filter(e => e.selected && !!e.displayText.trim()).map(e => e.displayText.slice(0, H).toLowerCase()).slice(0, this.getMaxWords());
						this.props.onChange(s)
					}
				}
				render() {
					const e = this.getOptions(this.props.strings),
						t = e.length < this.getMaxWords();
					return d.a.createElement(d.a.Fragment, null, d.a.createElement(Le.a, {
						className: Te.a.control,
						addText: s.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						allowFreeTextEntry: !0,
						input: this.state.pendingItemText,
						isError: this.props.errors.length > 0,
						isLoading: !1,
						maxOptionLength: t ? H : 0,
						onInputChanged: this.onInputChanged,
						onOptionsChanged: this.onOptionsChanged,
						selectedOptions: e
					}), d.a.createElement($.a, {
						messages: this.props.errors
					}), d.a.createElement("div", {
						className: Te.a.wordsCountdown
					}, s.fbt._("{selectedCount}/{maxCount} words", [s.fbt._param("selectedCount", `${e.length}`), s.fbt._param("maxCount", `${this.getMaxWords()}`)], {
						hk: "F6evF"
					})))
				}
			}
			var Pe = n("./node_modules/lodash/clamp.js"),
				Me = n.n(Pe),
				Oe = n("./src/reddit/controls/DiscreteSlideSelector/Bars/index.m.less"),
				De = n.n(Oe);

			function Fe(e) {
				const t = Array.from({
					length: e.optionColors.length - 1
				});
				return d.a.createElement("div", {
					className: Object(K.a)(De.a.container, e.className),
					style: {
						gridTemplateColumns: `repeat(${t.length}, 1fr)`
					}
				}, t.map((t, n) => d.a.createElement("div", {
					className: De.a.segment,
					key: n,
					style: {
						backgroundColor: n < e.currentStop ? e.optionColors[e.currentStop] : void 0
					}
				})))
			}

			function je(e) {
				return ["0.5fr", ...Array.from({
					length: e - 2
				}).map(e => "1fr"), "0.5fr"].join(" ")
			}
			var Ie = n("./src/reddit/controls/DiscreteSlideSelector/Labels/index.m.less"),
				Ae = n.n(Ie);

			function He(e) {
				return d.a.createElement("div", {
					className: Object(K.a)(Ae.a.container, e.className),
					style: {
						gridTemplateColumns: je(e.options.length)
					}
				}, e.options.map(t => d.a.createElement("div", {
					className: Object(K.a)(Ae.a.label, {
						[Ae.a.labelSelected]: t.value === e.selected
					}),
					key: t.label,
					style: {
						color: t.value === e.selected ? t.color : void 0
					}
				}, t.label)))
			}
			var We = n("./node_modules/lodash/throttle.js"),
				Ue = n.n(We),
				Ge = n("./src/reddit/controls/DiscreteSlideSelector/ThumbRail/index.m.less"),
				Ve = n.n(Ge);

			function Ke(e, t) {
				return 0 === e ? 0 : e === t - 1 ? -16 : -8
			}

			function Je(e) {
				const t = d.a.useRef(!1);
				return d.a.createElement("div", {
					className: Object(K.a)(Ve.a.container, e.className),
					style: {
						gridTemplateColumns: je(e.numStops)
					},
					onMouseUp: e => {
						t.current = !1
					},
					onMouseLeave: e => {
						t.current = !1
					}
				}, Array.from({
					length: e.numStops
				}).map((n, s) => d.a.createElement("div", {
					className: Ve.a.clickArea,
					key: s,
					onClick: () => e.onChange(s),
					onMouseEnter: Ue()(() => {
						t.current && e.onChange(s)
					}, 16)
				})), d.a.createElement("div", {
					className: Ve.a.thumb,
					style: {
						left: (n = e.currentStop, s = e.numStops, `${n/(s-1)*100}%`),
						marginLeft: Ke(e.currentStop, e.numStops)
					},
					onMouseDown: e => {
						e.stopPropagation, t.current = !0
					}
				}));
				var n, s
			}
			var ze = n("./src/reddit/controls/DiscreteSlideSelector/index.m.less"),
				Qe = n.n(ze);

			function Ye(e) {
				const t = Me()(e.options.findIndex(t => t.value === e.value), 0, e.options.length - 1);
				return d.a.createElement("div", {
					className: Object(K.a)(Qe.a.container, e.className)
				}, d.a.createElement("div", {
					className: Qe.a.barContainer
				}, d.a.createElement(Fe, {
					className: Qe.a.bars,
					currentStop: t,
					optionColors: e.options.map(e => e.color)
				}), d.a.createElement(Je, {
					className: Qe.a.thumbRail,
					currentStop: t,
					numStops: e.options.length,
					onChange: t => e.onChange(e.options[t].value)
				})), d.a.createElement(He, {
					options: e.options,
					selected: e.value
				}))
			}
			var Ze = n("./src/reddit/constants/colors.ts"),
				Xe = n("./src/reddit/components/ModHub/ContentControls/FormSections/AutomatedReporting/LevelLabel/index.m.less"),
				$e = n.n(Xe);

			function et(e) {
				switch (e) {
					case P.a.Off:
						return s.fbt._("Off", null, {
							hk: "2qG3tm"
						});
					case P.a.Lenient:
						return s.fbt._("Lenient", null, {
							hk: "25DBzd"
						});
					case P.a.Moderate:
						return s.fbt._("Moderate", null, {
							hk: "3j1ycq"
						});
					case P.a.Strict:
						return s.fbt._("Strict", null, {
							hk: "4wBjgi"
						})
				}
			}

			function tt(e) {
				switch (e) {
					case P.a.Off:
						return "var(--newCommunityTheme-bodyText)";
					case P.a.Lenient:
						return Ze.a.lenient;
					case P.a.Moderate:
						return Ze.a.moderate;
					case P.a.Strict:
						return Ze.a.strict
				}
			}

			function nt(e) {
				return d.a.createElement("span", {
					className: Object(K.a)($e.a.label, e.className),
					style: {
						color: tt(e.level)
					}
				}, et(e.level), ":")
			}
			var st = n("./src/reddit/components/ModHub/ContentControls/FormSections/AutomatedReporting/Filter/index.m.less"),
				it = n.n(st);

			function ot(e) {
				return d.a.createElement("article", {
					className: e.className
				}, d.a.createElement("header", {
					className: it.a.title
				}, e.title()), d.a.createElement("div", {
					className: it.a.content
				}, d.a.createElement("div", {
					className: it.a.description
				}, d.a.createElement(nt, {
					className: it.a.levelLabel,
					level: e.currentLevel
				}), e.descriptions[e.currentLevel]()), d.a.createElement(Ye, {
					options: [P.a.Off, P.a.Lenient, P.a.Moderate, P.a.Strict].map(e => ({
						color: e === P.a.Off ? "var(--newRedditTheme-metaText)" : tt(e),
						label: et(e),
						value: e
					})),
					value: e.currentLevel,
					onChange: e.onChange
				})))
			}
			var at = [{
					name: "levelAbuse",
					title: () => s.fbt._("Abuse and harrasment", null, {
						hk: "379GES"
					}),
					descriptions: {
						[P.a.Off]: () => s.fbt._("Content that is abusive and harassing will not be automatically reported and removed.", null, {
							hk: "245iKG"
						}),
						[P.a.Lenient]: () => s.fbt._("Some content that contains potentially abusive language will be automatically reported and removed.", null, {
							hk: "CidMb"
						}),
						[P.a.Moderate]: () => s.fbt._("Most content that contains potentially abusive language will be automatically reported and removed.", null, {
							hk: "2ADp0f"
						}),
						[P.a.Strict]: () => s.fbt._("All content that contains potentially abusive language will be automatically reported and removed.", null, {
							hk: "5rSs0"
						})
					}
				}, {
					name: "levelHate",
					title: () => s.fbt._("Identity based insults", null, {
						hk: "1GXNKB"
					}),
					descriptions: {
						[P.a.Off]: () => s.fbt._("Content that is contains identity based insults will not be automatically reported and removed.", null, {
							hk: "MsqFA"
						}),
						[P.a.Lenient]: () => s.fbt._("Some content that contains identity based insults will be reported and removed.", null, {
							hk: "3zG0ME"
						}),
						[P.a.Moderate]: () => s.fbt._("Most content that contains identity based insults will be reported and removed.", null, {
							hk: "4q320Y"
						}),
						[P.a.Strict]: () => s.fbt._("All content that contains identity based insults will be reported and removed.", null, {
							hk: "YeEcS"
						})
					}
				}],
				rt = n("./src/reddit/components/ModHub/ContentControls/FormSections/AutomatedReporting/index.m.less"),
				lt = n.n(rt);

			function dt(e) {
				const {
					formState: t,
					onChange: n
				} = e, i = "enabled" === Object(_e.a)("automated_reporting_wordlist"), o = Object(qe.a)();
				return d.a.createElement("fieldset", null, d.a.createElement("legend", {
					className: lt.a.title
				}, s.fbt._("Automated Filtering", null, {
					hk: "18gDSg"
				})), i && d.a.createElement(d.a.Fragment, null, d.a.createElement("div", {
					className: lt.a.description,
					key: "desc"
				}, s.fbt._("Choose the content and keywords your community doesn’t allow. Posts and comments that violate the requirements you set will be automatically removed and reported.", null, {
					hk: "2jHN3G"
				})), d.a.createElement(xe, {
					key: "toggle",
					on: t.automatedReporting.wordlistEnabled,
					onClick: () => n({
						...t,
						automatedReporting: {
							...t.automatedReporting,
							wordlistEnabled: !t.automatedReporting.wordlistEnabled
						}
					}),
					label: s.fbt._("Keywords", null, {
						hk: "lo7Q0"
					}),
					subtext: s.fbt._("Posts and comments with these words will automatically be removed and reported.", null, {
						hk: "28BaGc"
					})
				}), t.automatedReporting.wordlistEnabled && d.a.createElement(ae, {
					key: "words",
					label: s.fbt._("Add keywords to report", null, {
						hk: "2na5FM"
					})
				}, d.a.createElement(Ne, {
					errors: [],
					maxWords: 1e3,
					strings: t.automatedReporting.wordlist,
					onChange: e => {
						const s = t.automatedReporting.wordlist,
							i = ve()(e, s),
							a = ve()(s, e);
						n({
							...t,
							automatedReporting: {
								...t.automatedReporting,
								wordlist: e
							}
						}), i.forEach(e => o(t => ({
							source: "community_settings",
							action: "add",
							noun: "auto_report_keyword",
							...Object(E.defaults)(t),
							setting: {
								value: e,
								oldValue: ""
							}
						}))), a.forEach(e => o(t => ({
							source: "community_settings",
							action: "remove",
							noun: "auto_report_keyword",
							...Object(E.defaults)(t),
							setting: {
								value: e,
								oldValue: ""
							}
						})))
					}
				}))), d.a.createElement("div", {
					className: lt.a.options
				}, at.map(e => {
					const s = t.automatedReporting[e.name];
					return d.a.createElement(ot, {
						className: lt.a.filter,
						key: e.name,
						currentLevel: s,
						name: e.name,
						title: e.title,
						descriptions: e.descriptions,
						onChange: s => n({
							...t,
							automatedReporting: {
								...t.automatedReporting,
								[e.name]: s
							}
						})
					})
				})))
			}
			var ct = n("./src/reddit/components/CharacterCountdown/index.tsx");
			const mt = e => e.split(/[,;\s]/).filter(Boolean),
				ut = e => e.join(", "),
				gt = e => ut(mt(e)),
				ht = ["i.redd.it", "v.redd.it"],
				bt = /^(?:[\w-]+\.)+[\w]+$/,
				pt = e => ht.includes(e.toLowerCase());
			var ft = e => {
					const t = mt(e),
						n = [],
						i = t.find(e => !(e => bt.test(e))(e));
					return i && n.push(s.fbt._('Invalid domain: "{domainName}"', [s.fbt._param("domainName", i)], {
						hk: "l57pV"
					})), t.some(pt) && n.push(s.fbt._("Domains cannot include reddit hosted content.", null, {
						hk: "JUxdH"
					})), n
				},
				xt = n("./node_modules/lodash/mapValues.js"),
				yt = n.n(xt);
			const kt = (e, t) => {
					const n = new Set(de(e)),
						i = de(t).find(e => n.has(e));
					return i ? [s.fbt._('Word "{word}" is required and banned at the same time', [s.fbt._param("word", i)], {
						hk: "2Hyh3c"
					}).toString()] : []
				},
				St = (e, t) => {
					if (!t) return [];
					const n = e.find(e => e.length > t);
					return n ? [s.fbt._('Word "{word}" is longer than maximum title length', [s.fbt._param("word", n)], {
						hk: "48duSv"
					}).toString()] : []
				},
				Rt = e => {
					const t = e.titleRequiredStrings.enabled ? e.titleRequiredStrings.strings : [];
					return {
						blacklistedStrings: e.titleBlacklistedStrings.enabled ? e.titleBlacklistedStrings.strings : [],
						maxTitleLength: e.titleLength.enabled ? e.titleLength.max : null,
						requiredStrings: t
					}
				},
				Ct = e => {
					const {
						bodyRequirement: t,
						bodyRequiredStrings: n,
						bodyBlacklistedStrings: s
					} = e, i = t.restrictionPolicy !== C.a.NotAllowed, o = t.restrictionPolicy === C.a.Required;
					return kt(o && n.enabled ? n.strings : [], i && s.enabled ? s.strings : [])
				},
				Et = Ct,
				vt = e => yt()(e, e => ({
					...e
				})),
				_t = (e, t) => {
					const n = t.filter(Boolean);
					return 1 === n.length ? n[0] : null
				},
				qt = (e, t) => {
					if (!t.length) return e;
					const n = vt(e);
					return t.forEach(e => {
						switch (e.field) {
							case "titleRegexes":
							case "bodyRegexes": {
								const t = n[e.field];
								t.serverErrors.push({
									regex: _t(e.message, t.regexes),
									message: e.message
								});
								break
							}
							case "domainBlacklist":
							case "domainWhitelist":
								n.linkDomains.serverErrors.push(e.message)
						}
					}), n
				},
				wt = e => e.enabled && !e.guidelineText.trim() ? [s.fbt._("Guideline text cannot be empty", null, {
					hk: "4pncO7"
				})] : [],
				Lt = e => {
					const t = vt(e);
					return t.guidelines.clientErrors = wt(t.guidelines), t.linkDomains.clientErrors = ft(t.linkDomains.domainsText), t.titleLength.clientErrors = (({
						min: e,
						max: t
					}) => ce({
						min: e,
						max: t,
						minLimit: O,
						maxLimit: D
					}))(t.titleLength), t.bodyBlacklistedStrings.clientErrors = Et(t), t.bodyRequiredStrings.clientErrors = Ct(t), t.titleBlacklistedStrings.clientErrors = (e => {
						const t = Rt(e);
						return [...kt(t.requiredStrings, t.blacklistedStrings), ...St(t.blacklistedStrings, t.maxTitleLength)]
					})(t), t.titleRequiredStrings.clientErrors = (e => {
						const t = Rt(e);
						return [...kt(t.requiredStrings, t.blacklistedStrings), ...St(t.requiredStrings, t.maxTitleLength)]
					})(t), t
				},
				Bt = e => Object.keys(e).some(t => {
					if ("automatedReporting" === t) return !1;
					const n = e[t];
					return n.enabled && !(r()(n.clientErrors) && r()(n.serverErrors))
				});
			class Tt extends d.a.Component {
				constructor() {
					super(...arguments), this.onToggleGuidelines = () => {
						const {
							formState: e
						} = this.props;
						this.props.onChange({
							guidelines: {
								...e.guidelines,
								enabled: !e.guidelines.enabled
							}
						})
					}, this.onToggleTitleRequiredStrings = () => {
						const {
							formState: e
						} = this.props;
						this.props.onChange({
							titleRequiredStrings: {
								...e.titleRequiredStrings,
								enabled: !e.titleRequiredStrings.enabled
							}
						})
					}, this.onToggleTitleBlacklistedStrings = () => {
						const {
							formState: e
						} = this.props;
						this.props.onChange({
							titleBlacklistedStrings: {
								...e.titleBlacklistedStrings,
								enabled: !e.titleBlacklistedStrings.enabled
							}
						})
					}, this.onToggleBodyRequiredStrings = () => {
						const {
							formState: e
						} = this.props;
						this.props.onChange({
							bodyRequiredStrings: {
								...e.bodyRequiredStrings,
								enabled: !e.bodyRequiredStrings.enabled
							}
						})
					}, this.onToggleBodyBlacklistedStrings = () => {
						const {
							formState: e
						} = this.props;
						this.props.onChange({
							bodyBlacklistedStrings: {
								...e.bodyBlacklistedStrings,
								enabled: !e.bodyBlacklistedStrings.enabled
							}
						})
					}, this.onToggleLinkDomains = () => {
						const {
							formState: e
						} = this.props;
						this.props.onChange({
							linkDomains: {
								...e.linkDomains,
								enabled: !e.linkDomains.enabled
							}
						})
					}, this.onToggleRepostFrequency = () => {
						const {
							formState: e
						} = this.props;
						this.props.onChange({
							repostFrequency: {
								...e.repostFrequency,
								enabled: !e.repostFrequency.enabled
							}
						})
					}, this.onGuidelineTextChange = e => {
						const t = e.target.value,
							{
								formState: n
							} = this.props;
						this.props.onChange({
							guidelines: {
								...n.guidelines,
								guidelineText: t,
								clientErrors: wt({
									...n.guidelines,
									guidelineText: t
								})
							}
						})
					}, this.onTitleRequiredStringsChange = e => {
						const {
							titleRequiredStrings: t
						} = this.props.formState;
						this.props.onChange({
							titleRequiredStrings: {
								...t,
								strings: e
							}
						}, !0)
					}, this.onTitleBlacklistedStringsChange = e => {
						const {
							titleBlacklistedStrings: t
						} = this.props.formState;
						this.props.onChange({
							titleBlacklistedStrings: {
								...t,
								strings: e
							}
						}, !0)
					}, this.onBodyRequiredStringsChange = e => {
						const {
							bodyRequiredStrings: t
						} = this.props.formState;
						this.props.onChange({
							bodyRequiredStrings: {
								...t,
								strings: e
							}
						}, !0)
					}, this.onBodyBlacklistedStringsChange = e => {
						const {
							bodyBlacklistedStrings: t
						} = this.props.formState;
						this.props.onChange({
							bodyBlacklistedStrings: {
								...t,
								strings: e
							}
						}, !0)
					}, this.onRestrictionPolicyChange = e => {
						const {
							formState: t
						} = this.props;
						this.props.onChange({
							linkDomains: {
								...t.linkDomains,
								restrictionPolicy: e
							}
						})
					}, this.onLinkDomainsTextChange = e => {
						const {
							formState: t
						} = this.props, n = e.target.value;
						this.props.onChange({
							linkDomains: {
								...t.linkDomains,
								domainsText: n,
								serverErrors: []
							}
						})
					}, this.onLinkDomainsBlur = () => {
						const {
							linkDomains: e
						} = this.props.formState, t = gt(e.domainsText), n = ft(t);
						this.props.onChange({
							linkDomains: {
								...e,
								domainsText: t,
								clientErrors: n
							}
						})
					}, this.onRepostFrequencyChange = e => {
						const {
							formState: t
						} = this.props, n = re(e.target.value, 1, j);
						this.props.onChange({
							repostFrequency: {
								...t.repostFrequency,
								days: n
							}
						})
					}
				}
				render() {
					const {
						formState: e,
						isLoading: t
					} = this.props, n = e.linkDomains.serverErrors.length ? e.linkDomains.serverErrors : e.linkDomains.clientErrors;
					return d.a.createElement("fieldset", null, d.a.createElement("legend", {
						className: fe.a.sectionLegend
					}, s.fbt._("Post Requirements", null, {
						hk: "Yno2m"
					})), d.a.createElement(xe, {
						on: e.guidelines.enabled,
						onClick: this.onToggleGuidelines,
						label: s.fbt._("Provide members with posting guidelines", null, {
							hk: "27m4c8"
						}),
						subtext: s.fbt._("Posting guidelines let people who are new to your community or posting for the first time know what your expectations are. If you have specific flair or formatting requirements for posts, this is the place to make it clear what you’d like.", null, {
							hk: "3wSHr6"
						})
					}), e.guidelines.enabled && d.a.createElement(ae, {
						label: s.fbt._("Guideline text", null, {
							hk: "1tfXjx"
						})
					}, d.a.createElement("textarea", {
						"aria-invalid": !!e.guidelines.clientErrors.length,
						className: fe.a.textarea,
						maxLength: F,
						onChange: this.onGuidelineTextChange,
						placeholder: s.fbt._("Example: Only make post about dogs", null, {
							hk: "3ZbLuW"
						}),
						required: !0,
						value: e.guidelines.guidelineText
					}), e.guidelines.clientErrors.length ? d.a.createElement($.a, {
						messages: e.guidelines.clientErrors
					}) : d.a.createElement(ct.a, {
						className: fe.a.characterCountdown,
						maxChars: F,
						text: e.guidelines.guidelineText
					})), d.a.createElement(xe, {
						on: e.titleRequiredStrings.enabled,
						onClick: this.onToggleTitleRequiredStrings,
						label: s.fbt._("Require words in the post title", null, {
							hk: "4oCfRM"
						}),
						subtext: s.fbt._("Posts without these words in the title can’t be submitted. (Choose up to 15 words, 40 characters each.)", null, {
							hk: "4i9wtv"
						})
					}), e.titleRequiredStrings.enabled && d.a.createElement(ae, {
						label: s.fbt._("Add required words", null, {
							hk: "22VjqJ"
						})
					}, d.a.createElement(Ne, {
						errors: e.titleRequiredStrings.clientErrors,
						onChange: this.onTitleRequiredStringsChange,
						strings: e.titleRequiredStrings.strings
					})), d.a.createElement(ye, null, d.a.createElement(xe, {
						on: e.titleBlacklistedStrings.enabled,
						onClick: this.onToggleTitleBlacklistedStrings,
						label: s.fbt._("Ban words from the post title", null, {
							hk: "4097Ur"
						}),
						subtext: s.fbt._("Posts with these words in the title can’t be submitted. (Choose up to 15 words, 40 characters each.)", null, {
							hk: "3SobVK"
						})
					}), e.titleBlacklistedStrings.enabled && d.a.createElement(ae, {
						label: s.fbt._("Add banned words", null, {
							hk: "ZUXyb"
						})
					}, d.a.createElement(Ne, {
						errors: e.titleBlacklistedStrings.clientErrors,
						onChange: this.onTitleBlacklistedStringsChange,
						strings: e.titleBlacklistedStrings.strings
					}))), e.bodyRequirement.restrictionPolicy === C.a.Required && d.a.createElement(ye, null, d.a.createElement(xe, {
						on: e.bodyRequiredStrings.enabled,
						onClick: this.onToggleBodyRequiredStrings,
						label: s.fbt._("Require words in the post body", null, {
							hk: "9gXSe"
						}),
						subtext: s.fbt._("Posts without these words in the body can’t be submitted. (Choose up to 15 words of 40 characters each)", null, {
							hk: "1uTriP"
						})
					}), e.bodyRequiredStrings.enabled && d.a.createElement(ae, {
						label: s.fbt._("Add required words", null, {
							hk: "1GP0o4"
						})
					}, d.a.createElement(Ne, {
						errors: e.bodyRequiredStrings.clientErrors,
						onChange: this.onBodyRequiredStringsChange,
						strings: e.bodyRequiredStrings.strings
					}))), e.bodyRequirement.restrictionPolicy !== C.a.NotAllowed && d.a.createElement(ye, null, d.a.createElement(xe, {
						on: e.bodyBlacklistedStrings.enabled,
						onClick: this.onToggleBodyBlacklistedStrings,
						label: s.fbt._("Ban words from the post body", null, {
							hk: "3FfELu"
						}),
						subtext: s.fbt._("Posts with these words in the body can’t be submitted. (Choose up to 15 words, 40 characters each.)", null, {
							hk: "2iKz0x"
						})
					}), e.bodyBlacklistedStrings.enabled && d.a.createElement(ae, {
						label: s.fbt._("Add banned words", null, {
							hk: "2VC0jp"
						})
					}, d.a.createElement(Ne, {
						errors: e.bodyBlacklistedStrings.clientErrors,
						onChange: this.onBodyBlacklistedStringsChange,
						strings: e.bodyBlacklistedStrings.strings
					}))), d.a.createElement(xe, {
						on: e.linkDomains.enabled,
						onClick: this.onToggleLinkDomains,
						label: s.fbt._("Require or ban links from specific domains", null, {
							hk: "eWD5S"
						}),
						subtext: s.fbt._("Posts with links that don’t fit your requirements can’t be submitted.", null, {
							hk: "3CIqYb"
						})
					}), e.linkDomains.enabled && d.a.createElement(d.a.Fragment, null, d.a.createElement(ae, {
						label: s.fbt._("Restriction type", null, {
							hk: "2gcn9B"
						})
					}, d.a.createElement(te.a, {
						value: e.linkDomains.restrictionPolicy,
						name: "restrictionType",
						onChange: this.onRestrictionPolicyChange
					}, d.a.createElement(ne.a, {
						className: fe.a.radioOption,
						showButton: !0,
						value: C.b.Whitelist
					}, s.fbt._("Required domains", null, {
						hk: "1gV6ik"
					})), d.a.createElement(ne.a, {
						className: fe.a.radioOption,
						showButton: !0,
						value: C.b.Blacklist
					}, s.fbt._("Blocked domains", null, {
						hk: "oJmGD"
					})))), d.a.createElement(ae, {
						label: e.linkDomains.restrictionPolicy === C.b.Whitelist ? s.fbt._("Only allow link posts with these domains", null, {
							hk: "14eotU"
						}) : s.fbt._("Block link posts with these domains", null, {
							hk: "Plgix"
						})
					}, d.a.createElement("textarea", {
						"aria-invalid": !!n.length,
						className: fe.a.domainsTextarea,
						maxLength: I,
						onBlur: this.onLinkDomainsBlur,
						onChange: this.onLinkDomainsTextChange,
						placeholder: s.fbt._("Example: website.com", null, {
							hk: "4uJFu4"
						}),
						required: !0,
						spellCheck: !1,
						value: e.linkDomains.domainsText
					}), d.a.createElement($.a, {
						messages: n
					}))), d.a.createElement(xe, {
						on: e.repostFrequency.enabled,
						onClick: this.onToggleRepostFrequency,
						label: s.fbt._("Restrict how often the same link can be posted", null, {
							hk: "3efm95"
						}),
						subtext: s.fbt._("Posts that have a link that has already been posted to your community can only be submitted within the number of days you select.", null, {
							hk: "1xLaYI"
						})
					}), e.repostFrequency.enabled && d.a.createElement(ee.b, {
						className: fe.a.repostFrequencyInput,
						disabled: t,
						label: s.fbt._("number of days", null, {
							hk: "1sPFop"
						}),
						max: j,
						min: 1,
						onChange: this.onRepostFrequencyChange,
						type: "number",
						value: le(e.repostFrequency.days)
					}))
				}
			}

			function Nt() {
				return (Nt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Pt = Object(m.c)({
				automatedReportingEnabled: Z.d.automatedReportingEnabled
			});
			var Mt = Object(c.b)(Pt)(e => d.a.createElement(d.a.Fragment, null, (e => [...e.automatedReportingEnabled ? [dt] : [], Tt, Ce])(e).map((t, n) => d.a.createElement(t, Nt({
					key: n
				}, e))))),
				Ot = e => {
					const {
						bodyBlacklistedStrings: t,
						bodyRegexes: n,
						bodyRequiredStrings: s,
						bodyRestrictionPolicy: i,
						domainBlacklist: o,
						domainWhitelist: a,
						guidelinesText: r,
						isFlairRequired: l,
						linkRepostAge: d,
						linkRestrictionPolicy: c,
						titleBlacklistedStrings: m,
						titleRegexes: u,
						titleRequiredStrings: g,
						titleTextMaxLength: h,
						titleTextMinLength: b
					} = e.postRequirements;
					return {
						...U,
						automatedReporting: e.automatedReporting,
						guidelines: {
							enabled: !(!r || !r.trim()),
							guidelineText: r || "",
							clientErrors: []
						},
						titleRequiredStrings: {
							enabled: !!g.length,
							strings: g,
							clientErrors: []
						},
						titleBlacklistedStrings: {
							enabled: !!m.length,
							strings: m,
							clientErrors: []
						},
						titleLength: {
							enabled: null !== b || null !== h,
							min: b,
							max: h,
							clientErrors: []
						},
						bodyRequirement: {
							enabled: !0,
							restrictionPolicy: i
						},
						...i !== C.a.NotAllowed ? {
							bodyRequiredStrings: {
								enabled: !!s.length,
								strings: s,
								clientErrors: []
							},
							bodyBlacklistedStrings: {
								enabled: !!t.length,
								strings: t,
								clientErrors: []
							},
							bodyRegexes: {
								enabled: !!n.length,
								regexes: n,
								serverErrors: []
							}
						} : null,
						titleRegexes: {
							enabled: !!u.length,
							regexes: u,
							serverErrors: []
						},
						linkDomains: {
							enabled: c !== C.b.None,
							restrictionPolicy: c === C.b.None ? C.b.Whitelist : c,
							domainsText: c !== C.b.None ? ut(c === C.b.Whitelist ? a : o) : "",
							clientErrors: [],
							serverErrors: []
						},
						repostFrequency: {
							enabled: null !== d,
							days: d
						},
						flairRequirement: {
							enabled: l
						}
					}
				};
			const Dt = {
					bodyBlacklistedStrings: [],
					bodyRegexes: [],
					bodyRequiredStrings: [],
					bodyRestrictionPolicy: C.a.None,
					domainBlacklist: [],
					domainWhitelist: [],
					guidelinesText: null,
					isFlairRequired: !1,
					linkRepostAge: null,
					linkRestrictionPolicy: C.b.None,
					titleBlacklistedStrings: [],
					titleRegexes: [],
					titleRequiredStrings: [],
					titleTextMaxLength: null,
					titleTextMinLength: null
				},
				Ft = e => e.filter(e => !!e);
			var jt = e => {
					const t = {
							...Dt,
							bodyRestrictionPolicy: e.bodyRequirement.restrictionPolicy,
							guidelinesText: e.guidelines.enabled ? e.guidelines.guidelineText : null,
							isFlairRequired: e.flairRequirement.enabled,
							linkRepostAge: e.repostFrequency.enabled ? e.repostFrequency.days : null,
							linkRestrictionPolicy: e.linkDomains.enabled ? e.linkDomains.restrictionPolicy : C.b.None,
							titleBlacklistedStrings: e.titleBlacklistedStrings.enabled ? e.titleBlacklistedStrings.strings : [],
							titleRegexes: e.titleRegexes.enabled ? Ft(e.titleRegexes.regexes) : [],
							titleRequiredStrings: e.titleRequiredStrings.enabled ? e.titleRequiredStrings.strings : [],
							titleTextMaxLength: e.titleLength.enabled ? e.titleLength.max : null,
							titleTextMinLength: e.titleLength.enabled ? e.titleLength.min : null
						},
						n = e.bodyRequirement.restrictionPolicy !== C.a.NotAllowed,
						s = e.bodyRequirement.restrictionPolicy === C.a.Required;
					if (n && (t.bodyBlacklistedStrings = e.bodyBlacklistedStrings.enabled ? e.bodyBlacklistedStrings.strings : [], t.bodyRequiredStrings = s && e.bodyRequiredStrings.enabled ? e.bodyRequiredStrings.strings : [], t.bodyRegexes = e.bodyRegexes.enabled ? Ft(e.bodyRegexes.regexes) : []), e.linkDomains.enabled) {
						const n = mt(e.linkDomains.domainsText);
						e.linkDomains.restrictionPolicy === C.b.Whitelist ? t.domainWhitelist = n : e.linkDomains.restrictionPolicy === C.b.Blacklist && (t.domainBlacklist = n)
					}
					return t
				},
				It = n("./node_modules/lodash/isEqual.js"),
				At = n.n(It),
				Ht = (e, t) => {
					if (At()(e, t)) return {
						automatedReporting: {},
						postRequirements: {}
					};
					const n = jt(e),
						s = jt(t),
						i = R()(n, (e, t) => At()(e, s[t])),
						o = {};
					return Object.keys(t.automatedReporting).forEach(n => {
						const s = t.automatedReporting[n],
							i = e.automatedReporting[n];
						At()(s, i) || (o[n] = i)
					}), {
						automatedReporting: o,
						postRequirements: i
					}
				};
			const Wt = "PostReq-discard-confirmation",
				Ut = 150;

			function Gt(e) {
				switch (e) {
					case "levelAbuse":
						return "harassment_control_level";
					case "levelHate":
						return "identity_insults_control_level";
					case "wordlistEnabled":
						return "auto_report_keywords";
					default:
						return ""
				}
			}
			const Vt = Object(m.c)({
					allowNavigationCallback: T.a,
					isDiscardModalOpen: Object(L.b)(Wt),
					isLoading: B.a,
					contentControls: B.b
				}),
				Kt = Object(c.b)(Vt, (e, t) => ({
					closeAllModals: () => e(Object(g.f)()),
					onSave: n => e(Object(u.b)(t.subredditName, n)),
					toggleModal: t => e(Object(g.i)(t))
				}));
			class Jt extends d.a.Component {
				constructor(e) {
					super(e), this.formBodyRef = d.a.createRef(), this.isUnmounted = !1, this.resetPendingNavigation = () => {
						this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}, this.performPendingNavigationIfNeeded = () => {
						this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.saveFormState = async () => {
						const {
							contentControls: e,
							sendEvent: t
						} = this.props, {
							initialFormState: n
						} = this.state;
						if (!e) return;
						const s = Lt(this.state.formState);
						if (Bt(s)) return void this.setState({
							formState: s
						}, this.focusErrorField);
						const {
							postRequirements: i,
							automatedReporting: o
						} = Ht(s, n);
						if (r()(i) && r()(o)) return;
						this.setState({
							isSavePending: !0
						}), r()(o) || Object.keys(o).filter(e => ["levelAbuse", "levelHate", "wordlistEnabled"].includes(e)).map(e => ({
							noun: Gt(e),
							setting: {
								value: o[e],
								oldValue: ""
							}
						})).forEach(({
							noun: e,
							setting: n
						}) => t(t => ({
							noun: e,
							setting: n,
							source: "community_settings",
							action: "save",
							...Object(E.defaults)(t)
						})));
						const a = await this.props.onSave({
							automatedReporting: o,
							postRequirements: i
						});
						if (!this.isUnmounted)
							if (this.setState({
									isSavePending: !1
								}), a.success) this.props.sendEvent(w(jt(s))), this.setState({
								formState: s,
								initialFormState: s,
								hasJustSaved: !0
							});
							else if (a.errors) {
							const e = qt(s, a.errors);
							this.setState({
								formState: e
							}, this.focusErrorField)
						}
					}, this.updateHasUnsavedChanges = o()(() => {
						this.setState(e => {
							const {
								formState: t,
								initialFormState: n
							} = e, {
								automatedReporting: s,
								postRequirements: i
							} = Ht(t, n), o = !r()(s) || !r()(i);
							return o !== e.hasUnsavedChanges ? {
								hasUnsavedChanges: o
							} : null
						})
					}, 200, {
						maxWait: 500
					}), this.focusErrorField = () => {
						const e = this.formBodyRef.current.querySelector('[aria-invalid="true"]');
						e instanceof HTMLElement && (e.focus(), e.getBoundingClientRect().top < Ut && (e.scrollIntoView(), window.scroll(0, window.scrollY - Ut)))
					}, this.onFormFieldBlur = () => {
						this.updateHasUnsavedChanges(), this.updateHasUnsavedChanges.flush()
					}, this.onSaveClick = () => {
						this.saveFormState()
					}, this.onDiscardUnsavedChangesConfirmed = () => {
						this.performPendingNavigationIfNeeded()
					}, this.onCloseModal = () => {
						this.props.closeAllModals(), this.resetPendingNavigation()
					}, this.onFormStateChange = (e, t = !1) => {
						this.setState(n => {
							let s = {
								...n.formState,
								...e
							};
							return t && (s = Lt(s)), {
								formState: s,
								hasJustSaved: !1
							}
						})
					};
					const t = e.contentControls ? Ot(e.contentControls) : U;
					this.state = {
						areContentControlsLoaded: !!e.contentControls,
						formState: t,
						hasJustSaved: !1,
						hasUnsavedChanges: !1,
						initialFormState: t,
						isSavePending: !1
					}
				}
				componentWillUnmount() {
					this.isUnmounted = !0
				}
				componentDidUpdate(e, t) {
					const {
						contentControls: n
					} = this.props;
					if (n && !this.state.areContentControlsLoaded) {
						const e = Ot(n);
						this.setState({
							areContentControlsLoaded: !0,
							formState: e,
							initialFormState: e
						})
					}
					this.updateHasUnsavedChanges()
				}
				render() {
					const {
						state: e
					} = this, {
						isLoading: t
					} = this.props, {
						areContentControlsLoaded: n,
						hasUnsavedChanges: i
					} = e;
					return d.a.createElement("div", {
						className: fe.a.container
					}, d.a.createElement(f.c, {
						className: fe.a.topBar
					}, d.a.createElement(y.i, {
						disabled: t || !i,
						onClick: this.onSaveClick
					}, e.hasJustSaved ? s.fbt._("Saved", null, {
						hk: "2dBH1t"
					}) : e.isSavePending ? d.a.createElement(k.a, {
						className: fe.a.loadingIcon,
						sizePx: 10
					}) : s.fbt._("Save changes", null, {
						hk: "1bM6H4"
					}))), d.a.createElement(f.a, {
						className: fe.a.contentContainer
					}, d.a.createElement(f.b, null, s.fbt._("Content controls", null, {
						hk: "1sol1u"
					}), d.a.createElement(p.a, {
						linkUrl: M
					})), d.a.createElement("div", {
						className: fe.a.pageDetailText
					}, s.fbt._("Set requirements and restrictions for how people post and comment in your community", null, {
						hk: "48UaB4"
					})), n ? d.a.createElement("div", {
						className: fe.a.formBody,
						onBlur: this.onFormFieldBlur,
						ref: this.formBodyRef
					}, d.a.createElement(Mt, {
						formState: this.state.formState,
						isLoading: t,
						onChange: this.onFormStateChange
					})) : d.a.createElement(Y, {
						isLoading: t
					})), d.a.createElement(h.a, {
						blockOnBeforeUnload: !0,
						dialogId: Wt,
						enabled: i
					}), this.props.isDiscardModalOpen && d.a.createElement(b.a, {
						actionText: s.fbt._("Discard", null, {
							hk: "1SiwLl"
						}),
						headerText: s.fbt._("Discard changes before leaving?", null, {
							hk: "354NTe"
						}),
						modalText: s.fbt._("You have made some changes to content controls, do you wish to discard the changes?", null, {
							hk: "295tlh"
						}),
						onConfirm: this.onDiscardUnsavedChangesConfirmed,
						toggleModal: this.onCloseModal,
						withOverlay: !0
					}))
				}
			}
			t.default = Kt(Object(x.c)(Jt))
		},
		"./src/reddit/controls/DiscreteSlideSelector/Bars/index.m.less": function(e, t, n) {
			e.exports = {
				container: "cLxKIW4daPigPhHAO5GIo",
				segment: "_1ifAdYOIxUgF4BQntpz6-s"
			}
		},
		"./src/reddit/controls/DiscreteSlideSelector/Labels/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_26pOOKaCdw_1NihmRn81pP",
				label: "_2yKviV_ruoti9IBp4RKz5y",
				labelSelected: "_2P0i4szngl1u7sE5JM6k1c"
			}
		},
		"./src/reddit/controls/DiscreteSlideSelector/ThumbRail/index.m.less": function(e, t, n) {
			e.exports = {
				container: "eGrv1HeZ0JVxpwOfKhf1Q",
				clickArea: "_3uhuK9afyQsJteE65ZYwPV",
				thumb: "_1qVIs0FrjHQzXXKL1b87yW"
			}
		},
		"./src/reddit/controls/DiscreteSlideSelector/index.m.less": function(e, t, n) {
			e.exports = {
				barContainer: "_3wot93SliW-VWyptaq2epS",
				bars: "_33xYQEVEBWja4Lcl2AqexN",
				thumbRail: "_14n6xNgIdrQJj4PhadXZYO"
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModHub-ContentControls.b0413ba8fd3d5c9480f4.js.map