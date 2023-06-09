// https://www.redditstatic.com/desktop2x/reddit-components-ModHub-ContentControls.bbaa5ea7b2ad54932e29.js
// Retrieved at 6/8/2023, 8:50:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModHub-ContentControls"], {
		"./node_modules/lodash/negate.js": function(e, t) {
			var n = "Expected a function";
			e.exports = function(e) {
				if ("function" != typeof e) throw new TypeError(n);
				return function() {
					var t = arguments;
					switch (t.length) {
						case 0:
							return !e.call(this);
						case 1:
							return !e.call(this, t[0]);
						case 2:
							return !e.call(this, t[0], t[1]);
						case 3:
							return !e.call(this, t[0], t[1], t[2])
					}
					return !e.apply(this, t)
				}
			}
		},
		"./node_modules/lodash/omitBy.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/negate.js"),
				o = n("./node_modules/lodash/pickBy.js");
			e.exports = function(e, t) {
				return o(e, i(s(t)))
			}
		},
		"./src/reddit/components/BlockNavigation/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/react-router/esm/react-router.js"),
				a = n("./src/reddit/actions/modal.ts");
			const l = "non-empty-string-to-block-navigation";
			class d extends i.a.Component {
				constructor() {
					super(...arguments), this.onBeforeUnload = e => {
						if (this.props.enabled) return e.preventDefault(), e.returnValue = "", ""
					}, this.message = (e, t) => {
						return !0 === (this.props.confirmNavigate || this.defaultConfirmNavigate)(e, t) || l
					}, this.defaultConfirmNavigate = (e, t) => {
						const {
							ignoreCurrentLocation: n = !0,
							location: s,
							showModal: i,
							dialogId: o
						} = this.props;
						return !(!n || e.pathname !== s.pathname) || (o && i(), !1)
					}
				}
				componentDidMount() {
					this.props.blockOnBeforeUnload && window.addEventListener("beforeunload", this.onBeforeUnload)
				}
				componentWillUnmount() {
					this.props.blockOnBeforeUnload && window.removeEventListener("beforeunload", this.onBeforeUnload)
				}
				render() {
					const {
						enabled: e = !0
					} = this.props;
					return i.a.createElement(r.b, {
						message: this.message,
						when: e
					})
				}
			}
			t.a = Object(o.b)(null, (e, t) => ({
				showModal: () => e(Object(a.h)(t.dialogId))
			}))(Object(r.i)(d))
		},
		"./src/reddit/components/ModHub/ContentControls/FormPlaceholder/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3H4J-fB2PhD0fgCLF9tXok",
				section: "_1Hnvz7VS_Thd3WZDQl5N_b",
				sectionTitle: "_3BIh6QNUrwD0lTaBBamAEI",
				line: "_3GvWrsFFOdI--KTOZNsaI-",
				sectionBodyRow: "drysb1q3Lkf7zfCJxlW_W"
			}
		},
		"./src/reddit/components/ModHub/ContentControls/FormSections/HatefulContentFilters/Filter/index.m.less": function(e, t, n) {
			e.exports = {
				content: "-AKopMfuc8eg8cQy_3bWo",
				description: "_3UqZ-WSPhEvwee_kzpjjuo",
				levelLabel: "_1N3-KBxFRGpxumaXPNodxW",
				title: "PZcjQ4552Q6GaEX022TlN",
				labelNewTag: "Z6PmGqN4dqmBsftGyGo3x"
			}
		},
		"./src/reddit/components/ModHub/ContentControls/FormSections/HatefulContentFilters/LevelLabel/index.m.less": function(e, t, n) {
			e.exports = {
				label: "_1mIxG0rIp-q9tW-mrf0Hb6"
			}
		},
		"./src/reddit/components/ModHub/ContentControls/FormSections/HatefulContentFilters/PermittedTerms.m.less": function(e, t, n) {
			e.exports = {
				label: "_2-m4X4LkTqPI_i6GNIKfgQ",
				subText: "_361uOfOZo599RzbcL9HWb1"
			}
		},
		"./src/reddit/components/ModHub/ContentControls/FormSections/HatefulContentFilters/index.m.less": function(e, t, n) {
			e.exports = {
				description: "zZ37hDR-wAqBD3lciXthe",
				filter: "_2eZI7hktoKnkuITHJM4tOf",
				title: "BcEY8NHl2oAk65afxfkCM"
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
				default: "_2cX2zc4Fy1mDYH2L_phcaj",
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/lodash/debounce.js"),
				o = n.n(i),
				r = n("./node_modules/lodash/isEmpty.js"),
				a = n.n(r),
				l = n("./node_modules/react/index.js"),
				d = n.n(l),
				c = n("./node_modules/react-redux/es/index.js"),
				m = n("./node_modules/reselect/es/index.js"),
				u = n("./src/lib/classNames/index.ts"),
				h = n("./src/reddit/actions/contentControls/index.ts"),
				g = n("./src/reddit/actions/modal.ts"),
				b = n("./src/reddit/components/BlockNavigation/index.tsx"),
				p = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				f = n("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				x = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				C = n("./src/reddit/components/TrackingHelper/index.tsx"),
				y = n("./src/reddit/controls/Button/index.tsx"),
				k = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				S = n("./node_modules/lodash/omitBy.js"),
				E = n.n(S),
				v = n("./src/reddit/models/PostRequirements/index.ts"),
				R = n("./src/reddit/selectors/telemetry.ts"),
				_ = n("./src/telemetry/models/PostRequirement.ts");
			const q = {
					[v.a.None]: _.BodyRestrictionPolicy.Optional,
					[v.a.NotAllowed]: _.BodyRestrictionPolicy.Disabled,
					[v.a.Required]: _.BodyRestrictionPolicy.Required
				},
				T = e => {
					const t = {
						bodyBlacklistedStrings: e.bodyBlacklistedStrings,
						bodyRegexPatterns: e.bodyRegexes,
						bodyRequiredStrings: e.bodyRequiredStrings,
						bodyRestrictionPolicy: q[e.bodyRestrictionPolicy],
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
					return E()(t, e => Array.isArray(e) && !e.length)
				},
				w = e => t => ({
					source: "post_requirements",
					action: "save",
					noun: "settings",
					...R.o(t),
					postRequirement: T(e),
					subreddit: R.lb(t),
					userSubreddit: R.ub(t)
				});
			var B = n("./src/reddit/selectors/activeModalId.ts"),
				L = n("./src/reddit/selectors/contentControls.ts"),
				N = n("./src/reddit/selectors/experiments/shredditModNav.ts"),
				F = n("./src/reddit/selectors/platform.ts"),
				M = n("./src/config.ts"),
				O = n("./src/reddit/models/HatefulContentFilters/index.ts");
			const P = `${M.a.redditModHelpUrl}/hc/en-us/articles/360010322091`,
				D = 2,
				j = 300,
				I = 400,
				H = 90,
				A = 1e5,
				W = 15,
				U = 40,
				G = 5,
				K = {
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
						restrictionPolicy: v.a.None
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
						restrictionPolicy: v.b.Whitelist,
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
					hatefulContentFilters: {
						hatefulContentThresholdAbuse: O.a.Off,
						hatefulContentThresholdIdentity: O.a.Off,
						permittedTerms: []
					}
				};
			var V = n("./node_modules/lodash/times.js"),
				Z = n.n(V),
				z = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				J = n("./src/reddit/components/ModHub/ContentControls/FormPlaceholder/index.m.less"),
				Q = n.n(J);
			var X = e => {
					let {
						isLoading: t
					} = e;
					return l.createElement("div", {
						className: Object(u.a)(Q.a.container, Object(z.a)({
							isLoading: !1
						}))
					}, Z()(3).map(e => l.createElement("div", {
						key: e,
						className: Q.a.section
					}, l.createElement("div", {
						className: Object(u.a)(Q.a.sectionTitle, Object(z.b)({
							isLoading: t
						}))
					}), l.createElement("div", {
						className: Q.a.line
					}), Z()(2).map(e => l.createElement("div", {
						key: e,
						className: Object(u.a)(Q.a.sectionBodyRow, Object(z.b)({
							isLoading: t
						}))
					})))))
				},
				Y = n("./src/reddit/featureFlags/index.ts"),
				$ = n("./src/reddit/selectors/experiments/cnc/index.ts"),
				ee = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				te = n("./src/reddit/controls/ErrorText/index.tsx"),
				ne = n("./src/reddit/controls/FormFields/index.tsx"),
				se = n("./src/reddit/controls/RadioInput/index.tsx"),
				ie = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				oe = n("./src/reddit/components/ModHub/ContentControls/LabeledControl/index.m.less"),
				re = n.n(oe);
			const ae = e => e.preventDefault();
			var le = e => d.a.createElement("div", {
					className: Object(u.a)(e.className, re.a.container)
				}, d.a.createElement("label", {
					className: re.a.label,
					onClick: ae
				}, d.a.createElement("div", {
					className: Object(u.a)(e.labelTextClassName, re.a.labelText)
				}, e.label), e.children)),
				de = (e, t, n) => {
					let s = Math.abs(parseInt(e, 10));
					return Number.isInteger(s) ? (void 0 !== t && s < t && (s = t), void 0 !== n && s > n && (s = n), s) : null
				};
			const ce = e => null !== e ? e.toString() : "",
				me = e => e.map(e => e.trim().toLowerCase()).filter(Boolean);
			var ue = e => {
					const {
						min: t,
						max: n,
						minLimit: i,
						maxLimit: o
					} = e, r = [];
					return null !== t && (t < i || t > o) && r.push({
						field: "min",
						message: s.fbt._("Minimum must be between {min} and {max}", [s.fbt._param("min", `${i}`), s.fbt._param("max", `${o}`)], {
							hk: "3za1lQ"
						})
					}), null !== n && (n < i || n > o) && r.push({
						field: "max",
						message: s.fbt._("Maximum must be between {min} and {max}", [s.fbt._param("min", `${i}`), s.fbt._param("max", `${o}`)], {
							hk: "3qr1O"
						})
					}), !r.length && null !== t && null !== n && t > n && r.push({
						field: "both",
						message: s.fbt._("Maximum must be greater than or equal to minimum", null, {
							hk: "1pXTqq"
						})
					}), r
				},
				he = n("./src/reddit/components/ModHub/ContentControls/MinMaxInput/index.m.less"),
				ge = n.n(he);
			class be extends d.a.Component {
				constructor() {
					super(...arguments), this.minInputRef = d.a.createRef(), this.maxInputRef = d.a.createRef(), this.onChange = (e, t) => {
						const {
							min: n,
							max: s,
							minLimit: i,
							maxLimit: o
						} = this.props, r = Math.min(i, 1), a = de(e.target.value, r, o), l = {
							min: "min" === t ? a : n,
							max: "max" === t ? a : s
						};
						this.props.onChange({
							...l,
							clientErrors: ue({
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
						n.value = ce(e), s.value = ce(t)
					}
				}
				render() {
					const {
						errors: e,
						max: t,
						maxLimit: n,
						min: i,
						minLimit: o
					} = this.props, r = e.map(e => e.message), a = e.some(e => "both" === e.field), l = a || e.some(e => "min" === e.field), c = a || e.some(e => "max" === e.field);
					return d.a.createElement("div", {
						onBlur: this.onBlur
					}, d.a.createElement("div", null, d.a.createElement(ne.b, {
						className: ge.a.minInput,
						inputRef: this.minInputRef,
						isInvalid: l,
						label: s.fbt._("min", null, {
							hk: "1OxOYM"
						}),
						max: n,
						min: o,
						onChange: this.onMinChange,
						type: "number",
						value: ce(i)
					}), d.a.createElement(ne.b, {
						className: ge.a.maxInput,
						inputRef: this.maxInputRef,
						isInvalid: c,
						label: s.fbt._("max", null, {
							hk: "2IodGV"
						}),
						max: n,
						min: o,
						onChange: this.onMaxChange,
						type: "number",
						value: ce(t)
					})), d.a.createElement(te.a, {
						className: ge.a.errorMessages,
						messages: r
					}))
				}
			}
			var pe = n("./src/lib/lessComponent.tsx"),
				fe = n("./src/reddit/featureFlags/component.tsx"),
				xe = n("./src/reddit/components/ModHub/ContentControls/index.m.less"),
				Ce = n.n(xe);
			const ye = pe.a.wrapped(ee.q, "toggleSetting", Ce.a),
				ke = Object(fe.a)("newPostRequirements", d.a.Fragment),
				Se = () => d.a.createElement("a", {
					className: Ce.a.externalLink,
					href: "https://docs.python.org/2/library/re.html#regular-expression-syntax",
					rel: "noopener noreferrer",
					target: "_blank"
				}, s.fbt._("Python RegEx syntax", null, {
					hk: "5NwTW"
				})),
				Ee = e => e.regexes.map(t => {
					const n = e.serverErrors.find(e => e.regex === t);
					return n ? n.message : ""
				}),
				ve = e => e.serverErrors.filter(e => null === e.regex).map(e => e.message);
			class Re extends d.a.Component {
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
						formState: e,
						isPostGuidanceModEnabled: t
					} = this.props, n = e.bodyRequirement.restrictionPolicy === v.a.NotAllowed;
					return d.a.createElement("fieldset", null, d.a.createElement("legend", {
						className: Ce.a.sectionLegend
					}, s.fbt._("Advanced post requirements", null, {
						hk: "RkyyQ"
					})), d.a.createElement(ye, {
						on: e.flairRequirement.enabled,
						onClick: this.onToggleFlairRequirement,
						label: s.fbt._("Require post flair", null, {
							hk: "40S3NC"
						}),
						subtext: s.fbt._("Posts without flair can’t be submitted. (Note that this requirement is ignored if your community hasn’t set up flair yet.)", null, {
							hk: "1uKE6c"
						})
					}), d.a.createElement(ee.c, {
						className: Ce.a.bodyRestrictionSetting,
						direction: "column",
						label: s.fbt._("Post text body", null, {
							hk: "1dh3pQ"
						}),
						subtext: s.fbt._("Allow posts to have body text", null, {
							hk: "qytLU"
						})
					}, d.a.createElement(se.a, {
						disabled: !1,
						name: "body_restriction",
						onChange: this.onBodyRestrictionPolicyChange,
						value: e.bodyRequirement.restrictionPolicy
					}, d.a.createElement(ie.a, {
						className: Ce.a.radioOption,
						showButton: !0,
						value: v.a.None
					}, s.fbt._("Text body is optional for all post types", null, {
						hk: "1Gm2zE"
					})), d.a.createElement(ie.a, {
						className: Ce.a.radioOption,
						showButton: !0,
						value: v.a.Required
					}, s.fbt._("Text body is required for text-only posts", null, {
						hk: "29jDhz"
					})), d.a.createElement(ie.a, {
						className: Ce.a.radioOption,
						showButton: !0,
						value: v.a.NotAllowed
					}, s.fbt._("Text body is not allowed", null, {
						hk: "2pY4Fl"
					})))), d.a.createElement(ye, {
						on: e.titleLength.enabled,
						onClick: this.onToggleTitleLength,
						label: s.fbt._("Restrict post title length", null, {
							hk: "3hiTGG"
						}),
						subtext: s.fbt._("Set a minimum and/or maximum post title length", null, {
							hk: "aLDGs"
						})
					}), e.titleLength.enabled && d.a.createElement(le, {
						label: s.fbt._("Character length", null, {
							hk: "37rbXi"
						})
					}, d.a.createElement(be, {
						onChange: this.onTitleLengthChange,
						min: e.titleLength.min,
						max: e.titleLength.max,
						minLimit: D,
						maxLimit: j,
						errors: e.titleLength.clientErrors
					})), !t && d.a.createElement(d.a.Fragment, null, d.a.createElement(ye, {
						on: e.titleRegexes.enabled,
						onClick: this.onToggleTitleRegex,
						label: s.fbt._("Use title text RegEx requirements", null, {
							hk: "4bqbLM"
						}),
						subtext: s.fbt._("Use regular expressions for more advanced title matching. These use the {linkToDocumentation}", [s.fbt._param("linkToDocumentation", d.a.createElement(Se, null))], {
							hk: "2rDR9r"
						})
					}), e.titleRegexes.enabled && d.a.createElement(le, {
						label: s.fbt._("Title must match one of:", null, {
							hk: "GtVrU"
						})
					}, d.a.createElement(ne.d, {
						className: Ce.a.multipleInput,
						disabled: !1,
						errors: Ee(e.titleRegexes),
						values: e.titleRegexes.regexes,
						onChange: this.onTitleRegexChange,
						maxLength: G,
						addValueText: s.fbt._("Add regex", null, {
							hk: "3W7WpW"
						})
					}), d.a.createElement(te.a, {
						messages: ve(e.titleRegexes)
					}))), !t && d.a.createElement(d.a.Fragment, null, d.a.createElement(ke, null, d.a.createElement(ye, {
						disabled: n,
						on: e.bodyRegexes.enabled,
						onClick: this.onToggleBodyRegex,
						label: s.fbt._("Use body text RegEx requirements", null, {
							hk: "2kadJl"
						}),
						subtext: s.fbt._("Use regular expressions for more advanced body text matching. These use the {linkToDocumentation}", [s.fbt._param("linkToDocumentation", d.a.createElement(Se, null))], {
							hk: "3mk1ff"
						})
					}), !n && e.bodyRegexes.enabled && d.a.createElement(le, {
						label: s.fbt._("Body must match one of:", null, {
							hk: "1pLBfl"
						})
					}, d.a.createElement(ne.d, {
						className: Ce.a.multipleInput,
						disabled: !1,
						errors: Ee(e.bodyRegexes),
						values: e.bodyRegexes.regexes,
						onChange: this.onBodyRegexChange,
						maxLength: G,
						addValueText: s.fbt._("Add regex", null, {
							hk: "3W7WpW"
						})
					}), d.a.createElement(te.a, {
						messages: ve(e.bodyRegexes)
					})))))
				}
			}
			var _e = n("./src/reddit/components/ModHub/ModHubNav/NavItem.tsx"),
				qe = n("./node_modules/lodash/clamp.js"),
				Te = n.n(qe),
				we = n("./src/reddit/controls/DiscreteSlideSelector/Bars/index.m.less"),
				Be = n.n(we);

			function Le(e) {
				const t = Array.from({
					length: e.optionColors.length - 1
				});
				return d.a.createElement("div", {
					className: Object(u.a)(Be.a.container, e.className),
					style: {
						gridTemplateColumns: `repeat(${t.length}, 1fr)`
					}
				}, t.map((t, n) => d.a.createElement("div", {
					className: Be.a.segment,
					key: n,
					style: {
						backgroundColor: n < e.currentStop ? e.optionColors[e.currentStop] : void 0
					}
				})))
			}

			function Ne(e) {
				return ["0.5fr", ...Array.from({
					length: e - 2
				}).map(e => "1fr"), "0.5fr"].join(" ")
			}
			var Fe = n("./src/reddit/controls/DiscreteSlideSelector/Labels/index.m.less"),
				Me = n.n(Fe);

			function Oe(e) {
				return d.a.createElement("div", {
					className: Object(u.a)(Me.a.container, e.className),
					style: {
						gridTemplateColumns: Ne(e.options.length)
					}
				}, e.options.map(t => d.a.createElement("div", {
					className: Object(u.a)(Me.a.label, {
						[Me.a.labelSelected]: t.value === e.selected
					}),
					key: t.label,
					style: {
						color: t.value === e.selected ? t.color : void 0
					}
				}, t.label)))
			}
			var Pe = n("./node_modules/lodash/throttle.js"),
				De = n.n(Pe),
				je = n("./src/reddit/controls/DiscreteSlideSelector/ThumbRail/index.m.less"),
				Ie = n.n(je);

			function He(e, t) {
				return 0 === e ? 0 : e === t - 1 ? -16 : -8
			}

			function Ae(e) {
				const t = d.a.useRef(!1);
				return d.a.createElement("div", {
					className: Object(u.a)(Ie.a.container, e.className),
					style: {
						gridTemplateColumns: Ne(e.numStops)
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
					className: Ie.a.clickArea,
					key: s,
					onClick: () => e.onChange(s),
					onMouseEnter: De()(() => {
						t.current && e.onChange(s)
					}, 16)
				})), d.a.createElement("div", {
					className: Ie.a.thumb,
					style: {
						left: (n = e.currentStop, s = e.numStops, `${n/(s-1)*100}%`),
						marginLeft: He(e.currentStop, e.numStops)
					},
					onMouseDown: e => {
						e.stopPropagation, t.current = !0
					}
				}));
				var n, s
			}
			var We = n("./src/reddit/controls/DiscreteSlideSelector/index.m.less"),
				Ue = n.n(We);

			function Ge(e) {
				const t = Te()(e.options.findIndex(t => t.value === e.value), 0, e.options.length - 1);
				return d.a.createElement("div", {
					className: Object(u.a)(Ue.a.container, e.className)
				}, d.a.createElement("div", {
					className: Ue.a.barContainer
				}, d.a.createElement(Le, {
					className: Ue.a.bars,
					currentStop: t,
					optionColors: e.options.map(e => e.color)
				}), d.a.createElement(Ae, {
					className: Ue.a.thumbRail,
					currentStop: t,
					numStops: e.options.length,
					onChange: t => e.onChange(e.options[t].value)
				})), d.a.createElement(Oe, {
					options: e.options,
					selected: e.value
				}))
			}
			var Ke = n("./src/reddit/constants/colors.ts"),
				Ve = n("./src/reddit/components/ModHub/ContentControls/FormSections/HatefulContentFilters/LevelLabel/index.m.less"),
				Ze = n.n(Ve);

			function ze(e) {
				switch (e) {
					case O.a.Off:
						return s.fbt._("Off", null, {
							hk: "2qG3tm"
						});
					case O.a.Lenient:
						return s.fbt._("Lenient", null, {
							hk: "25DBzd"
						});
					case O.a.Moderate:
						return s.fbt._("Moderate", null, {
							hk: "3j1ycq"
						});
					case O.a.Strict:
						return s.fbt._("Strict", null, {
							hk: "4wBjgi"
						})
				}
			}

			function Je(e) {
				switch (e) {
					case O.a.Off:
						return "var(--newCommunityTheme-bodyText)";
					case O.a.Lenient:
						return Ke.b.lenient;
					case O.a.Moderate:
						return Ke.b.moderate;
					case O.a.Strict:
						return Ke.b.strict
				}
			}

			function Qe(e) {
				return d.a.createElement("span", {
					className: Object(u.a)(Ze.a.label, e.className),
					style: {
						color: Je(e.level)
					}
				}, ze(e.level), ":")
			}
			var Xe = n("./src/reddit/components/ModHub/ContentControls/FormSections/HatefulContentFilters/useHCFAdoptionCampaign.tsx"),
				Ye = n("./src/reddit/components/ModHub/ContentControls/FormSections/HatefulContentFilters/Filter/index.m.less"),
				$e = n.n(Ye);

			function et(e) {
				const t = Object(Xe.a)();
				return d.a.createElement("div", {
					className: e.className
				}, d.a.createElement("div", {
					className: $e.a.title
				}, e.title(), t && d.a.createElement(_e.a, {
					className: $e.a.labelNewTag
				})), d.a.createElement("div", {
					className: $e.a.content
				}, d.a.createElement("div", {
					className: $e.a.description
				}, d.a.createElement(Qe, {
					className: $e.a.levelLabel,
					level: e.currentLevel
				}), e.descriptions[e.currentLevel]()), d.a.createElement(Ge, {
					options: [O.a.Off, O.a.Lenient, O.a.Moderate, O.a.Strict].map(e => ({
						color: e === O.a.Off ? "var(--newRedditTheme-metaText)" : Je(e),
						label: ze(e),
						value: e
					})),
					value: e.currentLevel,
					onChange: e.onChange
				})))
			}
			var tt = [{
					name: "hatefulContentThresholdAbuse",
					title: () => s.fbt._("Abuse and harassment", null, {
						hk: "2bl8VK"
					}),
					descriptions: {
						[O.a.Off]: () => s.fbt._("No content that contains potentially abusive language will be automatically held for review.", null, {
							hk: "4yF6zk"
						}),
						[O.a.Lenient]: () => s.fbt._("Some content that contains potentially abusive language will be automatically held for review.", null, {
							hk: "4t8Kdq"
						}),
						[O.a.Moderate]: () => s.fbt._("Most content that contains potentially abusive language will be automatically held for review.", null, {
							hk: "3c5GPy"
						}),
						[O.a.Strict]: () => s.fbt._("All content that contains potentially abusive language will be automatically held for review.", null, {
							hk: "4C6oi2"
						})
					}
				}],
				nt = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/memoizeByReference/index.ts")),
				st = n("./src/reddit/components/MultiOptionSelect/index.tsx"),
				it = n("./src/reddit/components/ModHub/ContentControls/MultiStringsInput/index.m.less"),
				ot = n.n(it);
			class rt extends d.a.Component {
				constructor() {
					super(...arguments), this.state = {
						pendingItemText: ""
					}, this.onInputChanged = e => {
						this.setState({
							pendingItemText: e
						})
					}, this.getOptions = Object(nt.a)(e => e.map(e => ({
						id: e,
						displayText: e,
						selected: !0
					}))), this.getMaxWords = () => this.props.maxWords || W, this.onOptionsChanged = e => {
						const t = this.getOptions(this.props.strings),
							n = new Map;
						t.forEach(e => n.set(e.displayText, e)), e.forEach(e => n.set(e.displayText, e));
						const s = [...n.values()].filter(e => e.selected && !!e.displayText.trim()).map(e => e.displayText.slice(0, U).toLowerCase()).slice(0, this.getMaxWords());
						this.props.onChange(s)
					}
				}
				render() {
					const e = this.getOptions(this.props.strings),
						t = e.length < this.getMaxWords();
					return d.a.createElement(d.a.Fragment, null, d.a.createElement(st.a, {
						className: ot.a.control,
						addText: s.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						allowFreeTextEntry: !0,
						input: this.state.pendingItemText,
						isError: this.props.errors.length > 0,
						isLoading: !1,
						maxOptionLength: t ? U : 0,
						onInputChanged: this.onInputChanged,
						onOptionsChanged: this.onOptionsChanged,
						selectedOptions: e
					}), d.a.createElement(te.a, {
						messages: this.props.errors
					}), d.a.createElement("div", {
						className: ot.a.wordsCountdown
					}, s.fbt._("{selectedCount}/{maxCount} words", [s.fbt._param("selectedCount", `${e.length}`), s.fbt._param("maxCount", `${this.getMaxWords()}`)], {
						hk: "F6evF"
					})))
				}
			}
			var at = n("./src/reddit/components/ModHub/ContentControls/FormSections/HatefulContentFilters/PermittedTerms.m.less"),
				lt = n.n(at);
			const dt = "font-mono inline-block p-px bg-neutral-background-disabled rounded-sm",
				ct = e => {
					let {
						value: t,
						onChange: n
					} = e;
					return d.a.createElement(le, {
						labelTextClassName: lt.a.label,
						label: s.fbt._("Allowed words", null, {
							hk: "4qOqj0"
						})
					}, d.a.createElement(ee.o, {
						className: lt.a.subText
					}, s.fbt._("Comments with these words will not be considered abusive by the filter. Choose up to {max number of permitted terms allowed} words, max 40 characters per word.", [s.fbt._param("max number of permitted terms allowed", 15)], {
						hk: "1KHCuZ"
					}), d.a.createElement("br", null), s.fbt._("For partial matching, use {=*} at the beginning, end, or both, of each word (e.g. {=cat*} or {=*cat*}).", [s.fbt._param("=*", d.a.createElement("code", {
						className: dt
					}, s.fbt._("*", null, {
						hk: "Wnqau"
					}))), s.fbt._param("=cat*", d.a.createElement("code", {
						className: dt
					}, s.fbt._("cat*", null, {
						hk: "2O2QaG"
					}))), s.fbt._param("=*cat*", d.a.createElement("code", {
						className: dt
					}, s.fbt._("*cat*", null, {
						hk: "1eioPg"
					})))], {
						hk: "3YBkp0"
					})), d.a.createElement(rt, {
						errors: [],
						onChange: n,
						strings: t,
						maxWords: 15
					}))
				};
			var mt = n("./src/reddit/components/ModHub/ContentControls/FormSections/HatefulContentFilters/index.m.less"),
				ut = n.n(mt);

			function ht(e) {
				const {
					formState: t,
					onChange: n
				} = e, i = tt.some(e => t.hatefulContentFilters[e.name] !== O.a.Off);
				return d.a.createElement("fieldset", null, d.a.createElement("legend", {
					className: ut.a.title
				}, s.fbt._("Automated Filtering", null, {
					hk: "18gDSg"
				})), d.a.createElement("div", {
					className: ut.a.options
				}, tt.map(e => {
					const s = t.hatefulContentFilters[e.name];
					return d.a.createElement(et, {
						className: ut.a.filter,
						key: e.name,
						currentLevel: s,
						name: e.name,
						title: e.title,
						descriptions: e.descriptions,
						onChange: s => n({
							...t,
							hatefulContentFilters: {
								...t.hatefulContentFilters,
								[e.name]: s
							}
						})
					})
				})), i && d.a.createElement(ct, {
					value: t.hatefulContentFilters.permittedTerms,
					onChange: e => n({
						...t,
						hatefulContentFilters: {
							...t.hatefulContentFilters,
							permittedTerms: e
						}
					})
				}))
			}
			var gt = n("./src/reddit/components/CharacterCountdown/index.tsx");
			const bt = e => e.split(/[,;\s]/).filter(Boolean),
				pt = e => e.join(", "),
				ft = e => pt(bt(e)),
				xt = ["i.redd.it", "v.redd.it"],
				Ct = /^(?:[\w-]+\.)+[\w]+$/,
				yt = e => xt.includes(e.toLowerCase());
			var kt = e => {
					const t = bt(e),
						n = [],
						i = t.find(e => !(e => Ct.test(e))(e));
					return i && n.push(s.fbt._('Invalid domain: "{domainName}"', [s.fbt._param("domainName", i)], {
						hk: "l57pV"
					})), t.some(yt) && n.push(s.fbt._("Domains cannot include reddit hosted content.", null, {
						hk: "JUxdH"
					})), n
				},
				St = n("./node_modules/lodash/mapValues.js"),
				Et = n.n(St);
			const vt = (e, t) => {
					const n = new Set(me(e)),
						i = me(t).find(e => n.has(e));
					return i ? [s.fbt._('Word "{word}" is required and banned at the same time', [s.fbt._param("word", i)], {
						hk: "2Hyh3c"
					}).toString()] : []
				},
				Rt = (e, t) => {
					if (!t) return [];
					const n = e.find(e => e.length > t);
					return n ? [s.fbt._('Word "{word}" is longer than maximum title length', [s.fbt._param("word", n)], {
						hk: "48duSv"
					}).toString()] : []
				},
				_t = e => {
					const t = e.titleRequiredStrings.enabled ? e.titleRequiredStrings.strings : [];
					return {
						blacklistedStrings: e.titleBlacklistedStrings.enabled ? e.titleBlacklistedStrings.strings : [],
						maxTitleLength: e.titleLength.enabled ? e.titleLength.max : null,
						requiredStrings: t
					}
				},
				qt = e => {
					const {
						bodyRequirement: t,
						bodyRequiredStrings: n,
						bodyBlacklistedStrings: s
					} = e, i = t.restrictionPolicy !== v.a.NotAllowed, o = t.restrictionPolicy === v.a.Required;
					return vt(o && n.enabled ? n.strings : [], i && s.enabled ? s.strings : [])
				},
				Tt = qt,
				wt = e => Et()(e, e => ({
					...e
				})),
				Bt = (e, t) => {
					const n = t.filter(Boolean);
					return 1 === n.length ? n[0] : null
				},
				Lt = (e, t) => {
					if (!t.length) return e;
					const n = wt(e);
					return t.forEach(e => {
						switch (e.field) {
							case "titleRegexes":
							case "bodyRegexes": {
								const t = n[e.field];
								t.serverErrors.push({
									regex: Bt(e.message, t.regexes),
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
				Nt = e => e.enabled && !e.guidelineText.trim() ? [s.fbt._("Guideline text cannot be empty", null, {
					hk: "4pncO7"
				})] : [],
				Ft = e => {
					const t = wt(e);
					return t.guidelines.clientErrors = Nt(t.guidelines), t.linkDomains.clientErrors = kt(t.linkDomains.domainsText), t.titleLength.clientErrors = (e => {
						let {
							min: t,
							max: n
						} = e;
						return ue({
							min: t,
							max: n,
							minLimit: D,
							maxLimit: j
						})
					})(t.titleLength), t.bodyBlacklistedStrings.clientErrors = Tt(t), t.bodyRequiredStrings.clientErrors = qt(t), t.titleBlacklistedStrings.clientErrors = (e => {
						const t = _t(e);
						return [...vt(t.requiredStrings, t.blacklistedStrings), ...Rt(t.blacklistedStrings, t.maxTitleLength)]
					})(t), t.titleRequiredStrings.clientErrors = (e => {
						const t = _t(e);
						return [...vt(t.requiredStrings, t.blacklistedStrings), ...Rt(t.requiredStrings, t.maxTitleLength)]
					})(t), t
				},
				Mt = e => Object.keys(e).some(t => {
					if ("hatefulContentFilters" === t) return !1;
					const n = e[t];
					return n.enabled && !(a()(n.clientErrors) && a()(n.serverErrors))
				});
			class Ot extends d.a.Component {
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
								clientErrors: Nt({
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
						} = this.props.formState, t = ft(e.domainsText), n = kt(t);
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
						} = this.props, n = de(e.target.value, 1, H);
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
						isLoading: t,
						isPostGuidanceModEnabled: n
					} = this.props, i = e.linkDomains.serverErrors.length ? e.linkDomains.serverErrors : e.linkDomains.clientErrors;
					return d.a.createElement("fieldset", null, d.a.createElement("legend", {
						className: Ce.a.sectionLegend
					}, s.fbt._("Post Requirements", null, {
						hk: "Yno2m"
					})), d.a.createElement(ye, {
						on: e.guidelines.enabled,
						onClick: this.onToggleGuidelines,
						label: s.fbt._("Provide members with posting guidelines", null, {
							hk: "27m4c8"
						}),
						subtext: s.fbt._("Posting guidelines let people who are new to your community or posting for the first time know what your expectations are. If you have specific flair or formatting requirements for posts, this is the place to make it clear what you’d like.", null, {
							hk: "3wSHr6"
						})
					}), e.guidelines.enabled && d.a.createElement(le, {
						label: s.fbt._("Guideline text", null, {
							hk: "1tfXjx"
						})
					}, d.a.createElement("textarea", {
						"aria-invalid": !!e.guidelines.clientErrors.length,
						className: Ce.a.textarea,
						maxLength: I,
						onChange: this.onGuidelineTextChange,
						placeholder: s.fbt._("Example: Only make post about dogs", null, {
							hk: "3ZbLuW"
						}),
						required: !0,
						value: e.guidelines.guidelineText
					}), e.guidelines.clientErrors.length ? d.a.createElement(te.a, {
						messages: e.guidelines.clientErrors
					}) : d.a.createElement(gt.a, {
						className: Ce.a.characterCountdown,
						maxChars: I,
						text: e.guidelines.guidelineText
					})), !n && d.a.createElement(ye, {
						on: e.titleRequiredStrings.enabled,
						onClick: this.onToggleTitleRequiredStrings,
						label: s.fbt._("Require words in the post title", null, {
							hk: "4oCfRM"
						}),
						subtext: s.fbt._("Posts without these words in the title can’t be submitted. (Choose up to 15 words, 40 characters each.)", null, {
							hk: "4i9wtv"
						})
					}), !n && e.titleRequiredStrings.enabled && d.a.createElement(le, {
						label: s.fbt._("Add required words", null, {
							hk: "22VjqJ"
						})
					}, d.a.createElement(rt, {
						errors: e.titleRequiredStrings.clientErrors,
						onChange: this.onTitleRequiredStringsChange,
						strings: e.titleRequiredStrings.strings
					})), !n && d.a.createElement(ke, null, d.a.createElement(ye, {
						on: e.titleBlacklistedStrings.enabled,
						onClick: this.onToggleTitleBlacklistedStrings,
						label: s.fbt._("Ban words from the post title", null, {
							hk: "4097Ur"
						}),
						subtext: s.fbt._("Posts with these words in the title can’t be submitted. (Choose up to 15 words, 40 characters each.)", null, {
							hk: "3SobVK"
						})
					}), e.titleBlacklistedStrings.enabled && d.a.createElement(le, {
						label: s.fbt._("Add banned words", null, {
							hk: "ZUXyb"
						})
					}, d.a.createElement(rt, {
						errors: e.titleBlacklistedStrings.clientErrors,
						onChange: this.onTitleBlacklistedStringsChange,
						strings: e.titleBlacklistedStrings.strings
					}))), !n && e.bodyRequirement.restrictionPolicy === v.a.Required && d.a.createElement(ke, null, d.a.createElement(ye, {
						on: e.bodyRequiredStrings.enabled,
						onClick: this.onToggleBodyRequiredStrings,
						label: s.fbt._("Require words in the post body", null, {
							hk: "9gXSe"
						}),
						subtext: s.fbt._("Posts without these words in the body can’t be submitted. (Choose up to 15 words of 40 characters each)", null, {
							hk: "1uTriP"
						})
					}), e.bodyRequiredStrings.enabled && d.a.createElement(le, {
						label: s.fbt._("Add required words", null, {
							hk: "1GP0o4"
						})
					}, d.a.createElement(rt, {
						errors: e.bodyRequiredStrings.clientErrors,
						onChange: this.onBodyRequiredStringsChange,
						strings: e.bodyRequiredStrings.strings
					}))), !n && e.bodyRequirement.restrictionPolicy !== v.a.NotAllowed && d.a.createElement(ke, null, d.a.createElement(ye, {
						on: e.bodyBlacklistedStrings.enabled,
						onClick: this.onToggleBodyBlacklistedStrings,
						label: s.fbt._("Ban words from the post body", null, {
							hk: "3FfELu"
						}),
						subtext: s.fbt._("Posts with these words in the body can’t be submitted. (Choose up to 15 words, 40 characters each.)", null, {
							hk: "2iKz0x"
						})
					}), e.bodyBlacklistedStrings.enabled && d.a.createElement(le, {
						label: s.fbt._("Add banned words", null, {
							hk: "2VC0jp"
						})
					}, d.a.createElement(rt, {
						errors: e.bodyBlacklistedStrings.clientErrors,
						onChange: this.onBodyBlacklistedStringsChange,
						strings: e.bodyBlacklistedStrings.strings
					}))), d.a.createElement(ye, {
						on: e.linkDomains.enabled,
						onClick: this.onToggleLinkDomains,
						label: s.fbt._("Require or ban links from specific domains", null, {
							hk: "eWD5S"
						}),
						subtext: s.fbt._("Posts with links that don’t fit your requirements can’t be submitted.", null, {
							hk: "3CIqYb"
						})
					}), e.linkDomains.enabled && d.a.createElement(d.a.Fragment, null, d.a.createElement(le, {
						label: s.fbt._("Restriction type", null, {
							hk: "2gcn9B"
						})
					}, d.a.createElement(se.a, {
						value: e.linkDomains.restrictionPolicy,
						name: "restrictionType",
						onChange: this.onRestrictionPolicyChange
					}, d.a.createElement(ie.a, {
						className: Ce.a.radioOption,
						showButton: !0,
						value: v.b.Whitelist
					}, s.fbt._("Required domains", null, {
						hk: "1gV6ik"
					})), d.a.createElement(ie.a, {
						className: Ce.a.radioOption,
						showButton: !0,
						value: v.b.Blacklist
					}, s.fbt._("Blocked domains", null, {
						hk: "oJmGD"
					})))), d.a.createElement(le, {
						label: e.linkDomains.restrictionPolicy === v.b.Whitelist ? s.fbt._("Only allow link posts with these domains", null, {
							hk: "14eotU"
						}) : s.fbt._("Block link posts with these domains", null, {
							hk: "Plgix"
						})
					}, d.a.createElement("textarea", {
						"aria-invalid": !!i.length,
						className: Ce.a.domainsTextarea,
						maxLength: A,
						onBlur: this.onLinkDomainsBlur,
						onChange: this.onLinkDomainsTextChange,
						placeholder: s.fbt._("Example: website.com", null, {
							hk: "4uJFu4"
						}),
						required: !0,
						spellCheck: !1,
						value: e.linkDomains.domainsText
					}), d.a.createElement(te.a, {
						messages: i
					}))), d.a.createElement(ye, {
						on: e.repostFrequency.enabled,
						onClick: this.onToggleRepostFrequency,
						label: s.fbt._("Restrict how often the same link can be posted", null, {
							hk: "3efm95"
						}),
						subtext: s.fbt._("Posts that have a link that has already been posted to your community can only be submitted within the number of days you select.", null, {
							hk: "1xLaYI"
						})
					}), e.repostFrequency.enabled && d.a.createElement(ne.b, {
						className: Ce.a.repostFrequencyInput,
						disabled: t,
						label: s.fbt._("number of days", null, {
							hk: "1sPFop"
						}),
						max: H,
						min: 1,
						onChange: this.onRepostFrequencyChange,
						type: "number",
						value: ce(e.repostFrequency.days)
					}))
				}
			}

			function Pt() {
				return (Pt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Dt = Object(m.c)({
				hatefulContentFiltersEnabled: Y.d.hatefulContentFiltersEnabled,
				isPostGuidanceModEnabled: $.b
			});
			var jt = Object(c.b)(Dt)(e => d.a.createElement(d.a.Fragment, null, (e => [...e.hatefulContentFiltersEnabled ? [ht] : [], Ot, Re])(e).map((t, n) => d.a.createElement(t, Pt({
					key: n
				}, e))))),
				It = e => {
					const {
						bodyBlacklistedStrings: t,
						bodyRegexes: n,
						bodyRequiredStrings: s,
						bodyRestrictionPolicy: i,
						domainBlacklist: o,
						domainWhitelist: r,
						guidelinesText: a,
						isFlairRequired: l,
						linkRepostAge: d,
						linkRestrictionPolicy: c,
						titleBlacklistedStrings: m,
						titleRegexes: u,
						titleRequiredStrings: h,
						titleTextMaxLength: g,
						titleTextMinLength: b
					} = e.postRequirements;
					return {
						...K,
						hatefulContentFilters: e.hatefulContentFilters,
						guidelines: {
							enabled: !(!a || !a.trim()),
							guidelineText: a || "",
							clientErrors: []
						},
						titleRequiredStrings: {
							enabled: !!h.length,
							strings: h,
							clientErrors: []
						},
						titleBlacklistedStrings: {
							enabled: !!m.length,
							strings: m,
							clientErrors: []
						},
						titleLength: {
							enabled: null !== b || null !== g,
							min: b,
							max: g,
							clientErrors: []
						},
						bodyRequirement: {
							enabled: !0,
							restrictionPolicy: i
						},
						...i !== v.a.NotAllowed ? {
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
							enabled: c !== v.b.None,
							restrictionPolicy: c === v.b.None ? v.b.Whitelist : c,
							domainsText: c !== v.b.None ? pt(c === v.b.Whitelist ? r : o) : "",
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
			const Ht = {
					bodyBlacklistedStrings: [],
					bodyRegexes: [],
					bodyRequiredStrings: [],
					bodyRestrictionPolicy: v.a.None,
					domainBlacklist: [],
					domainWhitelist: [],
					guidelinesText: null,
					isFlairRequired: !1,
					linkRepostAge: null,
					linkRestrictionPolicy: v.b.None,
					titleBlacklistedStrings: [],
					titleRegexes: [],
					titleRequiredStrings: [],
					titleTextMaxLength: null,
					titleTextMinLength: null
				},
				At = e => e.filter(e => !!e);
			var Wt = e => {
					const t = {
							...Ht,
							bodyRestrictionPolicy: e.bodyRequirement.restrictionPolicy,
							guidelinesText: e.guidelines.enabled ? e.guidelines.guidelineText : null,
							isFlairRequired: e.flairRequirement.enabled,
							linkRepostAge: e.repostFrequency.enabled ? e.repostFrequency.days : null,
							linkRestrictionPolicy: e.linkDomains.enabled ? e.linkDomains.restrictionPolicy : v.b.None,
							titleBlacklistedStrings: e.titleBlacklistedStrings.enabled ? e.titleBlacklistedStrings.strings : [],
							titleRegexes: e.titleRegexes.enabled ? At(e.titleRegexes.regexes) : [],
							titleRequiredStrings: e.titleRequiredStrings.enabled ? e.titleRequiredStrings.strings : [],
							titleTextMaxLength: e.titleLength.enabled ? e.titleLength.max : null,
							titleTextMinLength: e.titleLength.enabled ? e.titleLength.min : null
						},
						n = e.bodyRequirement.restrictionPolicy !== v.a.NotAllowed,
						s = e.bodyRequirement.restrictionPolicy === v.a.Required;
					if (n && (t.bodyBlacklistedStrings = e.bodyBlacklistedStrings.enabled ? e.bodyBlacklistedStrings.strings : [], t.bodyRequiredStrings = s && e.bodyRequiredStrings.enabled ? e.bodyRequiredStrings.strings : [], t.bodyRegexes = e.bodyRegexes.enabled ? At(e.bodyRegexes.regexes) : []), e.linkDomains.enabled) {
						const n = bt(e.linkDomains.domainsText);
						e.linkDomains.restrictionPolicy === v.b.Whitelist ? t.domainWhitelist = n : e.linkDomains.restrictionPolicy === v.b.Blacklist && (t.domainBlacklist = n)
					}
					return t
				},
				Ut = n("./node_modules/lodash/isEqual.js"),
				Gt = n.n(Ut),
				Kt = (e, t) => {
					if (Gt()(e, t)) return {
						hatefulContentFilters: {},
						postRequirements: {}
					};
					const n = Wt(e),
						s = Wt(t),
						i = E()(n, (e, t) => Gt()(e, s[t])),
						o = {};
					return Object.keys(t.hatefulContentFilters).forEach(n => {
						const s = t.hatefulContentFilters[n],
							i = e.hatefulContentFilters[n];
						Gt()(s, i) || (o[n] = i)
					}), {
						hatefulContentFilters: o,
						postRequirements: i
					}
				},
				Vt = n("./src/telemetry/models/Event.ts");
			const Zt = (e, t) => n => ({
					source: Vt.f.CommunitySettings,
					action: Vt.d.Save,
					noun: Vt.e.HarassmentControlLevel,
					setting: {
						value: `${e}`,
						oldValue: `${t}`
					},
					subreddit: Object(R.lb)(n),
					...Object(R.o)(n)
				}),
				zt = "PostReq-discard-confirmation",
				Jt = 150,
				Qt = Object(m.c)({
					allowNavigationCallback: F.a,
					isDiscardModalOpen: Object(B.b)(zt),
					isLoading: L.a,
					contentControls: L.b,
					isInShredditModNavExperiment: e => Object(N.a)(e, !0)
				}),
				Xt = Object(c.b)(Qt, (e, t) => ({
					closeAllModals: () => e(Object(g.f)()),
					onSave: n => e(Object(h.b)(t.subredditName, n)),
					toggleModal: t => e(Object(g.i)(t))
				}));
			class Yt extends d.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.formBodyRef = d.a.createRef(), this.isUnmounted = !1, this.resetPendingNavigation = () => {
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
						const s = Ft(this.state.formState);
						if (Mt(s)) return void this.setState({
							formState: s
						}, this.focusErrorField);
						const {
							postRequirements: i,
							hatefulContentFilters: o
						} = Kt(s, n);
						if (a()(i) && a()(o)) return;
						this.setState({
							isSavePending: !0
						}), !a()(o) && o.hatefulContentThresholdAbuse && t(Zt(o.hatefulContentThresholdAbuse, this.state.initialFormState.hatefulContentFilters.hatefulContentThresholdAbuse));
						const r = await this.props.onSave({
							hatefulContentFilters: o,
							postRequirements: i
						});
						if (!this.isUnmounted)
							if (this.setState({
									isSavePending: !1
								}), r.success) this.props.sendEvent(w(Wt(s))), this.setState({
								formState: s,
								initialFormState: s,
								hasJustSaved: !0
							});
							else if (r.errors) {
							const e = Lt(s, r.errors);
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
								hatefulContentFilters: s,
								postRequirements: i
							} = Kt(t, n), o = !a()(s) || !a()(i);
							return o !== e.hasUnsavedChanges ? {
								hasUnsavedChanges: o
							} : null
						})
					}, 200, {
						maxWait: 500
					}), this.focusErrorField = () => {
						const e = this.formBodyRef.current.querySelector('[aria-invalid="true"]');
						e instanceof HTMLElement && (e.focus(), e.getBoundingClientRect().top < Jt && (e.scrollIntoView(), window.scroll(0, window.scrollY - Jt)))
					}, this.onFormFieldBlur = () => {
						this.updateHasUnsavedChanges(), this.updateHasUnsavedChanges.flush()
					}, this.onSaveClick = () => {
						this.saveFormState()
					}, this.onDiscardUnsavedChangesConfirmed = () => {
						this.performPendingNavigationIfNeeded()
					}, this.onCloseModal = () => {
						this.props.closeAllModals(), this.resetPendingNavigation()
					}, this.onFormStateChange = function(e) {
						let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
						t.setState(t => {
							let s = {
								...t.formState,
								...e
							};
							return n && (s = Ft(s)), {
								formState: s,
								hasJustSaved: !1
							}
						})
					};
					const n = e.contentControls ? It(e.contentControls) : K;
					this.state = {
						areContentControlsLoaded: !!e.contentControls,
						formState: n,
						hasJustSaved: !1,
						hasUnsavedChanges: !1,
						initialFormState: n,
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
						const e = It(n);
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
						isLoading: t,
						isInShredditModNavExperiment: n
					} = this.props, {
						areContentControlsLoaded: i,
						hasUnsavedChanges: o
					} = e;
					return d.a.createElement("div", {
						className: Ce.a.container
					}, d.a.createElement(x.c, {
						className: Object(u.a)(Ce.a.topBar, n && "fixed bg-neutral-background", {
							[Ce.a.default]: !n
						})
					}, d.a.createElement(y.l, {
						disabled: t || !o,
						onClick: this.onSaveClick
					}, e.hasJustSaved ? s.fbt._("Saved", null, {
						hk: "2dBH1t"
					}) : e.isSavePending ? d.a.createElement(k.a, {
						className: Ce.a.loadingIcon,
						sizePx: 10
					}) : s.fbt._("Save changes", null, {
						hk: "1bM6H4"
					}))), d.a.createElement(x.a, {
						className: Ce.a.contentContainer
					}, d.a.createElement(x.b, null, s.fbt._("Content controls", null, {
						hk: "1sol1u"
					}), d.a.createElement(f.a, {
						linkUrl: P
					})), d.a.createElement("div", {
						className: Ce.a.pageDetailText
					}, s.fbt._("Set requirements and restrictions for how people post and comment in your community", null, {
						hk: "48UaB4"
					})), i ? d.a.createElement("div", {
						className: Ce.a.formBody,
						onBlur: this.onFormFieldBlur,
						ref: this.formBodyRef
					}, d.a.createElement(jt, {
						formState: this.state.formState,
						isLoading: t,
						onChange: this.onFormStateChange
					})) : d.a.createElement(X, {
						isLoading: t
					})), d.a.createElement(b.a, {
						blockOnBeforeUnload: !0,
						dialogId: zt,
						enabled: o
					}), this.props.isDiscardModalOpen && d.a.createElement(p.a, {
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
			t.default = Xt(Object(C.c)(Yt))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModHub-ContentControls.bbaa5ea7b2ad54932e29.js.map