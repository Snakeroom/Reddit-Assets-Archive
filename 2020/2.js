// https://www.redditstatic.com/desktop2x/2.50635cb84976c97872c0.js
// Retrieved at 10/26/2020, 4:00:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[2], {
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var n = Math.ceil,
				a = Math.max;
			e.exports = function(e, t, s, r) {
				for (var o = -1, i = a(n((t - e) / (s || 1)), 0), c = Array(i); i--;) c[r ? i : ++o] = e, e += s;
				return c
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var a = n("./node_modules/lodash/_baseRange.js"),
				s = n("./node_modules/lodash/_isIterateeCall.js"),
				r = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, o) {
					return o && "number" != typeof o && s(t, n, o) && (n = o = void 0), t = r(t), void 0 === n ? (n = t, t = 0) : n = r(n), o = void 0 === o ? t < n ? 1 : -1 : r(o), a(t, n, o, e)
				}
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, n) {
			var a = n("./node_modules/lodash/_baseFlatten.js"),
				s = n("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return a(s(e, t), 1)
			}
		},
		"./node_modules/lodash/range.js": function(e, t, n) {
			var a = n("./node_modules/lodash/_createRange.js")();
			e.exports = a
		},
		"./src/graphql/operations/SubmitContentRatingSurvey.json": function(e) {
			e.exports = JSON.parse('{"id":"8cd4e428e688"}')
		},
		"./src/reddit/components/ContentSurvey/RatingCard.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/components/ContentSurvey/index.m.less"),
				i = n.n(o),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				d = n("./src/lib/CSSVariableProvider/index.tsx");
			var u = n("./src/reddit/icons/svgs/Info/index.tsx"),
				m = n("./src/reddit/models/Theme/index.ts"),
				v = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				p = n("./src/reddit/selectors/subreddit.ts");
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function g(e) {
				var t, n;
				const {
					ratingResponse: o,
					subredditId: g,
					children: b
				} = e, x = null !== (t = Object(r.d)(e => Object(p.T)(e, {
					subredditId: g
				}))) && void 0 !== t ? t : {}, y = Object(a.useContext)(d.b);
				return s.a.createElement("div", {
					className: i.a.ratingCard
				}, "PENDING" === (null == o ? void 0 : o.status) && s.a.createElement("div", {
					className: Object(c.a)(i.a.card, i.a.pending)
				}, s.a.createElement(u.a, {
					className: i.a.infoIcon
				}), h._("Content tag is pending until reviewed", null, {
					hk: "Umha7"
				})), s.a.createElement("div", {
					className: i.a.card
				}, s.a.createElement("div", {
					className: i.a.banner,
					style: {
						background: Object(m.g)(Object(v.a)({
							theme: y
						}).banner.backgroundColor, Object(v.a)({
							theme: y
						}).banner.backgroundImage, Object(v.a)({
							theme: y
						}).banner.backgroundImagePosition)
					}
				}, s.a.createElement(l.b, {
					className: i.a.communityIcon,
					iconUrl: null === (n = x.icon) || void 0 === n ? void 0 : n.url
				})), s.a.createElement("h3", {
					className: i.a.communityName
				}, o ? s.a.createElement("span", null, x.displayText, s.a.createElement("img", {
					className: i.a.ratingImg,
					src: o.rating.icon.png
				})) : x.displayText), b))
			}
		},
		"./src/reddit/components/ContentSurvey/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "default", (function() {
				return W
			}));
			var a = n("./node_modules/icepick/icepick.js"),
				s = n("./node_modules/lodash/flatMap.js"),
				r = n.n(s),
				o = n("./node_modules/lodash/sortBy.js"),
				i = n.n(o),
				c = n("./node_modules/react/index.js"),
				l = n.n(c),
				d = n("./node_modules/react-redux/es/index.js"),
				u = n("./src/reddit/components/ContentSurvey/index.m.less"),
				m = n.n(u),
				v = n("./src/lib/sentry/index.ts"),
				p = n("./src/reddit/actions/subreddit/questions.ts"),
				h = n("./src/reddit/actions/toaster.ts"),
				g = n("./node_modules/fbt/lib/FbtPublic.js"),
				b = n("./node_modules/lodash/range.js"),
				x = n.n(b),
				y = n("./src/reddit/components/ModeratorSurvey/index.m.less"),
				f = n.n(y),
				w = n("./src/lib/classNames/index.ts");
			var E = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				_ = n("./src/reddit/controls/Button/index.tsx"),
				j = n("./src/reddit/controls/TextButton/index.tsx"),
				k = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				N = n("./src/reddit/icons/svgs/svgIcons.tsx");

			function O(e) {
				const {
					children: t,
					activeSlide: n,
					progressCurrent: a,
					progressTotal: s,
					disableNext: r,
					buttonText: o,
					advance: i,
					goBack: d,
					onClose: u = (() => {})
				} = e, m = function e(t) {
					return c.Children.toArray(t).reduce((t, n) => n ? n.type === l.a.Fragment ? [...t, ...e(n.props.children)] : [...t, n] : t, [])
				}(t), v = m.length, p = v > 1 && n > 0, h = null != a ? a : n + 1, b = null != s ? s : v;
				return l.a.createElement("div", {
					className: f.a.container
				}, l.a.createElement("div", {
					className: f.a.header
				}, p ? l.a.createElement(j.a, {
					className: f.a.headerButton,
					onClick: d
				}, l.a.createElement(N.f, {
					className: f.a.backIcon
				}), l.a.createElement("div", null, g.fbt._("Back", null, {
					hk: "39TCGR"
				}))) : l.a.createElement(j.a, {
					className: f.a.headerButton,
					onClick: u
				}, l.a.createElement(E.b, null), l.a.createElement("div", null, g.fbt._("Close", null, {
					hk: "4gbyAA"
				}))), l.a.createElement(k.a, {
					className: f.a.snoo
				})), l.a.createElement("div", {
					className: f.a.slides,
					style: {
						transform: "translateX(".concat(-600 * n, "px)")
					}
				}, m.map((e, t) => l.a.createElement("div", {
					key: t,
					className: f.a.slide,
					"aria-hidden": n !== t,
					"aria-current": n === t
				}, e))), l.a.createElement("div", {
					className: f.a.footer
				}, l.a.createElement("div", {
					className: f.a.progressBar
				}, b > 1 && x()(b).map((e, t) => l.a.createElement("div", {
					key: t,
					className: Object(w.a)(f.a.progressSegment, {
						[f.a.active]: t < h
					})
				}))), l.a.createElement("div", {
					className: f.a.progress
				}, b > 1 ? g.fbt._("{current} of {total}", [g.fbt._param("current", h), g.fbt._param("total", b)], {
					hk: "pZU46"
				}) : ""), l.a.createElement(_.i, {
					redditStyle: !0,
					className: f.a.footerButton,
					onClick: i,
					disabled: r
				}, null != o ? o : n === v - 1 ? g.fbt._("Submit", null, {
					hk: "194VZ0"
				}) : g.fbt._("Next", null, {
					hk: "3WmYcd"
				}))))
			}
			var C = n("./src/graphql/operations/SubmitContentRatingSurvey.json"),
				S = n("./src/lib/makeGqlRequest/index.ts");
			var T, I = (e, t) => Object(S.a)(e, Object.assign(Object.assign({}, C), {
					variables: t
				})),
				L = n("./src/reddit/helpers/trackers/contentTag.ts"),
				M = n("./src/reddit/hooks/useMutation.ts"),
				A = n("./src/reddit/hooks/useTracking.ts");
			! function(e) {
				e.Accepted = "ACCEPTED", e.Pending = "PENDING"
			}(T || (T = {}));
			var B = n("./src/reddit/models/Toast/index.ts"),
				R = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./node_modules/lodash/mapValues.js")),
				Z = n.n(R),
				P = n("./src/reddit/controls/CheckboxInput/index.tsx");
			n("./node_modules/core-js/modules/es6.regexp.split.js");

			function V(e) {
				let {
					children: t
				} = e;
				return l.a.createElement(l.a.Fragment, null, (n = t, n.split(/\*+/)).map((e, t) => t % 2 == 1 ? l.a.createElement("em", {
					key: t
				}, e) : e));
				var n
			}
			var q = function(e, t) {
				var n = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (a = Object.getOwnPropertySymbols(e); s < a.length; s++) t.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[s]) && (n[a[s]] = e[a[s]])
				}
				return n
			};

			function D(e) {
				let {
					question: t,
					selectedAnswers: n,
					onChange: a
				} = e;
				return l.a.createElement("div", null, l.a.createElement("h3", {
					className: m.a.header
				}, l.a.createElement(V, null, t.questionTextMarkdown)), t.answerOptions.map(e => l.a.createElement(P.a, {
					key: e.id,
					name: e.id,
					className: m.a.checkbox,
					value: n[e.id],
					onChange: s => (function(e, s) {
						const r = e.id;
						if (e.isMutuallyExclusive) return a(t.id, {
							[r]: s
						});
						if (s) {
							const e = t.answerOptions.filter(e => e.isMutuallyExclusive).map(e => e.id),
								s = Z()(n, (t, n) => !e.includes(n) && t);
							return s[r] = !0, a(t.id, s)
						}
						const o = n,
							i = r,
							c = (o[i], q(o, ["symbol" == typeof i ? i : i + ""]));
						a(t.id, c)
					})(e, s)
				}, l.a.createElement("span", {
					id: e.id
				}, e.answerText))))
			}
			var U = n("./src/reddit/components/ContentSurvey/RatingCard.tsx");
			const {
				fbt: F
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var H;

			function W(e) {
				var t, n;
				const {
					subredditId: s,
					survey: r,
					onClose: o = (() => {})
				} = e, [u, g] = Object(c.useState)({}), b = Object(d.c)(), x = G(null == r ? void 0 : r.questions, u), [{
					surveyState: y,
					activeSlide: f
				}, w] = Object(c.useReducer)((e, t) => {
					let {
						activeSlide: n
					} = e;
					const a = "forward" === t ? Math.min(n + 1, x.length + 1) : Math.max(n - 1, 0);
					return {
						surveyState: 0 === a ? H.Intro : a === x.length + 1 ? H.Tag : H.Survey,
						activeSlide: a
					}
				}, {
					surveyState: H.Intro,
					activeSlide: 0
				}), E = x[f - 1], _ = Object(A.a)();
				Object(c.useEffect)(() => {
					switch (f) {
						case 0:
							return _(Object(L.c)());
						case 1:
							return _(Object(L.e)());
						case x.length + 1:
							return _(Object(L.n)())
					}
					if (E) return _(Object(L.j)(E.pageType))
				}, [f, _]);
				const [j, {
					pending: k,
					error: N
				}] = Object(M.a)(I);
				Object(c.useEffect)(() => {
					N && (v.c.captureException(N), b(Object(h.e)(Object(h.d)(F._("An error occurred", null, {
						hk: "1VDETi"
					}), B.b.Error))))
				}, [N, b]);
				const [C, S] = Object(c.useState)(null);
				if (!r) return null;
				if (!r.isEligible) return null;

				function R(e, t) {
					g(Object(a.setIn)(u, [e], t)), _(Object(L.a)(E.pageType))
				}
				const Z = null !== (t = u[null == E ? void 0 : E.id]) && void 0 !== t ? t : {},
					P = (null !== (n = null == E ? void 0 : E.answerOptions) && void 0 !== n ? n : []).map(e => e.id).some(e => Z[e]),
					V = y === H.Survey && f > 1;
				return l.a.createElement(O, {
					activeSlide: f,
					advance: async function() {
						if (y === H.Survey && f === x.length && S(function(e, t) {
								var n;
								let a = null,
									s = [];
								const r = G(e.questions, t);
								for (const o of r)
									for (const e of o.answerOptions) {
										if (!(null === (n = t[o.id]) || void 0 === n ? void 0 : n[e.id])) continue;
										if (!K(e)) continue;
										const r = e.contentRatingTag;
										(!a || a.weight < r.weight) && (a = r), r.weight > 0 && s.push(e)
									}
								if (s = i()(s, e => -e.contentRatingTag.weight), !a) throw new Error("no question was selected!");
								return {
									id: "",
									version: e.version,
									createdAt: Date.now(),
									isFromMod: !0,
									status: T.Pending,
									rating: a,
									ratingReasons: s
								}
							}(r, u)), y === H.Tag) {
							if (k) return;
							return _(Object(L.m)()), await j({
								input: {
									subredditId: s,
									version: r.version,
									answers: G(r.questions, u).map(e => ({
										questionId: e.id,
										answerIds: Y(e, u).map(e => e.id)
									}))
								}
							}), b(Object(h.e)(Object(h.d)(F._("Thanks for setting up your Content Tag!", null, {
								hk: "3HW5GV"
							}), B.b.SuccessCommunityGreen))), b({
								type: p.c,
								payload: {
									id: s,
									response: C
								}
							}), void(N || o())
						}
						w("forward"), E ? _(Object(L.i)(E.pageType, Y(E, u).map(e => e.id))) : 0 === f && _(Object(L.l)())
					},
					goBack: function() {
						w("back"), E && _(Object(L.b)(E.pageType))
					},
					onClose: o,
					progressCurrent: V ? f - 1 : 0,
					progressTotal: V ? x.length - 1 : 0,
					disableNext: k || y === H.Survey && !P,
					buttonText: X(y)
				}, l.a.createElement("div", {
					className: m.a.result
				}, l.a.createElement("p", {
					className: m.a.heading
				}, F._("Before taking this survey, check in with your mod team", null, {
					hk: "1HOxnM"
				})), F._("{=This survey will ask you about how different mature themes are posted about and discussed in your community.}{=Only one moderator can take and submit the survey, so you may want to consult on your answers before submitting.}{=If things in your community change, you can take the survey again every three months.}{=Thanks for all your help!}", [F._param("=This survey will ask you about how different mature themes are posted about and discussed in your community.", l.a.createElement("p", {
					className: m.a.introCopy
				}, F._("This survey will ask you about how different mature themes are posted about and discussed in your community.", null, {
					hk: "1b3ry"
				}))), F._param("=Only one moderator can take and submit the survey, so you may want to consult on your answers before submitting.", l.a.createElement("p", {
					className: m.a.introCopy
				}, F._("Only one moderator can take and submit the survey, so you may want to consult on your answers before submitting.", null, {
					hk: "345rj6"
				}))), F._param("=If things in your community change, you can take the survey again every three months.", l.a.createElement("p", {
					className: m.a.introCopy
				}, F._("If things in your community change, you can take the survey again every three months.", null, {
					hk: "lGQgp"
				}))), F._param("=Thanks for all your help!", l.a.createElement("p", {
					className: m.a.introCopy
				}, F._("Thanks for all your help!", null, {
					hk: "2RKafV"
				})))], {
					hk: "L7NNc"
				})), x.map(e => {
					var t;
					return l.a.createElement(D, {
						key: e.id,
						question: e,
						selectedAnswers: null !== (t = u[e.id]) && void 0 !== t ? t : {},
						onChange: R
					})
				}), C && l.a.createElement("div", {
					key: "result",
					className: m.a.result
				}, l.a.createElement("p", {
					className: m.a.heading
				}, F._("Your Content Tag:", null, {
					hk: "2OUAzB"
				})), l.a.createElement(U.a, {
					ratingResponse: C,
					subredditId: s
				}, l.a.createElement("p", {
					className: m.a.ratingAudience
				}, C.rating.name), l.a.createElement("p", {
					className: m.a.ratingDescription
				}, C.rating.description, " ", l.a.createElement("br", null), F._("(Note: Only moderators can see this tag.)", null, {
					hk: "2PN50Z"
				}))), l.a.createElement("p", {
					className: m.a.reasonsHeader
				}, F._("Posts and discussions include:", null, {
					hk: "12MdUE"
				})), l.a.createElement("ul", null, C.ratingReasons.map(e => l.a.createElement("li", {
					key: e.id,
					className: m.a.reason
				}, e.contentRatingReasonText)))))
			}

			function X(e) {
				switch (e) {
					case H.Intro:
						return F._("Start Survey", null, {
							hk: "41dYsT"
						});
					case H.Survey:
						return F._("Next", null, {
							hk: "3WmYcd"
						});
					case H.Tag:
						return F._("Submit", null, {
							hk: "2tgWd9"
						})
				}
			}

			function Y(e, t) {
				return e.answerOptions.filter(n => {
					var a;
					return null === (a = t[e.id]) || void 0 === a ? void 0 : a[n.id]
				})
			}

			function G(e, t) {
				let n = [];
				for (const a of null != e ? e : []) {
					const e = Y(a, t),
						s = r()(e, e => {
							var t;
							return null !== (t = e.subQuestions) && void 0 !== t ? t : []
						});
					n = [...n, a, ...G(s, t)]
				}
				return n
			}

			function K(e) {
				return "ContentRatingSurveyLeafAnswer" === e.__typename
			}! function(e) {
				e[e.Intro = 0] = "Intro", e[e.Survey = 1] = "Survey", e[e.Tag = 2] = "Tag"
			}(H || (H = {}))
		},
		"./src/reddit/components/ModeratorSurvey/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3sMj_ZIduvHMzSm-BL86UO",
				header: "_1oy1EwAZphinH5qnfIi5kd",
				snoo: "_3Z_9vPAxX8pX76D-6WRkXu",
				headerButton: "_12uc9RaZmJVpq_L2Oi0R6V",
				backIcon: "_3eFjfw4KmYgXgmfwTCX5uR",
				slides: "twjwApPQNL8y1qJzBKyLu",
				slide: "M87FoStc5XtYmbm8OyWNX",
				footer: "_3k0hmC84HiTPTLSpPUFy_g",
				progressBar: "_2I9TvMWn0KwlS5A9kUWwsx",
				progressSegment: "_3H5UQOUiCZV0_ZGWrs90HA",
				active: "_2iTY5RCWu5pDFEeVR0Uksn",
				progress: "_1Kr_0NCLL1vZvfScmW6IEn",
				footerButton: "_2sDqJ0jCELyq3Ut2qAXe08"
			}
		},
		"./src/reddit/controls/CheckboxInput/index.m.less": function(e, t, n) {
			e.exports = {
				checkboxInput: "_2BPowd18EKTnfZFrj5kY3G",
				disabled: "_303iMx_S0pgrbpYhsYTV6K",
				checkboxSelected: "_2VtQ8EjxlJXdicVJhc73gQ"
			}
		},
		"./src/reddit/controls/CheckboxInput/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = n("./src/reddit/layout/row/Inline/index.tsx"),
				l = n("./src/reddit/controls/CheckboxInput/index.m.less"),
				d = n.n(l);
			t.a = e => s.a.createElement(c.a, {
				"aria-checked": !!e.value,
				"aria-disabled": e.disabled,
				"aria-labelledby": e.name,
				className: Object(r.a)(e.className, d.a.checkboxInput, e.disabled ? d.a.disabled : null),
				onClick: e.onChange && !e.disabled ? () => e.onChange(!e.value) : void 0,
				role: "checkbox"
			}, s.a.createElement("input", {
				value: e.value ? e.value.toString() : "",
				type: "hidden"
			}), e.value ? s.a.createElement(i.a, {
				className: d.a.checkboxSelected
			}) : s.a.createElement(o.a, null), e.children)
		},
		"./src/reddit/icons/svgs/Best/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
			}), s.a.createElement("path", {
				d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
			}))
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Controversial/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
			})))
		},
		"./src/reddit/icons/svgs/Hot/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("title", null, "Hot"), s.a.createElement("path", {
				d: "M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"
			}))
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		},
		"./src/reddit/icons/svgs/New/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
			})))
		},
		"./src/reddit/icons/svgs/Rising/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
			})))
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/2.50635cb84976c97872c0.js.map