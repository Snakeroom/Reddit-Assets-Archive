// https://www.redditstatic.com/desktop2x/reddit-components-ModHub-PostRequirements.73b51199b2fa50def0a3.js
// Retrieved at 3/16/2020, 6:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModHub-PostRequirements"], {
		"./src/reddit/components/BlockNavigation/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				o = n("./src/reddit/actions/modal.ts");
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
							dialogId: r
						} = this.props;
						return !(!n || e.pathname !== s.pathname) || (r && i(), !1)
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
					return i.a.createElement(a.b, {
						message: this.message,
						when: e
					})
				}
			}
			t.a = Object(r.b)(null, (e, t) => ({
				showModal: () => e(Object(o.h)(t.dialogId))
			}))(Object(a.i)(d))
		},
		"./src/reddit/components/ModHub/PostRequirements/ExperimentalWarning/index.m.less": function(e, t, n) {
			e.exports = {
				container: "tOgWYyLMKsdhQTgibBFPq",
				icon: "_2WZP5eFqFOt5lKBiryg7bf"
			}
		},
		"./src/reddit/components/ModHub/PostRequirements/FormPlaceholder/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_26QbsLXJCM9nhMCYYHK1hm",
				section: "_wNy7GtSLN6952OcTgdtu",
				sectionTitle: "_3rQtfyw1iarE1M82sgJtmr",
				line: "_1gQORQjYCODB7ALLENCatm",
				sectionBodyRow: "_1Ddqyl5B6UwCfefEA5O_0H"
			}
		},
		"./src/reddit/components/ModHub/PostRequirements/LabeledControl/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1V9PYnJ8RmuOiSbRk3WbSs",
				labelText: "_2JfUBmgk1skgAdhCcH1_gX"
			}
		},
		"./src/reddit/components/ModHub/PostRequirements/MinMaxInput/index.m.less": function(e, t, n) {
			e.exports = {
				maxInput: "_17nKLWjcL1n_HnKVHJZXvx",
				minInput: "_1KvJAf9ahO9CayGPALiod-",
				errorMessages: "_3tjvkXhGM-bzjHkXYQh6do"
			}
		},
		"./src/reddit/components/ModHub/PostRequirements/MultiStringsInput/index.m.less": function(e, t, n) {
			e.exports = {
				control: "_3FWbf4ZX9cEB8zJ4XtobY4",
				wordsCountdown: "_3XUXdRXUNaAdfhHb5br1yI"
			}
		},
		"./src/reddit/components/ModHub/PostRequirements/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2ENgUMuUMqeQPvwRZMpU_o",
				topBar: "_2q_D2-UMtaaNzEbpWYvSiz",
				pageDetailText: "_3LkqU8WCjvjpyLQsqJMnXc",
				contentContainer: "_3jkOB3Eli5osHFVU2P-aT2",
				formBody: "_3MU3K5dkqHvuqm5XJLAPo5",
				toggleSetting: "_1eisT1cCAj1y7sgVIPgF24",
				characterCountdown: "_30XBnjFMzGZLHo9PCCWFDE",
				multipleInput: "_3ZAk7m7FqeeWYNcF6cAu7e",
				repostFrequencyInput: "_2_7epmrUbTPw9Cghrl1L3x",
				sectionLegend: "_1NZLVNQxmcOnsjYQDV-2fb",
				bodyRestrictionSetting: "_2Q_kTY-70ZB3EUSZyGm_in",
				radioOption: "_3URbiG4h80-15bxYv8WpQj",
				textarea: "Y0qpB_aFql-FqwkGtbWCI",
				domainsTextarea: "APYMQGCMUIdUO--TK4FkT",
				externalLink: "_1jVWLYoDggtpbqPGQbchAY",
				loadingIcon: "_1CThyJZyqIA7SUmDqkr-s8"
			}
		},
		"./src/reddit/components/ModHub/PostRequirements/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/lodash/debounce.js"),
				i = n.n(s),
				r = n("./node_modules/lodash/isEmpty.js"),
				a = n.n(r),
				o = n("./node_modules/react/index.js"),
				l = n.n(o),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				m = n("./src/reddit/actions/modal.ts"),
				g = n("./src/reddit/actions/postRequirements/index.ts"),
				u = n("./src/reddit/components/BlockNavigation/index.tsx"),
				h = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				b = n("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				p = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				x = n("./src/reddit/components/TrackingHelper/index.tsx"),
				y = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				R = n("./node_modules/lodash/omitBy.js"),
				S = n.n(R),
				E = n("./src/reddit/models/PostRequirements/index.ts"),
				O = n("./src/reddit/selectors/telemetry.ts"),
				q = n("./src/telemetry/models/PostRequirement.ts");
			const j = {
					[E.a.None]: q.BodyRestrictionPolicy.Optional,
					[E.a.NotAllowed]: q.BodyRestrictionPolicy.Disabled,
					[E.a.Required]: q.BodyRestrictionPolicy.Required
				},
				k = e => {
					const t = {
						bodyBlacklistedStrings: e.bodyBlacklistedStrings,
						bodyRegexPatterns: e.bodyRegexes,
						bodyRequiredStrings: e.bodyRequiredStrings,
						bodyRestrictionPolicy: j[e.bodyRestrictionPolicy],
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
					return S()(t, e => Array.isArray(e) && !e.length)
				},
				C = e => t => Object.assign({
					source: "post_requirements",
					action: "save",
					noun: "settings"
				}, O.defaults(t), {
					postRequirement: k(e),
					subreddit: O.subreddit(t),
					userSubreddit: O.userSubreddit(t)
				});
			var v = n("./src/reddit/i18n/utils.ts"),
				B = n("./src/reddit/selectors/activeModalId.ts"),
				L = n("./src/reddit/selectors/platform.ts"),
				T = n("./src/reddit/selectors/postRequirements.ts"),
				w = n("./src/config.ts");
			const P = "".concat(w.a.redditHelpUrl.modHelpCenter, "hc/en-us/articles/360010322091"),
				N = 15,
				_ = 40,
				M = {
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
						restrictionPolicy: E.a.None
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
						restrictionPolicy: E.b.Whitelist,
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
					}
				};
			var F = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				D = n("./src/reddit/constants/colors.ts"),
				I = n("./src/reddit/icons/fonts/Info/index.tsx"),
				A = n("./src/reddit/components/ModHub/PostRequirements/ExperimentalWarning/index.m.less"),
				U = n.n(A),
				H = () => l.a.createElement(F.a, {
					className: U.a.container,
					color: D.a.notice,
					icon: l.a.createElement(I.a, {
						className: U.a.icon
					}),
					subtitle: Object(v.c)("This feature is experimental and only works for users posting on the redesign"),
					title: Object(v.c)("This feature is experimental")
				}),
				W = n("./node_modules/lodash/times.js"),
				Y = n.n(W),
				G = n("./src/lib/classNames/index.ts"),
				J = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				Q = n("./src/reddit/components/ModHub/PostRequirements/FormPlaceholder/index.m.less"),
				X = n.n(Q);
			var V = e => {
					let {
						isLoading: t
					} = e;
					return o.createElement("div", {
						className: Object(G.a)(X.a.container, Object(J.a)({
							isLoading: !1
						}))
					}, Y()(3).map(e => o.createElement("div", {
						key: e,
						className: X.a.section
					}, o.createElement("div", {
						className: Object(G.a)(X.a.sectionTitle, Object(J.b)({
							isLoading: t
						}))
					}), o.createElement("div", {
						className: X.a.line
					}), Y()(2).map(e => o.createElement("div", {
						key: e,
						className: Object(G.a)(X.a.sectionBodyRow, Object(J.b)({
							isLoading: t
						}))
					})))))
				},
				K = n("./src/reddit/controls/ErrorText/index.tsx"),
				Z = n("./src/reddit/controls/FormFields/index.tsx"),
				z = n("./src/reddit/components/ModHub/PostRequirements/LabeledControl/index.m.less"),
				$ = n.n(z);
			const ee = e => e.preventDefault();
			var te = e => l.a.createElement("div", {
					className: Object(G.a)(e.className, $.a.container)
				}, l.a.createElement("label", {
					className: $.a.label,
					onClick: ee
				}, l.a.createElement("div", {
					className: $.a.labelText
				}, e.label), e.children)),
				ne = n("./src/lib/lessComponent.tsx"),
				se = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				ie = n("./src/reddit/featureFlags/component.tsx"),
				re = n("./src/reddit/components/ModHub/PostRequirements/index.m.less"),
				ae = n.n(re);
			const oe = ne.a.wrapped(se.n, "toggleSetting", ae.a),
				le = Object(ie.a)("newPostRequirements", l.a.Fragment),
				de = l.a.createElement("a", {
					className: ae.a.externalLink,
					href: "https://docs.python.org/2/library/re.html#regular-expression-syntax",
					target: "_blank"
				}, Object(v.c)("Python RegEx syntax")),
				ce = e => e.regexes.map(t => {
					const n = e.serverErrors.find(e => e.regex === t);
					return n ? n.message : ""
				}),
				me = e => e.serverErrors.filter(e => null === e.regex).map(e => e.message);
			var ge = class extends l.a.Component {
					constructor() {
						super(...arguments), this.onToggleTitleRegex = () => {
							const {
								titleRegexes: e
							} = this.props.formState;
							this.props.onChange({
								titleRegexes: Object.assign({}, e, {
									enabled: !e.enabled
								})
							})
						}, this.onToggleBodyRegex = () => {
							const {
								bodyRegexes: e
							} = this.props.formState;
							this.props.onChange({
								bodyRegexes: Object.assign({}, e, {
									enabled: !e.enabled
								})
							})
						}, this.onTitleRegexChange = e => {
							const {
								titleRegexes: t
							} = this.props.formState;
							this.props.onChange({
								titleRegexes: Object.assign({}, t, {
									regexes: e,
									serverErrors: []
								})
							})
						}, this.onBodyRegexChange = e => {
							const {
								bodyRegexes: t
							} = this.props.formState;
							this.props.onChange({
								bodyRegexes: Object.assign({}, t, {
									regexes: e,
									serverErrors: []
								})
							})
						}
					}
					render() {
						const {
							formState: e
						} = this.props, t = e.bodyRequirement.restrictionPolicy === E.a.NotAllowed;
						return l.a.createElement("fieldset", null, l.a.createElement("legend", {
							className: ae.a.sectionLegend
						}, Object(v.c)("Advanced tools")), l.a.createElement(oe, {
							on: e.titleRegexes.enabled,
							onClick: this.onToggleTitleRegex,
							label: Object(v.c)("Title text RegEx requirements"),
							subtext: l.a.createElement(l.a.Fragment, null, Object(v.c)("Use regular expressions for more advanced title matching. These use the "), de)
						}), e.titleRegexes.enabled && l.a.createElement(te, {
							label: Object(v.c)("Title must match one of:")
						}, l.a.createElement(Z.d, {
							className: ae.a.multipleInput,
							disabled: !1,
							errors: ce(e.titleRegexes),
							values: e.titleRegexes.regexes,
							onChange: this.onTitleRegexChange,
							maxLength: 5,
							addValueText: Object(v.c)("Add regex")
						}), l.a.createElement(K.a, {
							messages: me(e.titleRegexes)
						})), l.a.createElement(le, null, l.a.createElement(oe, {
							disabled: t,
							on: e.bodyRegexes.enabled,
							onClick: this.onToggleBodyRegex,
							label: Object(v.c)("Body text RegEx requirements"),
							subtext: l.a.createElement(l.a.Fragment, null, Object(v.c)("Use regular expressions for more advanced body text matching. These use the "), de)
						}), !t && e.bodyRegexes.enabled && l.a.createElement(te, {
							label: Object(v.c)("Body must match one of:")
						}, l.a.createElement(Z.d, {
							className: ae.a.multipleInput,
							disabled: !1,
							errors: ce(e.bodyRegexes),
							values: e.bodyRegexes.regexes,
							onChange: this.onBodyRegexChange,
							maxLength: 5,
							addValueText: Object(v.c)("Add regex")
						}), l.a.createElement(K.a, {
							messages: me(e.bodyRegexes)
						}))))
					}
				},
				ue = n("./node_modules/fbt/lib/FbtPublic.js"),
				he = class extends l.a.Component {
					constructor() {
						super(...arguments), this.onToggleFlairRequirement = () => {
							const {
								formState: e
							} = this.props;
							this.props.onChange({
								flairRequirement: Object.assign({}, e.flairRequirement, {
									enabled: !e.flairRequirement.enabled
								})
							})
						}
					}
					render() {
						const {
							formState: e
						} = this.props;
						return l.a.createElement("fieldset", null, l.a.createElement("legend", {
							className: ae.a.sectionLegend
						}, Object(v.c)("Post flair")), l.a.createElement(oe, {
							on: e.flairRequirement.enabled,
							onClick: this.onToggleFlairRequirement,
							label: Object(v.c)("Require post flair"),
							subtext: ue.fbt._("All posts must have a post flair attached to the post. Note that this requirement is ignored if subreddit doesn't have flairs available for users to select.", null, {
								hk: "KxyFE"
							})
						}))
					}
				},
				be = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				pe = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/lodash/mapValues.js")),
				xe = n.n(pe);
			n("./node_modules/core-js/modules/es6.regexp.split.js");
			const ye = e => e.split(/[,;\s]/).filter(Boolean),
				fe = e => e.join(", "),
				Re = ["i.redd.it", "v.redd.it"],
				Se = /^(?:[\w-]+\.)+[\w]+$/,
				Ee = e => Re.includes(e.toLowerCase());
			var Oe = e => {
					const t = ye(e),
						n = [],
						s = t.find(e => !(e => Se.test(e))(e));
					return s && n.push(Object(v.c)('Invalid domain: "'.concat(Object(v.b)("domainName", s), '"'))), t.some(Ee) && n.push(Object(v.c)("Domains cannot include reddit hosted content.")), n
				},
				qe = e => {
					const {
						min: t,
						max: n,
						minLimit: s,
						maxLimit: i
					} = e, r = [];
					return null !== t && (t < s || t > i) && r.push({
						field: "min",
						message: Object(v.c)("Minimum must be between ".concat(Object(v.b)("min", s), " and ").concat(Object(v.b)("max", i)))
					}), null !== n && (n < s || n > i) && r.push({
						field: "max",
						message: Object(v.c)("Maximum must be between ".concat(Object(v.b)("min", s), " and ").concat(Object(v.b)("max", i)))
					}), !r.length && null !== t && null !== n && t > n && r.push({
						field: "both",
						message: Object(v.c)("Maximum must be greater than or equal to minimum")
					}), r
				};
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			const je = e => null !== e ? e.toString() : "",
				ke = e => e.map(e => e.trim().toLowerCase()).filter(Boolean),
				Ce = (e, t) => {
					const n = new Set(ke(e)),
						s = ke(t).find(e => n.has(e));
					return s ? [ue.fbt._('Word "{word}" is required and banned at the same time', [ue.fbt._param("word", s)], {
						hk: "2Hyh3c"
					}).toString()] : []
				},
				ve = (e, t) => {
					if (!t) return [];
					const n = e.find(e => e.length > t);
					return n ? [ue.fbt._('Word "{word}" is longer than maximum title length', [ue.fbt._param("word", n)], {
						hk: "48duSv"
					}).toString()] : []
				},
				Be = e => {
					const t = e.titleRequiredStrings.enabled ? e.titleRequiredStrings.strings : [];
					return {
						blacklistedStrings: e.titleBlacklistedStrings.enabled ? e.titleBlacklistedStrings.strings : [],
						maxTitleLength: e.titleLength.enabled ? e.titleLength.max : null,
						requiredStrings: t
					}
				},
				Le = e => {
					const {
						bodyRequirement: t,
						bodyRequiredStrings: n,
						bodyBlacklistedStrings: s
					} = e, i = t.restrictionPolicy !== E.a.NotAllowed, r = t.restrictionPolicy === E.a.Required;
					return Ce(r && n.enabled ? n.strings : [], i && s.enabled ? s.strings : [])
				},
				Te = Le,
				we = e => xe()(e, e => Object.assign({}, e)),
				Pe = (e, t) => {
					const n = t.filter(Boolean);
					return 1 === n.length ? n[0] : null
				},
				Ne = (e, t) => {
					if (!t.length) return e;
					const n = we(e);
					return t.forEach(e => {
						switch (e.field) {
							case "titleRegexes":
							case "bodyRegexes": {
								const t = n[e.field];
								t.serverErrors.push({
									regex: Pe(e.message, t.regexes),
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
				_e = e => e.enabled && !e.guidelineText.trim() ? [Object(v.c)("Guideline text cannot be empty")] : [],
				Me = e => {
					const t = we(e);
					return t.guidelines.clientErrors = _e(t.guidelines), t.linkDomains.clientErrors = Oe(t.linkDomains.domainsText), t.titleLength.clientErrors = (e => {
						let {
							min: t,
							max: n
						} = e;
						return qe({
							min: t,
							max: n,
							minLimit: 2,
							maxLimit: 300
						})
					})(t.titleLength), t.bodyBlacklistedStrings.clientErrors = Te(t), t.bodyRequiredStrings.clientErrors = Le(t), t.titleBlacklistedStrings.clientErrors = (e => {
						const t = Be(e);
						return [...Ce(t.requiredStrings, t.blacklistedStrings), ...ve(t.blacklistedStrings, t.maxTitleLength)]
					})(t), t.titleRequiredStrings.clientErrors = (e => {
						const t = Be(e);
						return [...Ce(t.requiredStrings, t.blacklistedStrings), ...ve(t.requiredStrings, t.maxTitleLength)]
					})(t), t
				},
				Fe = e => Object.keys(e).some(t => {
					const n = e[t];
					return n.enabled && !(a()(n.clientErrors) && a()(n.serverErrors))
				});
			var De = class extends l.a.Component {
					constructor() {
						super(...arguments), this.onToggleGuidelines = () => {
							const {
								formState: e
							} = this.props;
							this.props.onChange({
								guidelines: Object.assign({}, e.guidelines, {
									enabled: !e.guidelines.enabled
								})
							})
						}, this.onGuidelineTextChange = e => {
							const t = e.target.value,
								{
									formState: n
								} = this.props;
							this.props.onChange({
								guidelines: Object.assign({}, n.guidelines, {
									guidelineText: t,
									clientErrors: _e(Object.assign({}, n.guidelines, {
										guidelineText: t
									}))
								})
							})
						}
					}
					render() {
						const {
							formState: e
						} = this.props;
						return l.a.createElement("fieldset", null, l.a.createElement("legend", {
							className: ae.a.sectionLegend
						}, Object(v.c)("General")), l.a.createElement(oe, {
							on: e.guidelines.enabled,
							onClick: this.onToggleGuidelines,
							label: Object(v.c)("Posting guidelines"),
							subtext: Object(v.c)("Give a quick sentence or two on how to successfully post in your community. Try not to just put “read the rules”. Instead, give them a positive guideline on what they can do correctly. This field supports plain text.")
						}), e.guidelines.enabled && l.a.createElement(te, {
							label: Object(v.c)("Guideline text")
						}, l.a.createElement("textarea", {
							"aria-invalid": !!e.guidelines.clientErrors.length,
							className: ae.a.textarea,
							maxLength: 400,
							onChange: this.onGuidelineTextChange,
							placeholder: Object(v.c)("Example: Only make post about dogs"),
							required: !0,
							value: e.guidelines.guidelineText
						}), e.guidelines.clientErrors.length ? l.a.createElement(K.a, {
							messages: e.guidelines.clientErrors
						}) : l.a.createElement(be.a, {
							className: ae.a.characterCountdown,
							maxChars: 400,
							text: e.guidelines.guidelineText
						})))
					}
				},
				Ie = (e, t, n) => {
					let s = Math.abs(parseInt(e, 10));
					return Number.isInteger(s) ? (void 0 !== t && s < t && (s = t), void 0 !== n && s > n && (s = n), s) : null
				},
				Ae = n("./src/reddit/controls/RadioInput/index.tsx"),
				Ue = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				He = class extends l.a.Component {
					constructor() {
						super(...arguments), this.onToggleLinkDomains = () => {
							const {
								formState: e
							} = this.props;
							this.props.onChange({
								linkDomains: Object.assign({}, e.linkDomains, {
									enabled: !e.linkDomains.enabled
								})
							})
						}, this.onToggleRepostFrequency = () => {
							const {
								formState: e
							} = this.props;
							this.props.onChange({
								repostFrequency: Object.assign({}, e.repostFrequency, {
									enabled: !e.repostFrequency.enabled
								})
							})
						}, this.onRepostFrequencyChange = e => {
							const {
								formState: t
							} = this.props, n = Ie(e.target.value, 1, 90);
							this.props.onChange({
								repostFrequency: Object.assign({}, t.repostFrequency, {
									days: n
								})
							})
						}, this.onRestrictionPolicyChange = e => {
							const {
								formState: t
							} = this.props;
							this.props.onChange({
								linkDomains: Object.assign({}, t.linkDomains, {
									restrictionPolicy: e
								})
							})
						}, this.onLinkDomainsTextChange = e => {
							const {
								formState: t
							} = this.props, n = e.target.value;
							this.props.onChange({
								linkDomains: Object.assign({}, t.linkDomains, {
									domainsText: n,
									serverErrors: []
								})
							})
						}, this.onLinkDomainsBlur = () => {
							const {
								linkDomains: e
							} = this.props.formState, t = (e => fe(ye(e)))(e.domainsText), n = Oe(t);
							this.props.onChange({
								linkDomains: Object.assign({}, e, {
									domainsText: t,
									clientErrors: n
								})
							})
						}
					}
					render() {
						const {
							formState: e,
							isLoading: t
						} = this.props, n = e.linkDomains.serverErrors.length ? e.linkDomains.serverErrors : e.linkDomains.clientErrors;
						return l.a.createElement("fieldset", null, l.a.createElement("legend", {
							className: ae.a.sectionLegend
						}, Object(v.c)("Link posts")), l.a.createElement(oe, {
							on: e.linkDomains.enabled,
							onClick: this.onToggleLinkDomains,
							label: Object(v.c)("Link domain restrictions"),
							subtext: Object(v.c)("Require or block links from certain domains")
						}), e.linkDomains.enabled && l.a.createElement(l.a.Fragment, null, l.a.createElement(te, {
							label: Object(v.c)("Restriction type")
						}, l.a.createElement(Ae.a, {
							value: e.linkDomains.restrictionPolicy,
							name: "restrictionType",
							onChange: this.onRestrictionPolicyChange
						}, l.a.createElement(Ue.a, {
							className: ae.a.radioOption,
							showButton: !0,
							value: E.b.Whitelist
						}, Object(v.c)("Required domains")), l.a.createElement(Ue.a, {
							className: ae.a.radioOption,
							showButton: !0,
							value: E.b.Blacklist
						}, Object(v.c)("Blocked domains")))), l.a.createElement(te, {
							label: e.linkDomains.restrictionPolicy === E.b.Whitelist ? Object(v.c)("Only allow link posts with these domains") : Object(v.c)("Block link posts with these domains")
						}, l.a.createElement("textarea", {
							"aria-invalid": !!n.length,
							className: ae.a.domainsTextarea,
							maxLength: 1e5,
							onBlur: this.onLinkDomainsBlur,
							onChange: this.onLinkDomainsTextChange,
							placeholder: Object(v.c)("Example: website.com"),
							required: !0,
							spellCheck: !1,
							value: e.linkDomains.domainsText
						}), l.a.createElement(K.a, {
							messages: n
						}))), l.a.createElement(oe, {
							on: e.repostFrequency.enabled,
							onClick: this.onToggleRepostFrequency,
							label: Object(v.c)("Repost frequency"),
							subtext: Object(v.c)("Prevent users from posting a link that was already posted to your community within x days of the original")
						}), e.repostFrequency.enabled && l.a.createElement(Z.b, {
							className: ae.a.repostFrequencyInput,
							disabled: t,
							label: Object(v.c)("number of days"),
							max: 90,
							min: 1,
							onChange: this.onRepostFrequencyChange,
							type: "number",
							value: je(e.repostFrequency.days)
						}))
					}
				},
				We = n("./src/lib/memoizeByReference/index.ts"),
				Ye = n("./src/reddit/components/MultiOptionSelect/index.tsx"),
				Ge = n("./src/reddit/components/ModHub/PostRequirements/MultiStringsInput/index.m.less"),
				Je = n.n(Ge);
			class Qe extends l.a.Component {
				constructor() {
					super(...arguments), this.state = {
						pendingItemText: ""
					}, this.onInputChanged = e => {
						this.setState({
							pendingItemText: e
						})
					}, this.getOptions = Object(We.a)(e => e.map(e => ({
						id: e,
						displayText: e,
						selected: !0
					}))), this.onOptionsChanged = e => {
						const t = this.getOptions(this.props.strings),
							n = new Map;
						t.forEach(e => n.set(e.displayText, e)), e.forEach(e => n.set(e.displayText, e));
						const s = [...n.values()].filter(e => e.selected && !!e.displayText.trim()).map(e => e.displayText.slice(0, _).toLowerCase()).slice(0, N);
						this.props.onChange(s)
					}
				}
				render() {
					const e = this.getOptions(this.props.strings),
						t = e.length < N;
					return l.a.createElement(l.a.Fragment, null, l.a.createElement(Ye.a, {
						className: Je.a.control,
						addText: Object(v.c)("Add"),
						allowFreeTextEntry: !0,
						input: this.state.pendingItemText,
						isError: this.props.errors.length > 0,
						isLoading: !1,
						maxOptionLength: t ? _ : 0,
						onInputChanged: this.onInputChanged,
						onOptionsChanged: this.onOptionsChanged,
						selectedOptions: e
					}), l.a.createElement(K.a, {
						messages: this.props.errors
					}), l.a.createElement("div", {
						className: Je.a.wordsCountdown
					}, Object(v.c)("".concat(e.length, "/").concat(Object(v.b)("maxOptions", N), " words"))))
				}
			}
			var Xe = class extends l.a.Component {
					constructor() {
						super(...arguments), this.onToggleBodyRequiredStrings = () => {
							const {
								formState: e
							} = this.props;
							this.props.onChange({
								bodyRequiredStrings: Object.assign({}, e.bodyRequiredStrings, {
									enabled: !e.bodyRequiredStrings.enabled
								})
							})
						}, this.onToggleBodyBlacklistedStrings = () => {
							const {
								formState: e
							} = this.props;
							this.props.onChange({
								bodyBlacklistedStrings: Object.assign({}, e.bodyBlacklistedStrings, {
									enabled: !e.bodyBlacklistedStrings.enabled
								})
							})
						}, this.onBodyRestrictionPolicyChange = e => {
							const {
								bodyRequirement: t
							} = this.props.formState;
							this.props.onChange({
								bodyRequirement: Object.assign({}, t, {
									restrictionPolicy: e
								})
							})
						}, this.onBodyRequiredStringsChange = e => {
							const {
								bodyRequiredStrings: t
							} = this.props.formState;
							this.props.onChange({
								bodyRequiredStrings: Object.assign({}, t, {
									strings: e
								})
							}, !0)
						}, this.onBodyBlacklistedStringsChange = e => {
							const {
								bodyBlacklistedStrings: t
							} = this.props.formState;
							this.props.onChange({
								bodyBlacklistedStrings: Object.assign({}, t, {
									strings: e
								})
							}, !0)
						}
					}
					render() {
						const {
							formState: e,
							isLoading: t
						} = this.props;
						return l.a.createElement("fieldset", null, l.a.createElement("legend", {
							className: ae.a.sectionLegend
						}, Object(v.c)("Text posts")), l.a.createElement(se.c, {
							className: ae.a.bodyRestrictionSetting,
							direction: "column",
							label: Object(v.c)("Text post body"),
							subtext: Object(v.c)("Allow text posts to have body text")
						}, l.a.createElement(Ae.a, {
							disabled: t,
							name: "body_restriction",
							onChange: this.onBodyRestrictionPolicyChange,
							value: e.bodyRequirement.restrictionPolicy
						}, l.a.createElement(Ue.a, {
							className: ae.a.radioOption,
							showButton: !0,
							value: E.a.None
						}, Object(v.c)("Post body is optional")), l.a.createElement(Ue.a, {
							className: ae.a.radioOption,
							showButton: !0,
							value: E.a.Required
						}, Object(v.c)("Post body is required")), l.a.createElement(Ue.a, {
							className: ae.a.radioOption,
							showButton: !0,
							value: E.a.NotAllowed
						}, Object(v.c)("Post body is disabled")))), e.bodyRequirement.restrictionPolicy === E.a.Required && l.a.createElement(le, null, l.a.createElement(oe, {
							on: e.bodyRequiredStrings.enabled,
							onClick: this.onToggleBodyRequiredStrings,
							label: Object(v.c)("Required words"),
							subtext: Object(v.c)("Require at least one of these words in the body (up to 15 words of 40 characters each)")
						}), e.bodyRequiredStrings.enabled && l.a.createElement(te, {
							label: Object(v.c)("Add required words")
						}, l.a.createElement(Qe, {
							errors: e.bodyRequiredStrings.clientErrors,
							onChange: this.onBodyRequiredStringsChange,
							strings: e.bodyRequiredStrings.strings
						}))), e.bodyRequirement.restrictionPolicy !== E.a.NotAllowed && l.a.createElement(le, null, l.a.createElement(oe, {
							on: e.bodyBlacklistedStrings.enabled,
							onClick: this.onToggleBodyBlacklistedStrings,
							label: Object(v.c)("Banned words"),
							subtext: Object(v.c)("Do not allow any of these words in the body (up to 15 words of 40 characters each)")
						}), e.bodyBlacklistedStrings.enabled && l.a.createElement(te, {
							label: Object(v.c)("Add banned words")
						}, l.a.createElement(Qe, {
							errors: e.bodyBlacklistedStrings.clientErrors,
							onChange: this.onBodyBlacklistedStringsChange,
							strings: e.bodyBlacklistedStrings.strings
						}))))
					}
				},
				Ve = n("./src/reddit/components/ModHub/PostRequirements/MinMaxInput/index.m.less"),
				Ke = n.n(Ve);
			class Ze extends l.a.Component {
				constructor() {
					super(...arguments), this.minInputRef = l.a.createRef(), this.maxInputRef = l.a.createRef(), this.onChange = (e, t) => {
						const {
							min: n,
							max: s,
							minLimit: i,
							maxLimit: r
						} = this.props, a = Math.min(i, 1), o = Ie(e.target.value, a, r), l = {
							min: "min" === t ? o : n,
							max: "max" === t ? o : s
						};
						this.props.onChange(Object.assign({}, l, {
							clientErrors: qe(Object.assign({}, l, {
								maxLimit: r,
								minLimit: i
							}))
						}))
					}, this.onMinChange = e => this.onChange(e, "min"), this.onMaxChange = e => this.onChange(e, "max"), this.onBlur = () => {
						const {
							min: e,
							max: t
						} = this.props, n = this.minInputRef.current, s = this.maxInputRef.current;
						n.value = je(e), s.value = je(t)
					}
				}
				render() {
					const {
						errors: e,
						max: t,
						maxLimit: n,
						min: s,
						minLimit: i
					} = this.props, r = e.map(e => e.message), a = e.some(e => "both" === e.field), o = a || e.some(e => "min" === e.field), d = a || e.some(e => "max" === e.field);
					return l.a.createElement("div", {
						onBlur: this.onBlur
					}, l.a.createElement("div", null, l.a.createElement(Z.b, {
						className: Ke.a.minInput,
						inputRef: this.minInputRef,
						isInvalid: o,
						label: Object(v.c)("min"),
						max: n,
						min: i,
						onChange: this.onMinChange,
						type: "number",
						value: je(s)
					}), l.a.createElement(Z.b, {
						className: Ke.a.maxInput,
						inputRef: this.maxInputRef,
						isInvalid: d,
						label: Object(v.c)("max"),
						max: n,
						min: i,
						onChange: this.onMaxChange,
						type: "number",
						value: je(t)
					})), l.a.createElement(K.a, {
						className: Ke.a.errorMessages,
						messages: r
					}))
				}
			}

			function ze() {
				return (ze = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const $e = [De, class extends l.a.Component {
				constructor() {
					super(...arguments), this.onToggleTitleRequiredStrings = () => {
						const {
							formState: e
						} = this.props;
						this.props.onChange({
							titleRequiredStrings: Object.assign({}, e.titleRequiredStrings, {
								enabled: !e.titleRequiredStrings.enabled
							})
						})
					}, this.onToggleTitleBlacklistedStrings = () => {
						const {
							formState: e
						} = this.props;
						this.props.onChange({
							titleBlacklistedStrings: Object.assign({}, e.titleBlacklistedStrings, {
								enabled: !e.titleBlacklistedStrings.enabled
							})
						})
					}, this.onToggleTitleLength = () => {
						const {
							formState: e
						} = this.props;
						this.props.onChange({
							titleLength: Object.assign({}, e.titleLength, {
								enabled: !e.titleLength.enabled
							})
						})
					}, this.onTitleRequiredStringsChange = e => {
						const {
							titleRequiredStrings: t
						} = this.props.formState;
						this.props.onChange({
							titleRequiredStrings: Object.assign({}, t, {
								strings: e
							})
						}, !0)
					}, this.onTitleBlacklistedStringsChange = e => {
						const {
							titleBlacklistedStrings: t
						} = this.props.formState;
						this.props.onChange({
							titleBlacklistedStrings: Object.assign({}, t, {
								strings: e
							})
						}, !0)
					}, this.onTitleLengthChange = e => {
						const {
							titleLength: t
						} = this.props.formState;
						this.props.onChange({
							titleLength: Object.assign({}, t, e)
						})
					}
				}
				render() {
					const {
						formState: e
					} = this.props;
					return l.a.createElement("fieldset", null, l.a.createElement("legend", {
						className: ae.a.sectionLegend
					}, Object(v.c)("Title")), l.a.createElement(oe, {
						on: e.titleRequiredStrings.enabled,
						onClick: this.onToggleTitleRequiredStrings,
						label: Object(v.c)("Required words"),
						subtext: Object(v.c)("Require at least one of these words in the title (up to 15 words of 40 characters each)")
					}), e.titleRequiredStrings.enabled && l.a.createElement(te, {
						label: Object(v.c)("Add required words")
					}, l.a.createElement(Qe, {
						errors: e.titleRequiredStrings.clientErrors,
						onChange: this.onTitleRequiredStringsChange,
						strings: e.titleRequiredStrings.strings
					})), l.a.createElement(le, null, l.a.createElement(oe, {
						on: e.titleBlacklistedStrings.enabled,
						onClick: this.onToggleTitleBlacklistedStrings,
						label: Object(v.c)("Banned words"),
						subtext: Object(v.c)("Do not allow any of these words in the title (up to 15 words of 40 characters each)")
					}), e.titleBlacklistedStrings.enabled && l.a.createElement(te, {
						label: Object(v.c)("Add banned words")
					}, l.a.createElement(Qe, {
						errors: e.titleBlacklistedStrings.clientErrors,
						onChange: this.onTitleBlacklistedStringsChange,
						strings: e.titleBlacklistedStrings.strings
					}))), l.a.createElement(oe, {
						on: e.titleLength.enabled,
						onClick: this.onToggleTitleLength,
						label: Object(v.c)("Length restrictions"),
						subtext: Object(v.c)("Set a minimum and/or maximum title length (empty is no restriction)")
					}), e.titleLength.enabled && l.a.createElement(te, {
						label: Object(v.c)("Character length")
					}, l.a.createElement(Ze, {
						onChange: this.onTitleLengthChange,
						min: e.titleLength.min,
						max: e.titleLength.max,
						minLimit: 2,
						maxLimit: 300,
						errors: e.titleLength.clientErrors
					})))
				}
			}, Xe, He, he, ge];
			var et = e => l.a.createElement(l.a.Fragment, null, $e.map((t, n) => l.a.createElement(t, ze({
				key: n
			}, e))));
			const tt = {
					bodyBlacklistedStrings: [],
					bodyRegexes: [],
					bodyRequiredStrings: [],
					bodyRestrictionPolicy: E.a.None,
					domainBlacklist: [],
					domainWhitelist: [],
					guidelinesText: null,
					isFlairRequired: !1,
					linkRepostAge: null,
					linkRestrictionPolicy: E.b.None,
					titleBlacklistedStrings: [],
					titleRegexes: [],
					titleRequiredStrings: [],
					titleTextMaxLength: null,
					titleTextMinLength: null
				},
				nt = e => e.filter(e => !!e);
			var st = e => {
					const t = Object.assign({}, tt, {
							bodyRestrictionPolicy: e.bodyRequirement.restrictionPolicy,
							guidelinesText: e.guidelines.enabled ? e.guidelines.guidelineText : null,
							isFlairRequired: e.flairRequirement.enabled,
							linkRepostAge: e.repostFrequency.enabled ? e.repostFrequency.days : null,
							linkRestrictionPolicy: e.linkDomains.enabled ? e.linkDomains.restrictionPolicy : E.b.None,
							titleBlacklistedStrings: e.titleBlacklistedStrings.enabled ? e.titleBlacklistedStrings.strings : [],
							titleRegexes: e.titleRegexes.enabled ? nt(e.titleRegexes.regexes) : [],
							titleRequiredStrings: e.titleRequiredStrings.enabled ? e.titleRequiredStrings.strings : [],
							titleTextMaxLength: e.titleLength.enabled ? e.titleLength.max : null,
							titleTextMinLength: e.titleLength.enabled ? e.titleLength.min : null
						}),
						n = e.bodyRequirement.restrictionPolicy !== E.a.NotAllowed,
						s = e.bodyRequirement.restrictionPolicy === E.a.Required;
					if (n && (t.bodyBlacklistedStrings = e.bodyBlacklistedStrings.enabled ? e.bodyBlacklistedStrings.strings : [], t.bodyRequiredStrings = s && e.bodyRequiredStrings.enabled ? e.bodyRequiredStrings.strings : [], t.bodyRegexes = e.bodyRegexes.enabled ? nt(e.bodyRegexes.regexes) : []), e.linkDomains.enabled) {
						const n = ye(e.linkDomains.domainsText);
						e.linkDomains.restrictionPolicy === E.b.Whitelist ? t.domainWhitelist = n : e.linkDomains.restrictionPolicy === E.b.Blacklist && (t.domainBlacklist = n)
					}
					return t
				},
				it = n("./node_modules/lodash/isEqual.js"),
				rt = n.n(it),
				at = (e, t) => {
					if (rt()(e, t)) return {};
					const n = st(e),
						s = st(t);
					return S()(n, (e, t) => rt()(e, s[t]))
				},
				ot = e => {
					const {
						bodyBlacklistedStrings: t,
						bodyRegexes: n,
						bodyRequiredStrings: s,
						bodyRestrictionPolicy: i,
						domainBlacklist: r,
						domainWhitelist: a,
						guidelinesText: o,
						isFlairRequired: l,
						linkRepostAge: d,
						linkRestrictionPolicy: c,
						titleBlacklistedStrings: m,
						titleRegexes: g,
						titleRequiredStrings: u,
						titleTextMaxLength: h,
						titleTextMinLength: b
					} = e;
					return Object.assign({}, M, {
						guidelines: {
							enabled: !(!o || !o.trim()),
							guidelineText: o || "",
							clientErrors: []
						},
						titleRequiredStrings: {
							enabled: !!u.length,
							strings: u,
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
						}
					}, i !== E.a.NotAllowed ? {
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
					} : null, {
						titleRegexes: {
							enabled: !!g.length,
							regexes: g,
							serverErrors: []
						},
						linkDomains: {
							enabled: c !== E.b.None,
							restrictionPolicy: c === E.b.None ? E.b.Whitelist : c,
							domainsText: c !== E.b.None ? fe(c === E.b.Whitelist ? a : r) : "",
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
					})
				};
			const lt = "PostReq-discard-confirmation",
				dt = 150,
				ct = Object(c.c)({
					allowNavigationCallback: L.a,
					isDiscardModalOpen: Object(B.b)(lt),
					isLoading: T.a,
					requirements: T.b
				}),
				mt = Object(d.b)(ct, (e, t) => ({
					closeAllModals: () => e(Object(m.f)()),
					onSave: n => e(Object(g.b)(t.subredditName, n)),
					toggleModal: t => e(Object(m.i)(t))
				}));
			class gt extends l.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.formBodyRef = l.a.createRef(), this.isUnmounted = !1, this.resetPendingNavigation = () => {
						this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}, this.performPendingNavigationIfNeeded = () => {
						this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.saveFormState = async () => {
						const {
							requirements: e
						} = this.props, {
							initialFormState: t
						} = this.state;
						if (!e) return;
						const n = Me(this.state.formState);
						if (Fe(n)) return void this.setState({
							formState: n
						}, this.focusErrorField);
						const s = at(n, t);
						if (a()(s)) return;
						this.setState({
							isSavePending: !0
						});
						const i = await this.props.onSave(s);
						if (!this.isUnmounted)
							if (this.setState({
									isSavePending: !1
								}), i.success) this.props.sendEvent(C(st(n))), this.setState({
								formState: n,
								initialFormState: n,
								hasJustSaved: !0
							});
							else if (i.errors) {
							const e = Ne(n, i.errors);
							this.setState({
								formState: e
							}, this.focusErrorField)
						}
					}, this.updateHasUnsavedChanges = i()(() => {
						this.setState(e => {
							const {
								formState: t,
								initialFormState: n
							} = e, s = at(t, n), i = !a()(s);
							return i !== e.hasUnsavedChanges ? {
								hasUnsavedChanges: i
							} : null
						})
					}, 200, {
						maxWait: 500
					}), this.focusErrorField = () => {
						const e = this.formBodyRef.current.querySelector('[aria-invalid="true"]');
						e instanceof HTMLElement && (e.focus(), e.getBoundingClientRect().top < dt && (e.scrollIntoView(), window.scroll(0, window.scrollY - dt)))
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
							let s = Object.assign({}, t.formState, e);
							return n && (s = Me(s)), {
								formState: s,
								hasJustSaved: !1
							}
						})
					};
					const n = e.requirements ? ot(e.requirements) : M;
					this.state = {
						areRequirementsLoaded: !!e.requirements,
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
						requirements: n
					} = this.props;
					if (n && !this.state.areRequirementsLoaded) {
						const e = ot(n);
						this.setState({
							areRequirementsLoaded: !0,
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
						areRequirementsLoaded: n,
						hasUnsavedChanges: s
					} = e;
					return l.a.createElement("div", {
						className: ae.a.container
					}, l.a.createElement(p.c, {
						className: ae.a.topBar
					}, l.a.createElement(y.f, {
						disabled: t || !s,
						onClick: this.onSaveClick
					}, e.hasJustSaved ? Object(v.c)("Saved") : e.isSavePending ? l.a.createElement(f.a, {
						className: ae.a.loadingIcon,
						sizePx: 10
					}) : Object(v.c)("Save changes"))), l.a.createElement(p.a, {
						className: ae.a.contentContainer
					}, l.a.createElement(p.b, null, Object(v.c)("Post requirements"), l.a.createElement(b.a, {
						linkUrl: P
					})), l.a.createElement("div", {
						className: ae.a.pageDetailText
					}, Object(v.c)("Add guidance so users can correctly post to your community")), n ? l.a.createElement("div", {
						className: ae.a.formBody,
						onBlur: this.onFormFieldBlur,
						ref: this.formBodyRef
					}, l.a.createElement(H, null), l.a.createElement(et, {
						formState: this.state.formState,
						isLoading: t,
						onChange: this.onFormStateChange
					})) : l.a.createElement(V, {
						isLoading: t
					})), l.a.createElement(u.a, {
						blockOnBeforeUnload: !0,
						dialogId: lt,
						enabled: s
					}), this.props.isDiscardModalOpen && l.a.createElement(h.a, {
						actionText: Object(v.c)("Discard"),
						headerText: Object(v.c)("Discard changes before leaving?"),
						modalText: Object(v.c)("You have made some changes to post requirements, do you wish to discard the changes?"),
						onConfirm: this.onDiscardUnsavedChangesConfirmed,
						toggleModal: this.onCloseModal,
						withOverlay: !0
					}))
				}
			}
			t.default = mt(Object(x.b)(gt))
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/featureFlags/index.ts"),
				l = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var i = 0;
						for (s = Object.getOwnPropertySymbols(e); i < s.length; i++) t.indexOf(s[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[i]) && (n[s[i]] = e[s[i]])
					}
					return n
				};

			function d(e, t, n) {
				const s = Object(a.c)({
					featureEnabled: t => o.d[e](t)
				});
				return Object(r.b)(s)(e => {
					const {
						featureEnabled: s
					} = e, r = l(e, ["featureEnabled"]);
					return s ? i.a.createElement(t, r) : void 0 !== n ? i.a.createElement(n, r) : null
				})
			}
		}
	}
]);
//# sourceMappingURL=reddit-components-ModHub-PostRequirements.73b51199b2fa50def0a3.js.map