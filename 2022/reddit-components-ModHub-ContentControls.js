// https://www.redditstatic.com/desktop2x/reddit-components-ModHub-ContentControls.2db21db41d93f7265818.js
// Retrieved at 8/30/2022, 3:10:05 PM by Reddit Dataminer v1.0.0
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
				l = n.n(r),
				a = n("./node_modules/react/index.js"),
				d = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				u = n("./node_modules/reselect/es/index.js"),
				m = n("./src/reddit/actions/contentControls/index.ts"),
				h = n("./src/reddit/actions/modal.ts"),
				g = n("./src/reddit/components/BlockNavigation/index.tsx"),
				b = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				p = n("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				f = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				x = n("./src/reddit/components/TrackingHelper/index.tsx"),
				y = n("./src/reddit/controls/Button/index.tsx"),
				C = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				k = n("./node_modules/lodash/omitBy.js"),
				S = n.n(k),
				E = n("./src/reddit/models/PostRequirements/index.ts"),
				v = n("./src/reddit/selectors/telemetry.ts"),
				R = n("./src/telemetry/models/PostRequirement.ts");
			const _ = {
					[E.a.None]: R.BodyRestrictionPolicy.Optional,
					[E.a.NotAllowed]: R.BodyRestrictionPolicy.Disabled,
					[E.a.Required]: R.BodyRestrictionPolicy.Required
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
					return S()(t, e => Array.isArray(e) && !e.length)
				},
				w = e => t => ({
					source: "post_requirements",
					action: "save",
					noun: "settings",
					...v.n(t),
					postRequirement: q(e),
					subreddit: v.ib(t),
					userSubreddit: v.sb(t)
				});
			var T = n("./src/reddit/selectors/activeModalId.ts"),
				B = n("./src/reddit/selectors/contentControls.ts"),
				L = n("./src/reddit/selectors/platform.ts"),
				F = n("./src/config.ts"),
				N = n("./src/reddit/models/HatefulContentFilters/index.ts");
			const P = `${F.a.redditModHelpUrl}/hc/en-us/articles/360010322091`,
				M = 2,
				O = 300,
				D = 400,
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
					},
					hatefulContentFilters: {
						hatefulContentThresholdAbuse: N.a.Off,
						hatefulContentThresholdIdentity: N.a.Off,
						wordlistEnabled: !1,
						wordlist: []
					}
				};
			var G = n("./node_modules/lodash/times.js"),
				V = n.n(G),
				K = n("./src/lib/classNames/index.ts"),
				J = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				Z = n("./src/reddit/components/ModHub/ContentControls/FormPlaceholder/index.m.less"),
				z = n.n(Z);
			var Q = e => {
					let {
						isLoading: t
					} = e;
					return a.createElement("div", {
						className: Object(K.a)(z.a.container, Object(J.a)({
							isLoading: !1
						}))
					}, V()(3).map(e => a.createElement("div", {
						key: e,
						className: z.a.section
					}, a.createElement("div", {
						className: Object(K.a)(z.a.sectionTitle, Object(J.b)({
							isLoading: t
						}))
					}), a.createElement("div", {
						className: z.a.line
					}), V()(2).map(e => a.createElement("div", {
						key: e,
						className: Object(K.a)(z.a.sectionBodyRow, Object(J.b)({
							isLoading: t
						}))
					})))))
				},
				X = n("./src/reddit/featureFlags/index.ts"),
				Y = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				$ = n("./src/reddit/controls/ErrorText/index.tsx"),
				ee = n("./src/reddit/controls/FormFields/index.tsx"),
				te = n("./src/reddit/controls/RadioInput/index.tsx"),
				ne = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				se = n("./src/reddit/components/ModHub/ContentControls/LabeledControl/index.m.less"),
				ie = n.n(se);
			const oe = e => e.preventDefault();
			var re = e => d.a.createElement("div", {
					className: Object(K.a)(e.className, ie.a.container)
				}, d.a.createElement("label", {
					className: ie.a.label,
					onClick: oe
				}, d.a.createElement("div", {
					className: ie.a.labelText
				}, e.label), e.children)),
				le = (e, t, n) => {
					let s = Math.abs(parseInt(e, 10));
					return Number.isInteger(s) ? (void 0 !== t && s < t && (s = t), void 0 !== n && s > n && (s = n), s) : null
				};
			const ae = e => null !== e ? e.toString() : "",
				de = e => e.map(e => e.trim().toLowerCase()).filter(Boolean);
			var ce = e => {
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
				ue = n("./src/reddit/components/ModHub/ContentControls/MinMaxInput/index.m.less"),
				me = n.n(ue);
			class he extends d.a.Component {
				constructor() {
					super(...arguments), this.minInputRef = d.a.createRef(), this.maxInputRef = d.a.createRef(), this.onChange = (e, t) => {
						const {
							min: n,
							max: s,
							minLimit: i,
							maxLimit: o
						} = this.props, r = Math.min(i, 1), l = le(e.target.value, r, o), a = {
							min: "min" === t ? l : n,
							max: "max" === t ? l : s
						};
						this.props.onChange({
							...a,
							clientErrors: ce({
								...a,
								maxLimit: o,
								minLimit: i
							})
						})
					}, this.onMinChange = e => this.onChange(e, "min"), this.onMaxChange = e => this.onChange(e, "max"), this.onBlur = () => {
						const {
							min: e,
							max: t
						} = this.props, n = this.minInputRef.current, s = this.maxInputRef.current;
						n.value = ae(e), s.value = ae(t)
					}
				}
				render() {
					const {
						errors: e,
						max: t,
						maxLimit: n,
						min: i,
						minLimit: o
					} = this.props, r = e.map(e => e.message), l = e.some(e => "both" === e.field), a = l || e.some(e => "min" === e.field), c = l || e.some(e => "max" === e.field);
					return d.a.createElement("div", {
						onBlur: this.onBlur
					}, d.a.createElement("div", null, d.a.createElement(ee.b, {
						className: me.a.minInput,
						inputRef: this.minInputRef,
						isInvalid: a,
						label: s.fbt._("min", null, {
							hk: "1OxOYM"
						}),
						max: n,
						min: o,
						onChange: this.onMinChange,
						type: "number",
						value: ae(i)
					}), d.a.createElement(ee.b, {
						className: me.a.maxInput,
						inputRef: this.maxInputRef,
						isInvalid: c,
						label: s.fbt._("max", null, {
							hk: "2IodGV"
						}),
						max: n,
						min: o,
						onChange: this.onMaxChange,
						type: "number",
						value: ae(t)
					})), d.a.createElement($.a, {
						className: me.a.errorMessages,
						messages: r
					}))
				}
			}
			var ge = n("./src/lib/lessComponent.tsx"),
				be = n("./src/reddit/featureFlags/component.tsx"),
				pe = n("./src/reddit/components/ModHub/ContentControls/index.m.less"),
				fe = n.n(pe);
			const xe = ge.a.wrapped(Y.p, "toggleSetting", fe.a),
				ye = Object(be.a)("newPostRequirements", d.a.Fragment),
				Ce = () => d.a.createElement("a", {
					className: fe.a.externalLink,
					href: "https://docs.python.org/2/library/re.html#regular-expression-syntax",
					rel: "noopener noreferrer",
					target: "_blank"
				}, s.fbt._("Python RegEx syntax", null, {
					hk: "5NwTW"
				})),
				ke = e => e.regexes.map(t => {
					const n = e.serverErrors.find(e => e.regex === t);
					return n ? n.message : ""
				}),
				Se = e => e.serverErrors.filter(e => null === e.regex).map(e => e.message);
			class Ee extends d.a.Component {
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
					} = this.props, t = e.bodyRequirement.restrictionPolicy === E.a.NotAllowed;
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
					}), d.a.createElement(Y.c, {
						className: fe.a.bodyRestrictionSetting,
						direction: "column",
						label: s.fbt._("Post text body", null, {
							hk: "1dh3pQ"
						}),
						subtext: s.fbt._("Allow posts to have body text", null, {
							hk: "qytLU"
						})
					}, d.a.createElement(te.a, {
						disabled: !1,
						name: "body_restriction",
						onChange: this.onBodyRestrictionPolicyChange,
						value: e.bodyRequirement.restrictionPolicy
					}, d.a.createElement(ne.a, {
						className: fe.a.radioOption,
						showButton: !0,
						value: E.a.None
					}, s.fbt._("Text body is optional for all post types", null, {
						hk: "1Gm2zE"
					})), d.a.createElement(ne.a, {
						className: fe.a.radioOption,
						showButton: !0,
						value: E.a.Required
					}, s.fbt._("Text body is required for text-only posts", null, {
						hk: "29jDhz"
					})), d.a.createElement(ne.a, {
						className: fe.a.radioOption,
						showButton: !0,
						value: E.a.NotAllowed
					}, s.fbt._("Text body is not allowed", null, {
						hk: "2pY4Fl"
					})))), d.a.createElement(xe, {
						on: e.titleLength.enabled,
						onClick: this.onToggleTitleLength,
						label: s.fbt._("Restrict post title length", null, {
							hk: "3hiTGG"
						}),
						subtext: s.fbt._("Set a minimum and/or maximum post title length", null, {
							hk: "aLDGs"
						})
					}), e.titleLength.enabled && d.a.createElement(re, {
						label: s.fbt._("Character length", null, {
							hk: "37rbXi"
						})
					}, d.a.createElement(he, {
						onChange: this.onTitleLengthChange,
						min: e.titleLength.min,
						max: e.titleLength.max,
						minLimit: M,
						maxLimit: O,
						errors: e.titleLength.clientErrors
					})), d.a.createElement(xe, {
						on: e.titleRegexes.enabled,
						onClick: this.onToggleTitleRegex,
						label: s.fbt._("Use title text RegEx requirements", null, {
							hk: "4bqbLM"
						}),
						subtext: s.fbt._("Use regular expressions for more advanced title matching. These use the {linkToDocumentation}", [s.fbt._param("linkToDocumentation", d.a.createElement(Ce, null))], {
							hk: "2rDR9r"
						})
					}), e.titleRegexes.enabled && d.a.createElement(re, {
						label: s.fbt._("Title must match one of:", null, {
							hk: "GtVrU"
						})
					}, d.a.createElement(ee.d, {
						className: fe.a.multipleInput,
						disabled: !1,
						errors: ke(e.titleRegexes),
						values: e.titleRegexes.regexes,
						onChange: this.onTitleRegexChange,
						maxLength: W,
						addValueText: s.fbt._("Add regex", null, {
							hk: "3W7WpW"
						})
					}), d.a.createElement($.a, {
						messages: Se(e.titleRegexes)
					})), d.a.createElement(ye, null, d.a.createElement(xe, {
						disabled: t,
						on: e.bodyRegexes.enabled,
						onClick: this.onToggleBodyRegex,
						label: s.fbt._("Use body text RegEx requirements", null, {
							hk: "2kadJl"
						}),
						subtext: s.fbt._("Use regular expressions for more advanced body text matching. These use the {linkToDocumentation}", [s.fbt._param("linkToDocumentation", d.a.createElement(Ce, null))], {
							hk: "3mk1ff"
						})
					}), !t && e.bodyRegexes.enabled && d.a.createElement(re, {
						label: s.fbt._("Body must match one of:", null, {
							hk: "1pLBfl"
						})
					}, d.a.createElement(ee.d, {
						className: fe.a.multipleInput,
						disabled: !1,
						errors: ke(e.bodyRegexes),
						values: e.bodyRegexes.regexes,
						onChange: this.onBodyRegexChange,
						maxLength: W,
						addValueText: s.fbt._("Add regex", null, {
							hk: "3W7WpW"
						})
					}), d.a.createElement($.a, {
						messages: Se(e.bodyRegexes)
					}))))
				}
			}
			var ve = n("./node_modules/lodash/difference.js"),
				Re = n.n(ve),
				_e = n("./src/reddit/hooks/useExperimentVariant.ts"),
				qe = n("./src/reddit/hooks/useTracking.ts"),
				we = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/memoizeByReference/index.ts")),
				Te = n("./src/reddit/components/MultiOptionSelect/index.tsx"),
				Be = n("./src/reddit/components/ModHub/ContentControls/MultiStringsInput/index.m.less"),
				Le = n.n(Be);
			class Fe extends d.a.Component {
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
					return d.a.createElement(d.a.Fragment, null, d.a.createElement(Te.a, {
						className: Le.a.control,
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
						className: Le.a.wordsCountdown
					}, s.fbt._("{selectedCount}/{maxCount} words", [s.fbt._param("selectedCount", `${e.length}`), s.fbt._param("maxCount", `${this.getMaxWords()}`)], {
						hk: "F6evF"
					})))
				}
			}
			var Ne = n("./src/reddit/components/ModHub/ModHubNav/NavItem.tsx"),
				Pe = n("./node_modules/lodash/clamp.js"),
				Me = n.n(Pe),
				Oe = n("./src/reddit/controls/DiscreteSlideSelector/Bars/index.m.less"),
				De = n.n(Oe);

			function je(e) {
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

			function Ie(e) {
				return ["0.5fr", ...Array.from({
					length: e - 2
				}).map(e => "1fr"), "0.5fr"].join(" ")
			}
			var Ae = n("./src/reddit/controls/DiscreteSlideSelector/Labels/index.m.less"),
				He = n.n(Ae);

			function We(e) {
				return d.a.createElement("div", {
					className: Object(K.a)(He.a.container, e.className),
					style: {
						gridTemplateColumns: Ie(e.options.length)
					}
				}, e.options.map(t => d.a.createElement("div", {
					className: Object(K.a)(He.a.label, {
						[He.a.labelSelected]: t.value === e.selected
					}),
					key: t.label,
					style: {
						color: t.value === e.selected ? t.color : void 0
					}
				}, t.label)))
			}
			var Ue = n("./node_modules/lodash/throttle.js"),
				Ge = n.n(Ue),
				Ve = n("./src/reddit/controls/DiscreteSlideSelector/ThumbRail/index.m.less"),
				Ke = n.n(Ve);

			function Je(e, t) {
				return 0 === e ? 0 : e === t - 1 ? -16 : -8
			}

			function Ze(e) {
				const t = d.a.useRef(!1);
				return d.a.createElement("div", {
					className: Object(K.a)(Ke.a.container, e.className),
					style: {
						gridTemplateColumns: Ie(e.numStops)
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
					className: Ke.a.clickArea,
					key: s,
					onClick: () => e.onChange(s),
					onMouseEnter: Ge()(() => {
						t.current && e.onChange(s)
					}, 16)
				})), d.a.createElement("div", {
					className: Ke.a.thumb,
					style: {
						left: (n = e.currentStop, s = e.numStops, `${n/(s-1)*100}%`),
						marginLeft: Je(e.currentStop, e.numStops)
					},
					onMouseDown: e => {
						e.stopPropagation, t.current = !0
					}
				}));
				var n, s
			}
			var ze = n("./src/reddit/controls/DiscreteSlideSelector/index.m.less"),
				Qe = n.n(ze);

			function Xe(e) {
				const t = Me()(e.options.findIndex(t => t.value === e.value), 0, e.options.length - 1);
				return d.a.createElement("div", {
					className: Object(K.a)(Qe.a.container, e.className)
				}, d.a.createElement("div", {
					className: Qe.a.barContainer
				}, d.a.createElement(je, {
					className: Qe.a.bars,
					currentStop: t,
					optionColors: e.options.map(e => e.color)
				}), d.a.createElement(Ze, {
					className: Qe.a.thumbRail,
					currentStop: t,
					numStops: e.options.length,
					onChange: t => e.onChange(e.options[t].value)
				})), d.a.createElement(We, {
					options: e.options,
					selected: e.value
				}))
			}
			var Ye = n("./src/reddit/constants/colors.ts"),
				$e = n("./src/reddit/components/ModHub/ContentControls/FormSections/HatefulContentFilters/LevelLabel/index.m.less"),
				et = n.n($e);

			function tt(e) {
				switch (e) {
					case N.a.Off:
						return s.fbt._("Off", null, {
							hk: "2qG3tm"
						});
					case N.a.Lenient:
						return s.fbt._("Lenient", null, {
							hk: "25DBzd"
						});
					case N.a.Moderate:
						return s.fbt._("Moderate", null, {
							hk: "3j1ycq"
						});
					case N.a.Strict:
						return s.fbt._("Strict", null, {
							hk: "4wBjgi"
						})
				}
			}

			function nt(e) {
				switch (e) {
					case N.a.Off:
						return "var(--newCommunityTheme-bodyText)";
					case N.a.Lenient:
						return Ye.b.lenient;
					case N.a.Moderate:
						return Ye.b.moderate;
					case N.a.Strict:
						return Ye.b.strict
				}
			}

			function st(e) {
				return d.a.createElement("span", {
					className: Object(K.a)(et.a.label, e.className),
					style: {
						color: nt(e.level)
					}
				}, tt(e.level), ":")
			}
			var it = n("./src/reddit/components/ModHub/ContentControls/FormSections/HatefulContentFilters/useHCFAdoptionCampaign.tsx"),
				ot = n("./src/reddit/components/ModHub/ContentControls/FormSections/HatefulContentFilters/Filter/index.m.less"),
				rt = n.n(ot);

			function lt(e) {
				const t = Object(it.a)();
				return d.a.createElement("div", {
					className: e.className
				}, d.a.createElement("div", {
					className: rt.a.title
				}, e.title(), t && d.a.createElement(Ne.a, {
					className: rt.a.labelNewTag
				})), d.a.createElement("div", {
					className: rt.a.content
				}, d.a.createElement("div", {
					className: rt.a.description
				}, d.a.createElement(st, {
					className: rt.a.levelLabel,
					level: e.currentLevel
				}), e.descriptions[e.currentLevel]()), d.a.createElement(Xe, {
					options: [N.a.Off, N.a.Lenient, N.a.Moderate, N.a.Strict].map(e => ({
						color: e === N.a.Off ? "var(--newRedditTheme-metaText)" : nt(e),
						label: tt(e),
						value: e
					})),
					value: e.currentLevel,
					onChange: e.onChange
				})))
			}
			var at = [{
					name: "hatefulContentThresholdAbuse",
					title: () => s.fbt._("Abuse and harassment", null, {
						hk: "2bl8VK"
					}),
					descriptions: {
						[N.a.Off]: () => s.fbt._("No content that contains potentially abusive language will be automatically held for review.", null, {
							hk: "4yF6zk"
						}),
						[N.a.Lenient]: () => s.fbt._("Some content that contains potentially abusive language will be automatically held for review.", null, {
							hk: "4t8Kdq"
						}),
						[N.a.Moderate]: () => s.fbt._("Most content that contains potentially abusive language will be automatically held for review.", null, {
							hk: "3c5GPy"
						}),
						[N.a.Strict]: () => s.fbt._("All content that contains potentially abusive language will be automatically held for review.", null, {
							hk: "4C6oi2"
						})
					}
				}],
				dt = n("./src/reddit/components/ModHub/ContentControls/FormSections/HatefulContentFilters/index.m.less"),
				ct = n.n(dt);

			function ut(e) {
				const {
					formState: t,
					onChange: n
				} = e, i = "enabled" === Object(_e.a)("automated_reporting_wordlist"), o = Object(qe.a)();
				return d.a.createElement("fieldset", null, d.a.createElement("legend", {
					className: ct.a.title
				}, s.fbt._("Automated Filtering", null, {
					hk: "18gDSg"
				})), i && d.a.createElement(d.a.Fragment, null, d.a.createElement("div", {
					className: ct.a.description,
					key: "desc"
				}, s.fbt._("Choose the content and keywords your community doesn’t allow. Posts and comments that violate the requirements you set will be automatically removed and reported.", null, {
					hk: "2jHN3G"
				})), d.a.createElement(xe, {
					key: "toggle",
					on: t.hatefulContentFilters.wordlistEnabled,
					onClick: () => n({
						...t,
						hatefulContentFilters: {
							...t.hatefulContentFilters,
							wordlistEnabled: !t.hatefulContentFilters.wordlistEnabled
						}
					}),
					label: s.fbt._("Keywords", null, {
						hk: "lo7Q0"
					}),
					subtext: s.fbt._("Posts and comments with these words will automatically be removed and reported.", null, {
						hk: "28BaGc"
					})
				}), t.hatefulContentFilters.wordlistEnabled && d.a.createElement(re, {
					key: "words",
					label: s.fbt._("Add keywords to report", null, {
						hk: "2na5FM"
					})
				}, d.a.createElement(Fe, {
					errors: [],
					maxWords: 1e3,
					strings: t.hatefulContentFilters.wordlist,
					onChange: e => {
						const s = t.hatefulContentFilters.wordlist,
							i = Re()(e, s),
							r = Re()(s, e);
						n({
							...t,
							hatefulContentFilters: {
								...t.hatefulContentFilters,
								wordlist: e
							}
						}), i.forEach(e => o(t => ({
							source: "community_settings",
							action: "add",
							noun: "auto_report_keyword",
							...Object(v.n)(t),
							setting: {
								value: e,
								oldValue: ""
							}
						}))), r.forEach(e => o(t => ({
							source: "community_settings",
							action: "remove",
							noun: "auto_report_keyword",
							...Object(v.n)(t),
							setting: {
								value: e,
								oldValue: ""
							}
						})))
					}
				}))), d.a.createElement("div", {
					className: ct.a.options
				}, at.map(e => {
					const s = t.hatefulContentFilters[e.name];
					return d.a.createElement(lt, {
						className: ct.a.filter,
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
				})))
			}
			var mt = n("./src/reddit/components/CharacterCountdown/index.tsx");
			const ht = e => e.split(/[,;\s]/).filter(Boolean),
				gt = e => e.join(", "),
				bt = e => gt(ht(e)),
				pt = ["i.redd.it", "v.redd.it"],
				ft = /^(?:[\w-]+\.)+[\w]+$/,
				xt = e => pt.includes(e.toLowerCase());
			var yt = e => {
					const t = ht(e),
						n = [],
						i = t.find(e => !(e => ft.test(e))(e));
					return i && n.push(s.fbt._('Invalid domain: "{domainName}"', [s.fbt._param("domainName", i)], {
						hk: "l57pV"
					})), t.some(xt) && n.push(s.fbt._("Domains cannot include reddit hosted content.", null, {
						hk: "JUxdH"
					})), n
				},
				Ct = n("./node_modules/lodash/mapValues.js"),
				kt = n.n(Ct);
			const St = (e, t) => {
					const n = new Set(de(e)),
						i = de(t).find(e => n.has(e));
					return i ? [s.fbt._('Word "{word}" is required and banned at the same time', [s.fbt._param("word", i)], {
						hk: "2Hyh3c"
					}).toString()] : []
				},
				Et = (e, t) => {
					if (!t) return [];
					const n = e.find(e => e.length > t);
					return n ? [s.fbt._('Word "{word}" is longer than maximum title length', [s.fbt._param("word", n)], {
						hk: "48duSv"
					}).toString()] : []
				},
				vt = e => {
					const t = e.titleRequiredStrings.enabled ? e.titleRequiredStrings.strings : [];
					return {
						blacklistedStrings: e.titleBlacklistedStrings.enabled ? e.titleBlacklistedStrings.strings : [],
						maxTitleLength: e.titleLength.enabled ? e.titleLength.max : null,
						requiredStrings: t
					}
				},
				Rt = e => {
					const {
						bodyRequirement: t,
						bodyRequiredStrings: n,
						bodyBlacklistedStrings: s
					} = e, i = t.restrictionPolicy !== E.a.NotAllowed, o = t.restrictionPolicy === E.a.Required;
					return St(o && n.enabled ? n.strings : [], i && s.enabled ? s.strings : [])
				},
				_t = Rt,
				qt = e => kt()(e, e => ({
					...e
				})),
				wt = (e, t) => {
					const n = t.filter(Boolean);
					return 1 === n.length ? n[0] : null
				},
				Tt = (e, t) => {
					if (!t.length) return e;
					const n = qt(e);
					return t.forEach(e => {
						switch (e.field) {
							case "titleRegexes":
							case "bodyRegexes": {
								const t = n[e.field];
								t.serverErrors.push({
									regex: wt(e.message, t.regexes),
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
				Bt = e => e.enabled && !e.guidelineText.trim() ? [s.fbt._("Guideline text cannot be empty", null, {
					hk: "4pncO7"
				})] : [],
				Lt = e => {
					const t = qt(e);
					return t.guidelines.clientErrors = Bt(t.guidelines), t.linkDomains.clientErrors = yt(t.linkDomains.domainsText), t.titleLength.clientErrors = (e => {
						let {
							min: t,
							max: n
						} = e;
						return ce({
							min: t,
							max: n,
							minLimit: M,
							maxLimit: O
						})
					})(t.titleLength), t.bodyBlacklistedStrings.clientErrors = _t(t), t.bodyRequiredStrings.clientErrors = Rt(t), t.titleBlacklistedStrings.clientErrors = (e => {
						const t = vt(e);
						return [...St(t.requiredStrings, t.blacklistedStrings), ...Et(t.blacklistedStrings, t.maxTitleLength)]
					})(t), t.titleRequiredStrings.clientErrors = (e => {
						const t = vt(e);
						return [...St(t.requiredStrings, t.blacklistedStrings), ...Et(t.requiredStrings, t.maxTitleLength)]
					})(t), t
				},
				Ft = e => Object.keys(e).some(t => {
					if ("hatefulContentFilters" === t) return !1;
					const n = e[t];
					return n.enabled && !(l()(n.clientErrors) && l()(n.serverErrors))
				});
			class Nt extends d.a.Component {
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
								clientErrors: Bt({
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
						} = this.props.formState, t = bt(e.domainsText), n = yt(t);
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
						} = this.props, n = le(e.target.value, 1, j);
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
					}), e.guidelines.enabled && d.a.createElement(re, {
						label: s.fbt._("Guideline text", null, {
							hk: "1tfXjx"
						})
					}, d.a.createElement("textarea", {
						"aria-invalid": !!e.guidelines.clientErrors.length,
						className: fe.a.textarea,
						maxLength: D,
						onChange: this.onGuidelineTextChange,
						placeholder: s.fbt._("Example: Only make post about dogs", null, {
							hk: "3ZbLuW"
						}),
						required: !0,
						value: e.guidelines.guidelineText
					}), e.guidelines.clientErrors.length ? d.a.createElement($.a, {
						messages: e.guidelines.clientErrors
					}) : d.a.createElement(mt.a, {
						className: fe.a.characterCountdown,
						maxChars: D,
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
					}), e.titleRequiredStrings.enabled && d.a.createElement(re, {
						label: s.fbt._("Add required words", null, {
							hk: "22VjqJ"
						})
					}, d.a.createElement(Fe, {
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
					}), e.titleBlacklistedStrings.enabled && d.a.createElement(re, {
						label: s.fbt._("Add banned words", null, {
							hk: "ZUXyb"
						})
					}, d.a.createElement(Fe, {
						errors: e.titleBlacklistedStrings.clientErrors,
						onChange: this.onTitleBlacklistedStringsChange,
						strings: e.titleBlacklistedStrings.strings
					}))), e.bodyRequirement.restrictionPolicy === E.a.Required && d.a.createElement(ye, null, d.a.createElement(xe, {
						on: e.bodyRequiredStrings.enabled,
						onClick: this.onToggleBodyRequiredStrings,
						label: s.fbt._("Require words in the post body", null, {
							hk: "9gXSe"
						}),
						subtext: s.fbt._("Posts without these words in the body can’t be submitted. (Choose up to 15 words of 40 characters each)", null, {
							hk: "1uTriP"
						})
					}), e.bodyRequiredStrings.enabled && d.a.createElement(re, {
						label: s.fbt._("Add required words", null, {
							hk: "1GP0o4"
						})
					}, d.a.createElement(Fe, {
						errors: e.bodyRequiredStrings.clientErrors,
						onChange: this.onBodyRequiredStringsChange,
						strings: e.bodyRequiredStrings.strings
					}))), e.bodyRequirement.restrictionPolicy !== E.a.NotAllowed && d.a.createElement(ye, null, d.a.createElement(xe, {
						on: e.bodyBlacklistedStrings.enabled,
						onClick: this.onToggleBodyBlacklistedStrings,
						label: s.fbt._("Ban words from the post body", null, {
							hk: "3FfELu"
						}),
						subtext: s.fbt._("Posts with these words in the body can’t be submitted. (Choose up to 15 words, 40 characters each.)", null, {
							hk: "2iKz0x"
						})
					}), e.bodyBlacklistedStrings.enabled && d.a.createElement(re, {
						label: s.fbt._("Add banned words", null, {
							hk: "2VC0jp"
						})
					}, d.a.createElement(Fe, {
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
					}), e.linkDomains.enabled && d.a.createElement(d.a.Fragment, null, d.a.createElement(re, {
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
						value: E.b.Whitelist
					}, s.fbt._("Required domains", null, {
						hk: "1gV6ik"
					})), d.a.createElement(ne.a, {
						className: fe.a.radioOption,
						showButton: !0,
						value: E.b.Blacklist
					}, s.fbt._("Blocked domains", null, {
						hk: "oJmGD"
					})))), d.a.createElement(re, {
						label: e.linkDomains.restrictionPolicy === E.b.Whitelist ? s.fbt._("Only allow link posts with these domains", null, {
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
						value: ae(e.repostFrequency.days)
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
			const Mt = Object(u.c)({
				hatefulContentFiltersEnabled: X.d.hatefulContentFiltersEnabled
			});
			var Ot = Object(c.b)(Mt)(e => d.a.createElement(d.a.Fragment, null, (e => [...e.hatefulContentFiltersEnabled ? [ut] : [], Nt, Ee])(e).map((t, n) => d.a.createElement(t, Pt({
					key: n
				}, e))))),
				Dt = e => {
					const {
						bodyBlacklistedStrings: t,
						bodyRegexes: n,
						bodyRequiredStrings: s,
						bodyRestrictionPolicy: i,
						domainBlacklist: o,
						domainWhitelist: r,
						guidelinesText: l,
						isFlairRequired: a,
						linkRepostAge: d,
						linkRestrictionPolicy: c,
						titleBlacklistedStrings: u,
						titleRegexes: m,
						titleRequiredStrings: h,
						titleTextMaxLength: g,
						titleTextMinLength: b
					} = e.postRequirements;
					return {
						...U,
						hatefulContentFilters: e.hatefulContentFilters,
						guidelines: {
							enabled: !(!l || !l.trim()),
							guidelineText: l || "",
							clientErrors: []
						},
						titleRequiredStrings: {
							enabled: !!h.length,
							strings: h,
							clientErrors: []
						},
						titleBlacklistedStrings: {
							enabled: !!u.length,
							strings: u,
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
						...i !== E.a.NotAllowed ? {
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
							enabled: !!m.length,
							regexes: m,
							serverErrors: []
						},
						linkDomains: {
							enabled: c !== E.b.None,
							restrictionPolicy: c === E.b.None ? E.b.Whitelist : c,
							domainsText: c !== E.b.None ? gt(c === E.b.Whitelist ? r : o) : "",
							clientErrors: [],
							serverErrors: []
						},
						repostFrequency: {
							enabled: null !== d,
							days: d
						},
						flairRequirement: {
							enabled: a
						}
					}
				};
			const jt = {
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
				It = e => e.filter(e => !!e);
			var At = e => {
					const t = {
							...jt,
							bodyRestrictionPolicy: e.bodyRequirement.restrictionPolicy,
							guidelinesText: e.guidelines.enabled ? e.guidelines.guidelineText : null,
							isFlairRequired: e.flairRequirement.enabled,
							linkRepostAge: e.repostFrequency.enabled ? e.repostFrequency.days : null,
							linkRestrictionPolicy: e.linkDomains.enabled ? e.linkDomains.restrictionPolicy : E.b.None,
							titleBlacklistedStrings: e.titleBlacklistedStrings.enabled ? e.titleBlacklistedStrings.strings : [],
							titleRegexes: e.titleRegexes.enabled ? It(e.titleRegexes.regexes) : [],
							titleRequiredStrings: e.titleRequiredStrings.enabled ? e.titleRequiredStrings.strings : [],
							titleTextMaxLength: e.titleLength.enabled ? e.titleLength.max : null,
							titleTextMinLength: e.titleLength.enabled ? e.titleLength.min : null
						},
						n = e.bodyRequirement.restrictionPolicy !== E.a.NotAllowed,
						s = e.bodyRequirement.restrictionPolicy === E.a.Required;
					if (n && (t.bodyBlacklistedStrings = e.bodyBlacklistedStrings.enabled ? e.bodyBlacklistedStrings.strings : [], t.bodyRequiredStrings = s && e.bodyRequiredStrings.enabled ? e.bodyRequiredStrings.strings : [], t.bodyRegexes = e.bodyRegexes.enabled ? It(e.bodyRegexes.regexes) : []), e.linkDomains.enabled) {
						const n = ht(e.linkDomains.domainsText);
						e.linkDomains.restrictionPolicy === E.b.Whitelist ? t.domainWhitelist = n : e.linkDomains.restrictionPolicy === E.b.Blacklist && (t.domainBlacklist = n)
					}
					return t
				},
				Ht = n("./node_modules/lodash/isEqual.js"),
				Wt = n.n(Ht),
				Ut = (e, t) => {
					if (Wt()(e, t)) return {
						hatefulContentFilters: {},
						postRequirements: {}
					};
					const n = At(e),
						s = At(t),
						i = S()(n, (e, t) => Wt()(e, s[t])),
						o = {};
					return Object.keys(t.hatefulContentFilters).forEach(n => {
						const s = t.hatefulContentFilters[n],
							i = e.hatefulContentFilters[n];
						Wt()(s, i) || (o[n] = i)
					}), {
						hatefulContentFilters: o,
						postRequirements: i
					}
				},
				Gt = n("./src/telemetry/models/Event.ts");
			const Vt = (e, t) => n => ({
					source: Gt.f.CommunitySettings,
					action: Gt.d.Save,
					noun: Gt.e.HarassmentControlLevel,
					setting: {
						value: `${e}`,
						oldValue: `${t}`
					},
					subreddit: Object(v.ib)(n),
					...Object(v.n)(n)
				}),
				Kt = "PostReq-discard-confirmation",
				Jt = 150,
				Zt = Object(u.c)({
					allowNavigationCallback: L.a,
					isDiscardModalOpen: Object(T.b)(Kt),
					isLoading: B.a,
					contentControls: B.b
				}),
				zt = Object(c.b)(Zt, (e, t) => ({
					closeAllModals: () => e(Object(h.f)()),
					onSave: n => e(Object(m.b)(t.subredditName, n)),
					toggleModal: t => e(Object(h.i)(t))
				}));
			class Qt extends d.a.Component {
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
						const s = Lt(this.state.formState);
						if (Ft(s)) return void this.setState({
							formState: s
						}, this.focusErrorField);
						const {
							postRequirements: i,
							hatefulContentFilters: o
						} = Ut(s, n);
						if (l()(i) && l()(o)) return;
						this.setState({
							isSavePending: !0
						}), l()(o) || t(Vt(o.hatefulContentThresholdAbuse, this.state.initialFormState.hatefulContentFilters.hatefulContentThresholdAbuse));
						const r = await this.props.onSave({
							hatefulContentFilters: o,
							postRequirements: i
						});
						if (!this.isUnmounted)
							if (this.setState({
									isSavePending: !1
								}), r.success) this.props.sendEvent(w(At(s))), this.setState({
								formState: s,
								initialFormState: s,
								hasJustSaved: !0
							});
							else if (r.errors) {
							const e = Tt(s, r.errors);
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
							} = Ut(t, n), o = !l()(s) || !l()(i);
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
							return n && (s = Lt(s)), {
								formState: s,
								hasJustSaved: !1
							}
						})
					};
					const n = e.contentControls ? Dt(e.contentControls) : U;
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
						const e = Dt(n);
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
					}, d.a.createElement(y.l, {
						disabled: t || !i,
						onClick: this.onSaveClick
					}, e.hasJustSaved ? s.fbt._("Saved", null, {
						hk: "2dBH1t"
					}) : e.isSavePending ? d.a.createElement(C.a, {
						className: fe.a.loadingIcon,
						sizePx: 10
					}) : s.fbt._("Save changes", null, {
						hk: "1bM6H4"
					}))), d.a.createElement(f.a, {
						className: fe.a.contentContainer
					}, d.a.createElement(f.b, null, s.fbt._("Content controls", null, {
						hk: "1sol1u"
					}), d.a.createElement(p.a, {
						linkUrl: P
					})), d.a.createElement("div", {
						className: fe.a.pageDetailText
					}, s.fbt._("Set requirements and restrictions for how people post and comment in your community", null, {
						hk: "48UaB4"
					})), n ? d.a.createElement("div", {
						className: fe.a.formBody,
						onBlur: this.onFormFieldBlur,
						ref: this.formBodyRef
					}, d.a.createElement(Ot, {
						formState: this.state.formState,
						isLoading: t,
						onChange: this.onFormStateChange
					})) : d.a.createElement(Q, {
						isLoading: t
					})), d.a.createElement(g.a, {
						blockOnBeforeUnload: !0,
						dialogId: Kt,
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
			t.default = zt(Object(x.c)(Qt))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModHub-ContentControls.2db21db41d93f7265818.js.map