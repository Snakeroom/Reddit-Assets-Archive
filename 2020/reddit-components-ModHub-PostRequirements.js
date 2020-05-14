// https://www.redditstatic.com/desktop2x/reddit-components-ModHub-PostRequirements.bb8a8f318e4a746c4bac.js
// Retrieved at 5/14/2020, 3:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModHub-PostRequirements"], {
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
				domainsTextarea: "APYMQGCMUIdUO--TK4FkT",
				textarea: "Y0qpB_aFql-FqwkGtbWCI",
				externalLink: "_1jVWLYoDggtpbqPGQbchAY",
				loadingIcon: "_1CThyJZyqIA7SUmDqkr-s8"
			}
		},
		"./src/reddit/components/ModHub/PostRequirements/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/lodash/debounce.js"),
				r = n.n(i),
				a = n("./node_modules/lodash/isEmpty.js"),
				o = n.n(a),
				l = n("./node_modules/react/index.js"),
				d = n.n(l),
				c = n("./node_modules/react-redux/es/index.js"),
				m = n("./node_modules/reselect/es/index.js"),
				g = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/postRequirements/index.ts"),
				h = n("./src/reddit/components/BlockNavigation/index.tsx"),
				b = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				p = n("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				x = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				f = n("./src/reddit/components/TrackingHelper/index.tsx"),
				y = n("./src/reddit/controls/Button/index.tsx"),
				k = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				R = n("./node_modules/lodash/omitBy.js"),
				S = n.n(R),
				E = n("./src/reddit/models/PostRequirements/index.ts"),
				q = n("./src/reddit/selectors/telemetry.ts"),
				C = n("./src/telemetry/models/PostRequirement.ts");
			const v = {
					[E.a.None]: C.BodyRestrictionPolicy.Optional,
					[E.a.NotAllowed]: C.BodyRestrictionPolicy.Disabled,
					[E.a.Required]: C.BodyRestrictionPolicy.Required
				},
				_ = e => {
					const t = {
						bodyBlacklistedStrings: e.bodyBlacklistedStrings,
						bodyRegexPatterns: e.bodyRegexes,
						bodyRequiredStrings: e.bodyRequiredStrings,
						bodyRestrictionPolicy: v[e.bodyRestrictionPolicy],
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
				B = e => t => Object.assign({
					source: "post_requirements",
					action: "save",
					noun: "settings"
				}, q.defaults(t), {
					postRequirement: _(e),
					subreddit: q.subreddit(t),
					userSubreddit: q.userSubreddit(t)
				});
			var T = n("./src/reddit/selectors/activeModalId.ts"),
				L = n("./src/reddit/selectors/platform.ts"),
				O = n("./src/reddit/selectors/postRequirements.ts"),
				j = n("./src/config.ts");
			const w = "".concat(j.a.redditHelpUrl.modHelpCenter, "hc/en-us/articles/360010322091"),
				N = 15,
				P = 40,
				F = {
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
			var D = n("./node_modules/lodash/times.js"),
				M = n.n(D),
				I = n("./src/lib/classNames/index.ts"),
				A = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				U = n("./src/reddit/components/ModHub/PostRequirements/FormPlaceholder/index.m.less"),
				H = n.n(U);
			var W = e => {
					let {
						isLoading: t
					} = e;
					return l.createElement("div", {
						className: Object(I.a)(H.a.container, Object(A.a)({
							isLoading: !1
						}))
					}, M()(3).map(e => l.createElement("div", {
						key: e,
						className: H.a.section
					}, l.createElement("div", {
						className: Object(I.a)(H.a.sectionTitle, Object(A.b)({
							isLoading: t
						}))
					}), l.createElement("div", {
						className: H.a.line
					}), M()(2).map(e => l.createElement("div", {
						key: e,
						className: Object(I.a)(H.a.sectionBodyRow, Object(A.b)({
							isLoading: t
						}))
					})))))
				},
				G = n("./src/reddit/controls/ErrorText/index.tsx"),
				V = n("./src/reddit/controls/FormFields/index.tsx"),
				Q = n("./src/reddit/components/ModHub/PostRequirements/LabeledControl/index.m.less"),
				Y = n.n(Q);
			const J = e => e.preventDefault();
			var X = e => d.a.createElement("div", {
					className: Object(I.a)(e.className, Y.a.container)
				}, d.a.createElement("label", {
					className: Y.a.label,
					onClick: J
				}, d.a.createElement("div", {
					className: Y.a.labelText
				}, e.label), e.children)),
				Z = n("./src/lib/lessComponent.tsx"),
				z = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				K = n("./src/reddit/featureFlags/component.tsx"),
				$ = n("./src/reddit/components/ModHub/PostRequirements/index.m.less"),
				ee = n.n($);
			const te = Z.a.wrapped(z.n, "toggleSetting", ee.a),
				ne = Object(K.a)("newPostRequirements", d.a.Fragment),
				se = () => d.a.createElement("a", {
					className: ee.a.externalLink,
					href: "https://docs.python.org/2/library/re.html#regular-expression-syntax",
					target: "_blank"
				}, s.fbt._("Python RegEx syntax", null, {
					hk: "5NwTW"
				})),
				ie = e => e.regexes.map(t => {
					const n = e.serverErrors.find(e => e.regex === t);
					return n ? n.message : ""
				}),
				re = e => e.serverErrors.filter(e => null === e.regex).map(e => e.message);
			var ae = class extends d.a.Component {
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
						return d.a.createElement("fieldset", null, d.a.createElement("legend", {
							className: ee.a.sectionLegend
						}, s.fbt._("Advanced tools", null, {
							hk: "1TQC6S"
						})), d.a.createElement(te, {
							on: e.titleRegexes.enabled,
							onClick: this.onToggleTitleRegex,
							label: s.fbt._("Title text RegEx requirements", null, {
								hk: "1QZsqt"
							}),
							subtext: s.fbt._("Use regular expressions for more advanced title matching. These use the {linkToDocumentation}", [s.fbt._param("linkToDocumentation", d.a.createElement(se, null))], {
								hk: "2rDR9r"
							})
						}), e.titleRegexes.enabled && d.a.createElement(X, {
							label: s.fbt._("Title must match one of:", null, {
								hk: "GtVrU"
							})
						}, d.a.createElement(V.d, {
							className: ee.a.multipleInput,
							disabled: !1,
							errors: ie(e.titleRegexes),
							values: e.titleRegexes.regexes,
							onChange: this.onTitleRegexChange,
							maxLength: 5,
							addValueText: s.fbt._("Add regex", null, {
								hk: "3W7WpW"
							})
						}), d.a.createElement(G.a, {
							messages: re(e.titleRegexes)
						})), d.a.createElement(ne, null, d.a.createElement(te, {
							disabled: t,
							on: e.bodyRegexes.enabled,
							onClick: this.onToggleBodyRegex,
							label: s.fbt._("Body text RegEx requirements", null, {
								hk: "2ViZe1"
							}),
							subtext: s.fbt._("Use regular expressions for more advanced body text matching. These use the {linkToDocumentation}", [s.fbt._param("linkToDocumentation", d.a.createElement(se, null))], {
								hk: "3mk1ff"
							})
						}), !t && e.bodyRegexes.enabled && d.a.createElement(X, {
							label: s.fbt._("Body must match one of:", null, {
								hk: "1pLBfl"
							})
						}, d.a.createElement(V.d, {
							className: ee.a.multipleInput,
							disabled: !1,
							errors: ie(e.bodyRegexes),
							values: e.bodyRegexes.regexes,
							onChange: this.onBodyRegexChange,
							maxLength: 5,
							addValueText: s.fbt._("Add regex", null, {
								hk: "3W7WpW"
							})
						}), d.a.createElement(G.a, {
							messages: re(e.bodyRegexes)
						}))))
					}
				},
				oe = class extends d.a.Component {
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
						return d.a.createElement("fieldset", null, d.a.createElement("legend", {
							className: ee.a.sectionLegend
						}, s.fbt._("Post flair", null, {
							hk: "EQVN9"
						})), d.a.createElement(te, {
							on: e.flairRequirement.enabled,
							onClick: this.onToggleFlairRequirement,
							label: s.fbt._("Require post flair", null, {
								hk: "40S3NC"
							}),
							subtext: s.fbt._("All posts must have a post flair attached to the post. Note that this requirement is ignored if subreddit doesn't have flairs available for users to select.", null, {
								hk: "KxyFE"
							})
						}))
					}
				},
				le = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				de = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/lodash/mapValues.js")),
				ce = n.n(de);
			n("./node_modules/core-js/modules/es6.regexp.split.js");
			const me = e => e.split(/[,;\s]/).filter(Boolean),
				ge = e => e.join(", "),
				ue = ["i.redd.it", "v.redd.it"],
				he = /^(?:[\w-]+\.)+[\w]+$/,
				be = e => ue.includes(e.toLowerCase());
			var pe = e => {
					const t = me(e),
						n = [],
						i = t.find(e => !(e => he.test(e))(e));
					return i && n.push(s.fbt._('Invalid domain: "{domainName}"', [s.fbt._param("domainName", i)], {
						hk: "l57pV"
					})), t.some(be) && n.push(s.fbt._("Domains cannot include reddit hosted content.", null, {
						hk: "JUxdH"
					})), n
				},
				xe = e => {
					const {
						min: t,
						max: n,
						minLimit: i,
						maxLimit: r
					} = e, a = [];
					return null !== t && (t < i || t > r) && a.push({
						field: "min",
						message: s.fbt._("Minimum must be between {min} and {max}", [s.fbt._param("min", "".concat(i)), s.fbt._param("max", "".concat(r))], {
							hk: "3za1lQ"
						})
					}), null !== n && (n < i || n > r) && a.push({
						field: "max",
						message: s.fbt._("Maximum must be between {min} and {max}", [s.fbt._param("min", "".concat(i)), s.fbt._param("max", "".concat(r))], {
							hk: "3qr1O"
						})
					}), !a.length && null !== t && null !== n && t > n && a.push({
						field: "both",
						message: s.fbt._("Maximum must be greater than or equal to minimum", null, {
							hk: "1pXTqq"
						})
					}), a
				};
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			const fe = e => null !== e ? e.toString() : "",
				ye = e => e.map(e => e.trim().toLowerCase()).filter(Boolean),
				ke = (e, t) => {
					const n = new Set(ye(e)),
						i = ye(t).find(e => n.has(e));
					return i ? [s.fbt._('Word "{word}" is required and banned at the same time', [s.fbt._param("word", i)], {
						hk: "2Hyh3c"
					}).toString()] : []
				},
				Re = (e, t) => {
					if (!t) return [];
					const n = e.find(e => e.length > t);
					return n ? [s.fbt._('Word "{word}" is longer than maximum title length', [s.fbt._param("word", n)], {
						hk: "48duSv"
					}).toString()] : []
				},
				Se = e => {
					const t = e.titleRequiredStrings.enabled ? e.titleRequiredStrings.strings : [];
					return {
						blacklistedStrings: e.titleBlacklistedStrings.enabled ? e.titleBlacklistedStrings.strings : [],
						maxTitleLength: e.titleLength.enabled ? e.titleLength.max : null,
						requiredStrings: t
					}
				},
				Ee = e => {
					const {
						bodyRequirement: t,
						bodyRequiredStrings: n,
						bodyBlacklistedStrings: s
					} = e, i = t.restrictionPolicy !== E.a.NotAllowed, r = t.restrictionPolicy === E.a.Required;
					return ke(r && n.enabled ? n.strings : [], i && s.enabled ? s.strings : [])
				},
				qe = Ee,
				Ce = e => ce()(e, e => Object.assign({}, e)),
				ve = (e, t) => {
					const n = t.filter(Boolean);
					return 1 === n.length ? n[0] : null
				},
				_e = (e, t) => {
					if (!t.length) return e;
					const n = Ce(e);
					return t.forEach(e => {
						switch (e.field) {
							case "titleRegexes":
							case "bodyRegexes": {
								const t = n[e.field];
								t.serverErrors.push({
									regex: ve(e.message, t.regexes),
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
				Be = e => e.enabled && !e.guidelineText.trim() ? [s.fbt._("Guideline text cannot be empty", null, {
					hk: "4pncO7"
				})] : [],
				Te = e => {
					const t = Ce(e);
					return t.guidelines.clientErrors = Be(t.guidelines), t.linkDomains.clientErrors = pe(t.linkDomains.domainsText), t.titleLength.clientErrors = (e => {
						let {
							min: t,
							max: n
						} = e;
						return xe({
							min: t,
							max: n,
							minLimit: 2,
							maxLimit: 300
						})
					})(t.titleLength), t.bodyBlacklistedStrings.clientErrors = qe(t), t.bodyRequiredStrings.clientErrors = Ee(t), t.titleBlacklistedStrings.clientErrors = (e => {
						const t = Se(e);
						return [...ke(t.requiredStrings, t.blacklistedStrings), ...Re(t.blacklistedStrings, t.maxTitleLength)]
					})(t), t.titleRequiredStrings.clientErrors = (e => {
						const t = Se(e);
						return [...ke(t.requiredStrings, t.blacklistedStrings), ...Re(t.requiredStrings, t.maxTitleLength)]
					})(t), t
				},
				Le = e => Object.keys(e).some(t => {
					const n = e[t];
					return n.enabled && !(o()(n.clientErrors) && o()(n.serverErrors))
				});
			var Oe = class extends d.a.Component {
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
									clientErrors: Be(Object.assign({}, n.guidelines, {
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
						return d.a.createElement("fieldset", null, d.a.createElement("legend", {
							className: ee.a.sectionLegend
						}, s.fbt._("General", null, {
							hk: "2mMIPC"
						})), d.a.createElement(te, {
							on: e.guidelines.enabled,
							onClick: this.onToggleGuidelines,
							label: s.fbt._("Posting guidelines", null, {
								hk: "13sKis"
							}),
							subtext: s.fbt._("Give a quick sentence or two on how to successfully post in your community. Try not to just put “read the rules”. Instead, give them a positive guideline on what they can do correctly. This field supports plain text.", null, {
								hk: "28EnnV"
							})
						}), e.guidelines.enabled && d.a.createElement(X, {
							label: s.fbt._("Guideline text", null, {
								hk: "1tfXjx"
							})
						}, d.a.createElement("textarea", {
							"aria-invalid": !!e.guidelines.clientErrors.length,
							className: ee.a.textarea,
							maxLength: 400,
							onChange: this.onGuidelineTextChange,
							placeholder: s.fbt._("Example: Only make post about dogs", null, {
								hk: "3ZbLuW"
							}),
							required: !0,
							value: e.guidelines.guidelineText
						}), e.guidelines.clientErrors.length ? d.a.createElement(G.a, {
							messages: e.guidelines.clientErrors
						}) : d.a.createElement(le.a, {
							className: ee.a.characterCountdown,
							maxChars: 400,
							text: e.guidelines.guidelineText
						})))
					}
				},
				je = (e, t, n) => {
					let s = Math.abs(parseInt(e, 10));
					return Number.isInteger(s) ? (void 0 !== t && s < t && (s = t), void 0 !== n && s > n && (s = n), s) : null
				},
				we = n("./src/reddit/controls/RadioInput/index.tsx"),
				Ne = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				Pe = class extends d.a.Component {
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
							} = this.props, n = je(e.target.value, 1, 90);
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
							} = this.props.formState, t = (e => ge(me(e)))(e.domainsText), n = pe(t);
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
						return d.a.createElement("fieldset", null, d.a.createElement("legend", {
							className: ee.a.sectionLegend
						}, s.fbt._("Link posts", null, {
							hk: "2Sj1gA"
						})), d.a.createElement(te, {
							on: e.linkDomains.enabled,
							onClick: this.onToggleLinkDomains,
							label: s.fbt._("Link domain restrictions", null, {
								hk: "1B9EEO"
							}),
							subtext: s.fbt._("Require or block links from certain domains", null, {
								hk: "3HFAZg"
							})
						}), e.linkDomains.enabled && d.a.createElement(d.a.Fragment, null, d.a.createElement(X, {
							label: s.fbt._("Restriction type", null, {
								hk: "2gcn9B"
							})
						}, d.a.createElement(we.a, {
							value: e.linkDomains.restrictionPolicy,
							name: "restrictionType",
							onChange: this.onRestrictionPolicyChange
						}, d.a.createElement(Ne.a, {
							className: ee.a.radioOption,
							showButton: !0,
							value: E.b.Whitelist
						}, s.fbt._("Required domains", null, {
							hk: "1gV6ik"
						})), d.a.createElement(Ne.a, {
							className: ee.a.radioOption,
							showButton: !0,
							value: E.b.Blacklist
						}, s.fbt._("Blocked domains", null, {
							hk: "oJmGD"
						})))), d.a.createElement(X, {
							label: e.linkDomains.restrictionPolicy === E.b.Whitelist ? s.fbt._("Only allow link posts with these domains", null, {
								hk: "14eotU"
							}) : s.fbt._("Block link posts with these domains", null, {
								hk: "Plgix"
							})
						}, d.a.createElement("textarea", {
							"aria-invalid": !!n.length,
							className: ee.a.domainsTextarea,
							maxLength: 1e5,
							onBlur: this.onLinkDomainsBlur,
							onChange: this.onLinkDomainsTextChange,
							placeholder: s.fbt._("Example: website.com", null, {
								hk: "4uJFu4"
							}),
							required: !0,
							spellCheck: !1,
							value: e.linkDomains.domainsText
						}), d.a.createElement(G.a, {
							messages: n
						}))), d.a.createElement(te, {
							on: e.repostFrequency.enabled,
							onClick: this.onToggleRepostFrequency,
							label: s.fbt._("Repost frequency", null, {
								hk: "2pCd8r"
							}),
							subtext: s.fbt._("Prevent users from posting a link that was already posted to your community within x days of the original", null, {
								hk: "bXzEf"
							})
						}), e.repostFrequency.enabled && d.a.createElement(V.b, {
							className: ee.a.repostFrequencyInput,
							disabled: t,
							label: s.fbt._("number of days", null, {
								hk: "1sPFop"
							}),
							max: 90,
							min: 1,
							onChange: this.onRepostFrequencyChange,
							type: "number",
							value: fe(e.repostFrequency.days)
						}))
					}
				},
				Fe = n("./src/lib/memoizeByReference/index.ts"),
				De = n("./src/reddit/components/MultiOptionSelect/index.tsx"),
				Me = n("./src/reddit/components/ModHub/PostRequirements/MultiStringsInput/index.m.less"),
				Ie = n.n(Me);
			class Ae extends d.a.Component {
				constructor() {
					super(...arguments), this.state = {
						pendingItemText: ""
					}, this.onInputChanged = e => {
						this.setState({
							pendingItemText: e
						})
					}, this.getOptions = Object(Fe.a)(e => e.map(e => ({
						id: e,
						displayText: e,
						selected: !0
					}))), this.onOptionsChanged = e => {
						const t = this.getOptions(this.props.strings),
							n = new Map;
						t.forEach(e => n.set(e.displayText, e)), e.forEach(e => n.set(e.displayText, e));
						const s = [...n.values()].filter(e => e.selected && !!e.displayText.trim()).map(e => e.displayText.slice(0, P).toLowerCase()).slice(0, N);
						this.props.onChange(s)
					}
				}
				render() {
					const e = this.getOptions(this.props.strings),
						t = e.length < N;
					return d.a.createElement(d.a.Fragment, null, d.a.createElement(De.a, {
						className: Ie.a.control,
						addText: s.fbt._("Add", null, {
							hk: "4e6qQJ"
						}),
						allowFreeTextEntry: !0,
						input: this.state.pendingItemText,
						isError: this.props.errors.length > 0,
						isLoading: !1,
						maxOptionLength: t ? P : 0,
						onInputChanged: this.onInputChanged,
						onOptionsChanged: this.onOptionsChanged,
						selectedOptions: e
					}), d.a.createElement(G.a, {
						messages: this.props.errors
					}), d.a.createElement("div", {
						className: Ie.a.wordsCountdown
					}, s.fbt._("{selectedCount}/{maxCount} words", [s.fbt._param("selectedCount", "".concat(e.length)), s.fbt._param("maxCount", "".concat(N))], {
						hk: "F6evF"
					})))
				}
			}
			var Ue = class extends d.a.Component {
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
						return d.a.createElement("fieldset", null, d.a.createElement("legend", {
							className: ee.a.sectionLegend
						}, s.fbt._("Text posts", null, {
							hk: "3XbNik"
						})), d.a.createElement(z.c, {
							className: ee.a.bodyRestrictionSetting,
							direction: "column",
							label: s.fbt._("Text post body", null, {
								hk: "1NjP8q"
							}),
							subtext: s.fbt._("Allow text posts to have body text", null, {
								hk: "2aqrIz"
							})
						}, d.a.createElement(we.a, {
							disabled: t,
							name: "body_restriction",
							onChange: this.onBodyRestrictionPolicyChange,
							value: e.bodyRequirement.restrictionPolicy
						}, d.a.createElement(Ne.a, {
							className: ee.a.radioOption,
							showButton: !0,
							value: E.a.None
						}, s.fbt._("Post body is optional", null, {
							hk: "33sNwD"
						})), d.a.createElement(Ne.a, {
							className: ee.a.radioOption,
							showButton: !0,
							value: E.a.Required
						}, s.fbt._("Post body is required", null, {
							hk: "36DfJm"
						})), d.a.createElement(Ne.a, {
							className: ee.a.radioOption,
							showButton: !0,
							value: E.a.NotAllowed
						}, s.fbt._("Post body is disabled", null, {
							hk: "3MemfQ"
						})))), e.bodyRequirement.restrictionPolicy === E.a.Required && d.a.createElement(ne, null, d.a.createElement(te, {
							on: e.bodyRequiredStrings.enabled,
							onClick: this.onToggleBodyRequiredStrings,
							label: s.fbt._("Required words", null, {
								hk: "1rvz8f"
							}),
							subtext: s.fbt._("Require at least one of these words in the body (up to 15 words of 40 characters each)", null, {
								hk: "1tYcCG"
							})
						}), e.bodyRequiredStrings.enabled && d.a.createElement(X, {
							label: s.fbt._("Add required words", null, {
								hk: "1GP0o4"
							})
						}, d.a.createElement(Ae, {
							errors: e.bodyRequiredStrings.clientErrors,
							onChange: this.onBodyRequiredStringsChange,
							strings: e.bodyRequiredStrings.strings
						}))), e.bodyRequirement.restrictionPolicy !== E.a.NotAllowed && d.a.createElement(ne, null, d.a.createElement(te, {
							on: e.bodyBlacklistedStrings.enabled,
							onClick: this.onToggleBodyBlacklistedStrings,
							label: s.fbt._("Banned words", null, {
								hk: "24GVm1"
							}),
							subtext: s.fbt._("Do not allow any of these words in the body (up to 15 words of 40 characters each)", null, {
								hk: "5YSjQ"
							})
						}), e.bodyBlacklistedStrings.enabled && d.a.createElement(X, {
							label: s.fbt._("Add banned words", null, {
								hk: "2VC0jp"
							})
						}, d.a.createElement(Ae, {
							errors: e.bodyBlacklistedStrings.clientErrors,
							onChange: this.onBodyBlacklistedStringsChange,
							strings: e.bodyBlacklistedStrings.strings
						}))))
					}
				},
				He = n("./src/reddit/components/ModHub/PostRequirements/MinMaxInput/index.m.less"),
				We = n.n(He);
			class Ge extends d.a.Component {
				constructor() {
					super(...arguments), this.minInputRef = d.a.createRef(), this.maxInputRef = d.a.createRef(), this.onChange = (e, t) => {
						const {
							min: n,
							max: s,
							minLimit: i,
							maxLimit: r
						} = this.props, a = Math.min(i, 1), o = je(e.target.value, a, r), l = {
							min: "min" === t ? o : n,
							max: "max" === t ? o : s
						};
						this.props.onChange(Object.assign({}, l, {
							clientErrors: xe(Object.assign({}, l, {
								maxLimit: r,
								minLimit: i
							}))
						}))
					}, this.onMinChange = e => this.onChange(e, "min"), this.onMaxChange = e => this.onChange(e, "max"), this.onBlur = () => {
						const {
							min: e,
							max: t
						} = this.props, n = this.minInputRef.current, s = this.maxInputRef.current;
						n.value = fe(e), s.value = fe(t)
					}
				}
				render() {
					const {
						errors: e,
						max: t,
						maxLimit: n,
						min: i,
						minLimit: r
					} = this.props, a = e.map(e => e.message), o = e.some(e => "both" === e.field), l = o || e.some(e => "min" === e.field), c = o || e.some(e => "max" === e.field);
					return d.a.createElement("div", {
						onBlur: this.onBlur
					}, d.a.createElement("div", null, d.a.createElement(V.b, {
						className: We.a.minInput,
						inputRef: this.minInputRef,
						isInvalid: l,
						label: s.fbt._("min", null, {
							hk: "1OxOYM"
						}),
						max: n,
						min: r,
						onChange: this.onMinChange,
						type: "number",
						value: fe(i)
					}), d.a.createElement(V.b, {
						className: We.a.maxInput,
						inputRef: this.maxInputRef,
						isInvalid: c,
						label: s.fbt._("max", null, {
							hk: "2IodGV"
						}),
						max: n,
						min: r,
						onChange: this.onMaxChange,
						type: "number",
						value: fe(t)
					})), d.a.createElement(G.a, {
						className: We.a.errorMessages,
						messages: a
					}))
				}
			}

			function Ve() {
				return (Ve = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Qe = [Oe, class extends d.a.Component {
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
					return d.a.createElement("fieldset", null, d.a.createElement("legend", {
						className: ee.a.sectionLegend
					}, s.fbt._("Title", null, {
						hk: "2O5Ns9"
					})), d.a.createElement(te, {
						on: e.titleRequiredStrings.enabled,
						onClick: this.onToggleTitleRequiredStrings,
						label: s.fbt._("Required words", null, {
							hk: "1rvz8f"
						}),
						subtext: s.fbt._("Require at least one of these words in the title (up to 15 words of 40 characters each)", null, {
							hk: "3QaNiO"
						})
					}), e.titleRequiredStrings.enabled && d.a.createElement(X, {
						label: s.fbt._("Add required words", null, {
							hk: "22VjqJ"
						})
					}, d.a.createElement(Ae, {
						errors: e.titleRequiredStrings.clientErrors,
						onChange: this.onTitleRequiredStringsChange,
						strings: e.titleRequiredStrings.strings
					})), d.a.createElement(ne, null, d.a.createElement(te, {
						on: e.titleBlacklistedStrings.enabled,
						onClick: this.onToggleTitleBlacklistedStrings,
						label: s.fbt._("Banned words", null, {
							hk: "24GVm1"
						}),
						subtext: s.fbt._("Do not allow any of these words in the title (up to 15 words of 40 characters each)", null, {
							hk: "288FuA"
						})
					}), e.titleBlacklistedStrings.enabled && d.a.createElement(X, {
						label: s.fbt._("Add banned words", null, {
							hk: "ZUXyb"
						})
					}, d.a.createElement(Ae, {
						errors: e.titleBlacklistedStrings.clientErrors,
						onChange: this.onTitleBlacklistedStringsChange,
						strings: e.titleBlacklistedStrings.strings
					}))), d.a.createElement(te, {
						on: e.titleLength.enabled,
						onClick: this.onToggleTitleLength,
						label: s.fbt._("Length restrictions", null, {
							hk: "2j0Zgj"
						}),
						subtext: s.fbt._("Set a minimum and/or maximum title length (empty is no restriction)", null, {
							hk: "1fxcld"
						})
					}), e.titleLength.enabled && d.a.createElement(X, {
						label: s.fbt._("Character length", null, {
							hk: "37rbXi"
						})
					}, d.a.createElement(Ge, {
						onChange: this.onTitleLengthChange,
						min: e.titleLength.min,
						max: e.titleLength.max,
						minLimit: 2,
						maxLimit: 300,
						errors: e.titleLength.clientErrors
					})))
				}
			}, Ue, Pe, oe, ae];
			var Ye = e => d.a.createElement(d.a.Fragment, null, Qe.map((t, n) => d.a.createElement(t, Ve({
				key: n
			}, e))));
			const Je = {
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
				Xe = e => e.filter(e => !!e);
			var Ze = e => {
					const t = Object.assign({}, Je, {
							bodyRestrictionPolicy: e.bodyRequirement.restrictionPolicy,
							guidelinesText: e.guidelines.enabled ? e.guidelines.guidelineText : null,
							isFlairRequired: e.flairRequirement.enabled,
							linkRepostAge: e.repostFrequency.enabled ? e.repostFrequency.days : null,
							linkRestrictionPolicy: e.linkDomains.enabled ? e.linkDomains.restrictionPolicy : E.b.None,
							titleBlacklistedStrings: e.titleBlacklistedStrings.enabled ? e.titleBlacklistedStrings.strings : [],
							titleRegexes: e.titleRegexes.enabled ? Xe(e.titleRegexes.regexes) : [],
							titleRequiredStrings: e.titleRequiredStrings.enabled ? e.titleRequiredStrings.strings : [],
							titleTextMaxLength: e.titleLength.enabled ? e.titleLength.max : null,
							titleTextMinLength: e.titleLength.enabled ? e.titleLength.min : null
						}),
						n = e.bodyRequirement.restrictionPolicy !== E.a.NotAllowed,
						s = e.bodyRequirement.restrictionPolicy === E.a.Required;
					if (n && (t.bodyBlacklistedStrings = e.bodyBlacklistedStrings.enabled ? e.bodyBlacklistedStrings.strings : [], t.bodyRequiredStrings = s && e.bodyRequiredStrings.enabled ? e.bodyRequiredStrings.strings : [], t.bodyRegexes = e.bodyRegexes.enabled ? Xe(e.bodyRegexes.regexes) : []), e.linkDomains.enabled) {
						const n = me(e.linkDomains.domainsText);
						e.linkDomains.restrictionPolicy === E.b.Whitelist ? t.domainWhitelist = n : e.linkDomains.restrictionPolicy === E.b.Blacklist && (t.domainBlacklist = n)
					}
					return t
				},
				ze = n("./node_modules/lodash/isEqual.js"),
				Ke = n.n(ze),
				$e = (e, t) => {
					if (Ke()(e, t)) return {};
					const n = Ze(e),
						s = Ze(t);
					return S()(n, (e, t) => Ke()(e, s[t]))
				},
				et = e => {
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
					return Object.assign({}, F, {
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
							domainsText: c !== E.b.None ? ge(c === E.b.Whitelist ? a : r) : "",
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
			const tt = "PostReq-discard-confirmation",
				nt = 150,
				st = Object(m.c)({
					allowNavigationCallback: L.a,
					isDiscardModalOpen: Object(T.b)(tt),
					isLoading: O.a,
					requirements: O.b
				}),
				it = Object(c.b)(st, (e, t) => ({
					closeAllModals: () => e(Object(g.f)()),
					onSave: n => e(Object(u.b)(t.subredditName, n)),
					toggleModal: t => e(Object(g.i)(t))
				}));
			class rt extends d.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.formBodyRef = d.a.createRef(), this.isUnmounted = !1, this.resetPendingNavigation = () => {
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
						const n = Te(this.state.formState);
						if (Le(n)) return void this.setState({
							formState: n
						}, this.focusErrorField);
						const s = $e(n, t);
						if (o()(s)) return;
						this.setState({
							isSavePending: !0
						});
						const i = await this.props.onSave(s);
						if (!this.isUnmounted)
							if (this.setState({
									isSavePending: !1
								}), i.success) this.props.sendEvent(B(Ze(n))), this.setState({
								formState: n,
								initialFormState: n,
								hasJustSaved: !0
							});
							else if (i.errors) {
							const e = _e(n, i.errors);
							this.setState({
								formState: e
							}, this.focusErrorField)
						}
					}, this.updateHasUnsavedChanges = r()(() => {
						this.setState(e => {
							const {
								formState: t,
								initialFormState: n
							} = e, s = $e(t, n), i = !o()(s);
							return i !== e.hasUnsavedChanges ? {
								hasUnsavedChanges: i
							} : null
						})
					}, 200, {
						maxWait: 500
					}), this.focusErrorField = () => {
						const e = this.formBodyRef.current.querySelector('[aria-invalid="true"]');
						e instanceof HTMLElement && (e.focus(), e.getBoundingClientRect().top < nt && (e.scrollIntoView(), window.scroll(0, window.scrollY - nt)))
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
							return n && (s = Te(s)), {
								formState: s,
								hasJustSaved: !1
							}
						})
					};
					const n = e.requirements ? et(e.requirements) : F;
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
						const e = et(n);
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
						hasUnsavedChanges: i
					} = e;
					return d.a.createElement("div", {
						className: ee.a.container
					}, d.a.createElement(x.c, {
						className: ee.a.topBar
					}, d.a.createElement(y.f, {
						disabled: t || !i,
						onClick: this.onSaveClick
					}, e.hasJustSaved ? s.fbt._("Saved", null, {
						hk: "2dBH1t"
					}) : e.isSavePending ? d.a.createElement(k.a, {
						className: ee.a.loadingIcon,
						sizePx: 10
					}) : s.fbt._("Save changes", null, {
						hk: "3EHCjM"
					}))), d.a.createElement(x.a, {
						className: ee.a.contentContainer
					}, d.a.createElement(x.b, null, s.fbt._("Post requirements", null, {
						hk: "2IuGyY"
					}), d.a.createElement(p.a, {
						linkUrl: w
					})), d.a.createElement("div", {
						className: ee.a.pageDetailText
					}, s.fbt._("Add guidance so users can correctly post to your community", null, {
						hk: "4A8N57"
					})), n ? d.a.createElement("div", {
						className: ee.a.formBody,
						onBlur: this.onFormFieldBlur,
						ref: this.formBodyRef
					}, d.a.createElement(Ye, {
						formState: this.state.formState,
						isLoading: t,
						onChange: this.onFormStateChange
					})) : d.a.createElement(W, {
						isLoading: t
					})), d.a.createElement(h.a, {
						blockOnBeforeUnload: !0,
						dialogId: tt,
						enabled: i
					}), this.props.isDiscardModalOpen && d.a.createElement(b.a, {
						actionText: s.fbt._("Discard", null, {
							hk: "1SiwLl"
						}),
						headerText: s.fbt._("Discard changes before leaving?", null, {
							hk: "354NTe"
						}),
						modalText: s.fbt._("You have made some changes to post requirements, do you wish to discard the changes?", null, {
							hk: "g8FA6"
						}),
						onConfirm: this.onDiscardUnsavedChangesConfirmed,
						toggleModal: this.onCloseModal,
						withOverlay: !0
					}))
				}
			}
			t.default = it(Object(f.c)(rt))
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
//# sourceMappingURL=reddit-components-ModHub-PostRequirements.bb8a8f318e4a746c4bac.js.map