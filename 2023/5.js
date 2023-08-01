// https://www.redditstatic.com/desktop2x/5.64092e4c1d48b31e86e2.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[5], {
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var a = Math.ceil,
				n = Math.max;
			e.exports = function(e, t, s, r) {
				for (var o = -1, c = n(a((t - e) / (s || 1)), 0), i = Array(c); c--;) i[r ? c : ++o] = e, e += s;
				return i
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, a) {
			var n = a("./node_modules/lodash/_baseRange.js"),
				s = a("./node_modules/lodash/_isIterateeCall.js"),
				r = a("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, a, o) {
					return o && "number" != typeof o && s(t, a, o) && (a = o = void 0), t = r(t), void 0 === a ? (a = t, t = 0) : a = r(a), o = void 0 === o ? t < a ? 1 : -1 : r(o), n(t, a, o, e)
				}
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, a) {
			var n = a("./node_modules/lodash/_baseFlatten.js"),
				s = a("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return n(s(e, t), 1)
			}
		},
		"./node_modules/lodash/map.js": function(e, t, a) {
			var n = a("./node_modules/lodash/_arrayMap.js"),
				s = a("./node_modules/lodash/_baseIteratee.js"),
				r = a("./node_modules/lodash/_baseMap.js"),
				o = a("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (o(e) ? n : r)(e, s(t, 3))
			}
		},
		"./node_modules/lodash/range.js": function(e, t, a) {
			var n = a("./node_modules/lodash/_createRange.js")();
			e.exports = n
		},
		"./src/lib/hooks/useMutation.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var n = a("./node_modules/react/index.js"),
				s = a("./src/reddit/hooks/useGqlContext.ts");

			function r(e) {
				const t = Object(s.a)(),
					[a, r] = Object(n.useState)(!1),
					[o, c] = Object(n.useState)(!1),
					[i, l] = Object(n.useState)(null),
					[d, u] = Object(n.useState)(null);
				return [Object(n.useCallback)(async a => {
					let n, s;
					r(!0), c(!0);
					try {
						if ((s = (n = await e(t(), a)).body).error) throw new Error(s.error.message);
						u(s.data)
					} catch (i) {
						l(i)
					} finally {
						r(!1)
					}
				}, [t, e]), {
					data: d,
					error: i,
					pending: a,
					called: o
				}]
			}
		},
		"./src/reddit/components/ContentSurvey/RatingCard.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return g
			}));
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/reddit/components/ContentSurvey/index.m.less"),
				c = a.n(o),
				i = a("./src/lib/classNames/index.ts"),
				l = a("./src/reddit/components/SubredditIcon/index.tsx"),
				d = a("./src/reddit/hooks/useTheme.ts"),
				u = a("./src/reddit/icons/svgs/Info/index.tsx"),
				m = a("./src/reddit/models/Theme/index.ts"),
				h = a("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				v = a("./src/reddit/selectors/subreddit.ts");
			const {
				fbt: p
			} = a("./node_modules/fbt/lib/FbtPublic.js");

			function g(e) {
				var t, a;
				const {
					ratingResponse: n,
					subredditId: o,
					children: g
				} = e, f = null !== (t = Object(r.e)(e => Object(v.X)(e, {
					subredditId: o
				}))) && void 0 !== t ? t : {}, x = Object(d.a)();
				return s.a.createElement("div", {
					className: c.a.ratingCard
				}, "PENDING" === (null == n ? void 0 : n.status) && s.a.createElement("div", {
					className: Object(i.a)(c.a.card, c.a.pending)
				}, s.a.createElement(u.a, {
					className: c.a.infoIcon
				}), p._("Content tag is pending until reviewed", null, {
					hk: "Umha7"
				})), s.a.createElement("div", {
					className: c.a.card
				}, s.a.createElement("div", {
					className: c.a.banner,
					style: {
						background: Object(m.f)(Object(h.a)({
							theme: x
						}).banner.backgroundColor, Object(h.a)({
							theme: x
						}).banner.backgroundImage, Object(h.a)({
							theme: x
						}).banner.backgroundImagePosition)
					}
				}, s.a.createElement(l.b, {
					className: c.a.communityIcon,
					iconUrl: null === (a = f.icon) || void 0 === a ? void 0 : a.url
				})), s.a.createElement("h3", {
					className: c.a.communityName
				}, n ? s.a.createElement("span", null, f.displayText, s.a.createElement("img", {
					className: c.a.ratingImg,
					src: n.rating.icon.png
				})) : f.displayText), g))
			}
		},
		"./src/reddit/components/ContentSurvey/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "default", (function() {
				return W
			}));
			var n = a("./node_modules/icepick/icepick.js"),
				s = a("./node_modules/lodash/flatMap.js"),
				r = a.n(s),
				o = a("./node_modules/lodash/sortBy.js"),
				c = a.n(o),
				i = a("./node_modules/react/index.js"),
				l = a.n(i),
				d = a("./node_modules/react-redux/es/index.js"),
				u = a("./src/reddit/components/ContentSurvey/index.m.less"),
				m = a.n(u),
				h = a("./src/lib/hooks/useMutation.ts"),
				v = a("./src/lib/sentry/index.ts"),
				p = a("./src/reddit/actions/subreddit/constants.ts"),
				g = a("./src/reddit/actions/toaster.ts"),
				f = a("./node_modules/fbt/lib/FbtPublic.js"),
				x = a("./node_modules/lodash/range.js"),
				y = a.n(x),
				w = a("./src/reddit/components/ModeratorSurvey/index.m.less"),
				C = a.n(w),
				b = a("./src/lib/classNames/index.ts");
			var E = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				_ = a("./src/reddit/controls/Button/index.tsx"),
				k = a("./src/reddit/controls/TextButton/index.tsx"),
				j = a("./src/reddit/icons/svgs/Snoo/index.tsx"),
				N = a("./src/reddit/icons/svgs/svgIcons.tsx");

			function M(e) {
				const {
					children: t,
					activeSlide: a,
					progressCurrent: n,
					progressTotal: s,
					disableNext: r,
					buttonText: o,
					advance: c,
					goBack: d,
					onClose: u = (() => {})
				} = e, m = function e(t) {
					return i.Children.toArray(t).reduce((t, a) => a ? a.type === l.a.Fragment ? [...t, ...e(a.props.children)] : [...t, a] : t, [])
				}(t), h = m.length, v = h > 1 && a > 0, p = null != n ? n : a + 1, g = null != s ? s : h;
				return l.a.createElement("div", {
					className: C.a.container
				}, l.a.createElement("div", {
					className: C.a.header
				}, v ? l.a.createElement(k.a, {
					className: C.a.headerButton,
					onClick: d
				}, l.a.createElement(N.f, {
					className: C.a.backIcon
				}), l.a.createElement("div", null, f.fbt._("Back", null, {
					hk: "39TCGR"
				}))) : l.a.createElement(k.a, {
					className: C.a.headerButton,
					onClick: u
				}, l.a.createElement(E.b, null), l.a.createElement("div", null, f.fbt._("Close", null, {
					hk: "4gbyAA"
				}))), l.a.createElement(j.a, {
					className: C.a.snoo
				})), l.a.createElement("div", {
					className: C.a.slides,
					style: {
						transform: `translateX(${-600*a}px)`
					}
				}, m.map((e, t) => l.a.createElement("div", {
					key: t,
					className: C.a.slide,
					"aria-hidden": a !== t,
					"aria-current": a === t
				}, e))), l.a.createElement("div", {
					className: C.a.footer
				}, l.a.createElement("div", {
					className: C.a.progressBar
				}, g > 1 && y()(g).map((e, t) => l.a.createElement("div", {
					key: t,
					className: Object(b.a)(C.a.progressSegment, {
						[C.a.active]: t < p
					})
				}))), l.a.createElement("div", {
					className: C.a.progress
				}, g > 1 ? f.fbt._("{current} of {total}", [f.fbt._param("current", p), f.fbt._param("total", g)], {
					hk: "pZU46"
				}) : ""), l.a.createElement(_.t, {
					redditStyle: !0,
					className: C.a.footerButton,
					onClick: c,
					disabled: r
				}, null != o ? o : a === h - 1 ? f.fbt._("Submit", null, {
					hk: "4aU3dh"
				}) : f.fbt._("Next", null, {
					hk: "2mEXAi"
				}))))
			}
			var S = a("./src/redditGQL/operations/SubmitContentRatingSurvey.json"),
				L = a("./src/lib/makeGqlRequest/index.ts");
			var O, A = (e, t) => Object(L.a)(e, {
					...S,
					variables: t
				}),
				T = a("./src/reddit/helpers/trackers/contentTag.ts"),
				Z = a("./src/reddit/hooks/useTracking.ts");
			! function(e) {
				e.Accepted = "ACCEPTED", e.Pending = "PENDING"
			}(O || (O = {}));
			var I = a("./src/reddit/models/Toast/index.ts"),
				F = a("./node_modules/lodash/mapValues.js"),
				B = a.n(F),
				R = a("./src/reddit/controls/CheckboxInput/index.tsx");

			function z(e) {
				let {
					children: t
				} = e;
				return l.a.createElement(l.a.Fragment, null, (a = t, a.split(/\*+/)).map((e, t) => t % 2 == 1 ? l.a.createElement("em", {
					key: t
				}, e) : e));
				var a
			}

			function P(e) {
				let {
					question: t,
					selectedAnswers: a,
					onChange: n
				} = e;
				return l.a.createElement("div", null, l.a.createElement("h3", {
					className: m.a.header
				}, l.a.createElement(z, null, t.questionTextMarkdown)), t.answerOptions.map(e => l.a.createElement(R.a, {
					key: e.id,
					name: e.id,
					className: m.a.checkbox,
					value: a[e.id],
					onChange: s => (function(e, s) {
						const r = e.id;
						if (e.isMutuallyExclusive) return n(t.id, {
							[r]: s
						});
						if (s) {
							const e = t.answerOptions.filter(e => e.isMutuallyExclusive).map(e => e.id),
								s = B()(a, (t, a) => !e.includes(a) && t);
							return s[r] = !0, n(t.id, s)
						}
						const {
							[r]: o, ...c
						} = a;
						n(t.id, c)
					})(e, s)
				}, l.a.createElement("span", {
					id: e.id
				}, e.answerText))))
			}
			var V = a("./src/reddit/components/ContentSurvey/RatingCard.tsx");
			const {
				fbt: q
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var H;

			function W(e) {
				var t, a;
				const {
					subredditId: s,
					survey: r,
					onClose: o = (() => {})
				} = e, [u, f] = Object(i.useState)({}), x = Object(d.d)(), y = D(null == r ? void 0 : r.questions, u), [{
					surveyState: w,
					activeSlide: C
				}, b] = Object(i.useReducer)((e, t) => {
					let {
						activeSlide: a
					} = e;
					const n = "forward" === t ? Math.min(a + 1, y.length + 1) : Math.max(a - 1, 0);
					return {
						surveyState: 0 === n ? H.Intro : n === y.length + 1 ? H.Tag : H.Survey,
						activeSlide: n
					}
				}, {
					surveyState: H.Intro,
					activeSlide: 0
				}), E = y[C - 1], _ = Object(Z.a)();
				Object(i.useEffect)(() => {
					switch (C) {
						case 0:
							return _(Object(T.c)());
						case 1:
							return _(Object(T.e)());
						case y.length + 1:
							return _(Object(T.n)())
					}
					if (E) return _(Object(T.j)(E.pageType))
				}, [C, _]);
				const [k, {
					pending: j,
					error: N
				}] = Object(h.a)(A);
				Object(i.useEffect)(() => {
					N && (v.c.captureException(N), x(Object(g.f)(Object(g.e)(q._("An error occurred", null, {
						hk: "1VDETi"
					}), I.b.Error))))
				}, [N, x]);
				const [S, L] = Object(i.useState)(null);
				if (!r) return null;
				if (!r.isEligible) return null;

				function F(e, t) {
					f(Object(n.setIn)(u, [e], t)), _(Object(T.a)(E.pageType))
				}
				const B = null !== (t = u[null == E ? void 0 : E.id]) && void 0 !== t ? t : {},
					R = (null !== (a = null == E ? void 0 : E.answerOptions) && void 0 !== a ? a : []).map(e => e.id).some(e => B[e]),
					z = w === H.Survey && C > 1;
				return l.a.createElement(M, {
					activeSlide: C,
					advance: async function() {
						if (w === H.Survey && C === y.length && L(function(e, t) {
								var a;
								let n = null,
									s = [];
								const r = D(e.questions, t);
								for (const o of r)
									for (const e of o.answerOptions) {
										if (!(null === (a = t[o.id]) || void 0 === a ? void 0 : a[e.id])) continue;
										if (!K(e)) continue;
										const r = e.contentRatingTag;
										(!n || n.weight < r.weight) && (n = r), r.weight > 0 && s.push(e)
									}
								if (s = c()(s, e => -e.contentRatingTag.weight), !n) throw new Error("no question was selected!");
								return {
									id: "",
									version: e.version,
									createdAt: Date.now(),
									isFromMod: !0,
									status: O.Pending,
									rating: n,
									ratingReasons: s
								}
							}(r, u)), w === H.Tag) {
							if (j) return;
							return _(Object(T.m)()), await k({
								input: {
									subredditId: s,
									version: r.version,
									answers: D(r.questions, u).map(e => ({
										questionId: e.id,
										answerIds: G(e, u).map(e => e.id)
									}))
								}
							}), x(Object(g.f)(Object(g.e)(q._("Thanks for setting up your Content Tag!", null, {
								hk: "3HW5GV"
							}), I.b.SuccessCommunityGreen))), x({
								type: p.E,
								payload: {
									id: s,
									response: S
								}
							}), void(N || o())
						}
						b("forward"), E ? _(Object(T.i)(E.pageType, G(E, u).map(e => e.id))) : 0 === C && _(Object(T.l)())
					},
					goBack: function() {
						b("back"), E && _(Object(T.b)(E.pageType))
					},
					onClose: o,
					progressCurrent: z ? C - 1 : 0,
					progressTotal: z ? y.length - 1 : 0,
					disableNext: j || w === H.Survey && !R,
					buttonText: U(w)
				}, l.a.createElement("div", {
					className: m.a.result
				}, l.a.createElement("p", {
					className: m.a.heading
				}, q._("Get started with content tags", null, {
					hk: "2WspCv"
				})), q._("{=Not Safe for Work (NSFW) can mean different things to different people, so we're evolving the NSFW tag into more descriptive tags that help people know what to expect when they visit your community.}{=Every public and restricted community will get a content tag, and this survey is your mod team's chance to give your input.}{=Here's how it works:}{=Consult your mod team Only one moderator can take and submit the survey, so consult with your fellow mods before submitting.}{=Take the survey This survey will ask you about how different mature themes are posted about and discussed in your community.}{=Keep doing what you're doing Once you get your tag, you don't need to change anything about your community and how you run it.}{=If you want to learn more or have questions, visit ourcommunity content tags FAQ .}", [q._param("=Not Safe for Work (NSFW) can mean different things to different people, so we're evolving the NSFW tag into more descriptive tags that help people know what to expect when they visit your community.", l.a.createElement("p", {
					className: m.a.introCopy
				}, q._("Not Safe for Work (NSFW) can mean different things to different people, so we're evolving the NSFW tag into more descriptive tags that help people know what to expect when they visit your community.", null, {
					hk: "1Fer1r"
				}))), q._param("=Every public and restricted community will get a content tag, and this survey is your mod team's chance to give your input.", l.a.createElement("p", {
					className: m.a.introCopy
				}, q._("Every public and restricted community will get a content tag, and this survey is your mod team's chance to give your input.", null, {
					hk: "4cgXFP"
				}))), q._param("=Here's how it works:", l.a.createElement("p", {
					className: m.a.introCopy
				}, q._("Here's how it works:", null, {
					hk: "36BNnd"
				}))), q._param("=Consult your mod team Only one moderator can take and submit the survey, so consult with your fellow mods before submitting.", l.a.createElement("p", {
					className: m.a.introCopy
				}, q._("{=Consult your mod team} Only one moderator can take and submit the survey, so consult with your fellow mods before submitting.", [q._param("=Consult your mod team", l.a.createElement("strong", null, q._("Consult your mod team", null, {
					hk: "23H654"
				})))], {
					hk: "jnTSv"
				}))), q._param("=Take the survey This survey will ask you about how different mature themes are posted about and discussed in your community.", l.a.createElement("p", {
					className: m.a.introCopy
				}, q._("{=Take the survey} This survey will ask you about how different mature themes are posted about and discussed in your community.", [q._param("=Take the survey", l.a.createElement("strong", null, q._("Take the survey", null, {
					hk: "2hQ3n7"
				})))], {
					hk: "2KYjT1"
				}))), q._param("=Keep doing what you're doing Once you get your tag, you don't need to change anything about your community and how you run it.", l.a.createElement("p", {
					className: m.a.introCopy
				}, q._("{=Keep doing what you're doing} Once you get your tag, you don't need to change anything about your community and how you run it.", [q._param("=Keep doing what you're doing", l.a.createElement("strong", null, q._("Keep doing what you're doing", null, {
					hk: "3euaLx"
				})))], {
					hk: "4f5ry9"
				}))), q._param("=If you want to learn more or have questions, visit ourcommunity content tags FAQ .", l.a.createElement("p", {
					className: m.a.introCopy
				}, q._("If you want to learn more or have questions, visit our {=community content tags FAQ} .", [q._param("=community content tags FAQ", l.a.createElement("a", {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.reddithelp.com/hc/en-us/articles/360048185132-What-are-community-content-tags-and-how-do-they-work-"
				}, q._("community content tags FAQ", null, {
					hk: "1kl5Jq"
				})))], {
					hk: "4tG83R"
				})))], {
					hk: "2x33OC"
				})), y.map(e => {
					var t;
					return l.a.createElement(P, {
						key: e.id,
						question: e,
						selectedAnswers: null !== (t = u[e.id]) && void 0 !== t ? t : {},
						onChange: F
					})
				}), S && l.a.createElement("div", {
					key: "result",
					className: m.a.result
				}, l.a.createElement("p", {
					className: m.a.heading
				}, q._("Your Content Tag:", null, {
					hk: "2OUAzB"
				})), l.a.createElement(V.a, {
					ratingResponse: S,
					subredditId: s
				}, l.a.createElement("p", {
					className: m.a.ratingAudience
				}, S.rating.name), l.a.createElement("p", {
					className: m.a.ratingDescription
				}, S.rating.description, " ", l.a.createElement("br", null), q._("(Note: Only moderators can see this tag.)", null, {
					hk: "2PN50Z"
				}))), l.a.createElement("p", {
					className: m.a.reasonsHeader
				}, q._("Posts and discussions include:", null, {
					hk: "12MdUE"
				})), l.a.createElement("ul", null, S.ratingReasons.map(e => l.a.createElement("li", {
					key: e.id,
					className: m.a.reason
				}, e.contentRatingReasonText)))))
			}

			function U(e) {
				switch (e) {
					case H.Intro:
						return q._("Start Survey", null, {
							hk: "41dYsT"
						});
					case H.Survey:
						return q._("Next", null, {
							hk: "2mEXAi"
						});
					case H.Tag:
						return q._("Submit", null, {
							hk: "4aU3dh"
						})
				}
			}

			function G(e, t) {
				return e.answerOptions.filter(a => {
					var n;
					return null === (n = t[e.id]) || void 0 === n ? void 0 : n[a.id]
				})
			}

			function D(e, t) {
				let a = [];
				for (const n of null != e ? e : []) {
					const e = G(n, t),
						s = r()(e, e => {
							var t;
							return null !== (t = e.subQuestions) && void 0 !== t ? t : []
						});
					a = [...a, n, ...D(s, t)]
				}
				return a
			}

			function K(e) {
				return "ContentRatingSurveyLeafAnswer" === e.__typename
			}! function(e) {
				e[e.Intro = 0] = "Intro", e[e.Survey = 1] = "Survey", e[e.Tag = 2] = "Tag"
			}(H || (H = {}))
		},
		"./src/reddit/components/ModeratorSurvey/index.m.less": function(e, t, a) {
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
		"./src/reddit/controls/CheckboxInput/index.m.less": function(e, t, a) {
			e.exports = {
				checkboxInput: "_2BPowd18EKTnfZFrj5kY3G",
				disabled: "_303iMx_S0pgrbpYhsYTV6K",
				checkboxSelected: "_2VtQ8EjxlJXdicVJhc73gQ"
			}
		},
		"./src/reddit/controls/CheckboxInput/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/constants/keycodes.ts"),
				c = a("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = a("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = a("./src/reddit/layout/row/Inline/index.tsx"),
				d = a("./src/reddit/controls/CheckboxInput/index.m.less"),
				u = a.n(d);
			t.a = e => {
				const t = e.onChange && !e.disabled ? t => {
						t.key !== o.b.Enter && t.key !== o.b.Space || e.onChange(!e.value)
					} : void 0,
					a = e.onChange && !e.disabled ? () => e.onChange(!e.value) : void 0;
				return s.a.createElement(l.a, {
					"aria-checked": !!e.value,
					"aria-disabled": e.disabled,
					"aria-labelledby": e.name,
					className: Object(r.a)(e.className, u.a.checkboxInput, e.disabled ? u.a.disabled : null),
					onClick: a,
					onKeyPress: t,
					role: "checkbox",
					tabIndex: 0
				}, s.a.createElement("input", {
					value: e.value ? e.value.toString() : "",
					type: "hidden"
				}), e.value ? s.a.createElement(i.a, {
					className: u.a.checkboxSelected
				}) : s.a.createElement(c.a, null), e.children)
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, t, a) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				c = a.n(o);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					...a
				} = e;
				return s.a.createElement("svg", i({
					xmlns: "http://www.w3.org/2000/svg",
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					className: Object(r.a)(c.a.checkbox, t)
				}, a), s.a.createElement("path", {
					fill: "inherit",
					d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), s.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
			}))
		},
		"./src/reddit/icons/svgs/DizzySnoo/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 52 52"
			}, s.a.createElement("path", {
				d: "M19.39,15.71a31.37,31.37,0,0,0-3.08,1.53,2.24,2.24,0,0,1-1.34.23c-4.27-1.06-7.54.28-10,4-2.09,3.17-.74,8,1.58,9.76a2.39,2.39,0,0,1,.91,1.53,12.18,12.18,0,0,0,5,8.87c.16.13.33.24.49.35a25.65,25.65,0,0,0,5.52,2.81A24,24,0,0,0,26.83,46c2.74-.09,5.49-.1,8.06-1.18a22.6,22.6,0,0,0,6.25-4c2.21-2.67,4.31-5.45,4.62-9a11.29,11.29,0,0,1,1.64-4.91,4.66,4.66,0,0,0,.54-1.58c.78-4.68-3.5-9.17-7.84-7.57a3.37,3.37,0,0,1-3-.49,18.33,18.33,0,0,0-7.63-2.81A25.61,25.61,0,0,0,19.39,15.71Z"
			}), s.a.createElement("path", {
				fill: "#fff",
				d: "M42.39,18.88a12.75,12.75,0,0,0-2.48,0c1.76,2.1,3.33,3.86,4,6.23-4-5.95-9.64-9.32-16.71-9.37a19.14,19.14,0,0,0-17,9.06c-.17-.53-.51-1-.38-1.3A9.3,9.3,0,0,1,14,18.94c-3-1.13-6.34.54-8,3.85-1.29,2.58-.52,6.08,1.74,7.5a18.14,18.14,0,0,1,.55-2.24,15.4,15.4,0,0,1,1-1.9.86.86,0,0,1,.07.69,12.41,12.41,0,0,0,.4,8.24,11.06,11.06,0,0,0,3.82,5.31c7.18,5.27,17.21,6.56,25.28.91a13.72,13.72,0,0,0,5.77-10.45c.1-1.13.1-2.26.15-3.4l.3.27c.44-.29,1.12-.49,1.3-.9A6.06,6.06,0,0,0,42.39,18.88Z"
			}), s.a.createElement("path", {
				d: "M19.48,28.09a.73.73,0,0,1,.59-1q1.37.39.64,1.66a1.91,1.91,0,0,1-2.8.67c-2-1.53-.17-4,1.61-4.15a2.88,2.88,0,0,1,3,3.41,3.68,3.68,0,0,1-2.47,2.56,3.86,3.86,0,0,1-5.37-3.12c-.24-2.18,1.25-3.73,3.12-4.49,1.66-.67,5.58.83,4.89.44-2.7-1.49-5.73-2.15-7.86.32a5.19,5.19,0,0,0,.37,7c1.65,1.53,4.28,1.38,6.15.39s3.15-4,1.6-5.89-4.84-2.39-6.4-.19-.52,4.82,2.15,5.12c2,.22,4.63-2.84,2.55-4.43-1.5-1.15-4.32.86-2.79,2.32.48.46,1.46-.13,1-.59Z"
			}), s.a.createElement("path", {
				d: "M35.66,28.69c1.52-1.26.33-3.28-1.64-3.11-2.66.22-1.83,4.41.31,4.94,2.65.66,4.41-1.6,3.67-4.09s-4.31-3.3-6.24-1.53a3.94,3.94,0,0,0-.08,5.78,5.4,5.4,0,0,0,5.93.89c2.34-1.08,2.85-4.35,2-6.51-.54-1.3-1.64-1.74-2.91-2.18a6.19,6.19,0,0,0-4.81.49c-.52.38,3-.45,4.61.24a3.87,3.87,0,0,1,2.4,4.73c-.53,2.68-3.49,3.31-5.66,2.21a3,3,0,0,1,1.5-5.64,2.66,2.66,0,0,1,2,4.18c-1,1.2-2.88.44-3.33-.84a1.29,1.29,0,0,1,.92-1.69c.68-.06,1.14.68.33,1.25C34.08,28.17,34.85,29.36,35.66,28.69Z"
			}), s.a.createElement("path", {
				d: "M27.48,14.55a23.72,23.72,0,0,1-5.89-.24c-2.93-.77-.16-2.12,1-2.52a23.39,23.39,0,0,1,6.7-1c1.71-.05,4.47-.62,5.54,1.06a13.86,13.86,0,0,1-5.86.71c-1.18-.08-4.66-.14-5.34-1.35-.59-1,.88-2.95,1.86-3a11.48,11.48,0,0,1,2.11.15c.67.07.59-.94,0-1A6.33,6.33,0,0,0,23.36,8a2.55,2.55,0,0,0-.27,4.23c2.39,1.83,7.34,1.61,10.07,1.1,1.23-.23,4-.56,2.91-2.43-.68-1.15-2.46-1.07-3.6-1.08a31.33,31.33,0,0,0-11.3,1.47c-2.62,1-3.87,2.91-.4,4a14.5,14.5,0,0,0,4.86.4l1.85-.09C28.1,15.52,28.13,14.52,27.48,14.55Z"
			}), s.a.createElement("path", {
				d: "M30.73,5.14a3.35,3.35,0,0,0-4.43-.85,3,3,0,0,0-.72,3.93c.77,1.16,3.31,1.48,4.39.7A2.63,2.63,0,0,0,30.73,5.14Z"
			}), s.a.createElement("path", {
				fill: "#fff",
				d: "M29.34,7.94c-.52.7-1.71.34-2.39.11-1-.34-1-2.35-.18-2.9a1.79,1.79,0,0,1,2.23,0,2.34,2.34,0,0,1,1,1.18C30.21,6.87,29.61,7.57,29.34,7.94Z"
			}), s.a.createElement("path", {
				d: "M31.51,35.16c-5.18.72-4.85-2.84-9.7-1.22-3,1-3,4.65-.45,6.32,3.2,2.09,9.08.72,11,.24C36.87,39.38,36.72,34.43,31.51,35.16Z"
			}))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, s.a.createElement("g", null, s.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), s.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M15.75,7.834625 L12,4.084625 L12.808,3.276625 C13.8435,2.241125 15.5225,2.241125 16.558,3.276625 C17.5935,4.312125 17.5935,5.991125 16.558,7.026625 L15.75,7.834625 Z M11.366,5 L15.116,8.75 L7.25,16.616 L3.5,12.866 L11.366,5 Z M2.5035,13.5 L6.1125,17.109 L1,18.6125 L2.5035,13.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, a) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				c = a.n(o);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", i({}, e, {
				className: Object(r.a)(c.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement("g", null, s.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Snoo/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/reddit/constants/colors.ts");
			t.a = e => s.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				className: e.className
			}, s.a.createElement("g", null, s.a.createElement("circle", {
				fill: r.a.snoo,
				cx: "10",
				cy: "10",
				r: "10"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
			})))
		},
		"./src/reddit/icons/svgs/SnooFacepalm/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				fill: "#000",
				d: "M5.1 3.2c.5.3 1.1.3 1.7.1 1.4-.5 2.9-.9 4.5-.7 1.2.2 1.8.2 2.3.4 1 .4 2 .9 3 1.4.5.3 1 .8 1.5 1.2.2.2.5.4.7.4 2.4-.1 4.1 1 5 3.3.8 2-.5 4.5-2 5.1-.3.1-.6.4-.7.7-.6 2-1.9 3.3-3.7 4.2-.1.1-.2.1-.3.1-.7.3-3.9 1.7-7.9 1-4.8-.9-9.3-4.6-8.7-10.2.1-1 0-1.9-.3-2.9-.2-.2-.2-.5-.2-.8.1-2.7 2.9-4.6 5.1-3.3z"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M.7 7.5c.4 1.3.7.5.8.5-.1.6-.3 1.3-.3 1.9-.3 2.4.3 4.6 1.9 6.3 3.7 4 8.5 4.6 13.2 2.7 1.2-.5 2.6-1.7 3.3-2.8.8-1.4 1.3-2.8 1.2-4.4 0-.1 0-.2.1-.4.1.4.3.8.3 1.1.1.4 0 .8 0 1.3 1.4-.5 2.2-2.3 1.8-3.9-.5-2-2.1-3.3-3.9-3 .9.8 1.6 3.3 1.4 3.6-1.5-3.8-4.4-6.1-8.2-6.8-3.8-.8-7.2.4-10.1 3.2.6-1.2 1.7-2 2.9-2.9-.6-.1-1-.3-1.4-.3-1.8.1-3.5 2.1-3 3.9z"
			}), s.a.createElement("path", {
				fill: "#000",
				d: "M7.2 16.7c1.4.6 2.9.9 4.4 1 .6 0 1.3-.4.3-.5-1.2-.1-2.4-.3-3.5-.8-.3-.1-.7-.1-1 0-.1 0-.5.2-.2.3zM7.3 13.4c-.1 0-.2-.1-.3-.2-.1-.2-.2-.4-.4-.6-.6-.6-1.4-1.1-2.2-.9-.3.1-.5.2-.8.2h-.5c0-.1-.1-.3 0-.4.2-.2.5-.3.6-.4 1.6-.6 3.7.6 3.9 1.7v.3c0 .3-.2.3-.3.3zm9.8 1.1c-.1 0-.3 0-.4-.1-.1 0-.1-.1-.2-.1-.7-.5-1.5-.5-2.3 0-.2.1-.5.2-.7.3 0-.2 0-.4.1-.6.6-.6 1.7-.8 2.7-.5.3.1.7.5.9.8.1 0 0 .2-.1.2z"
			}), s.a.createElement("path", {
				fill: "#000",
				d: "M16.1 20.7c-2-.2-2.7-.9-2.9-2.5-.1-.9-.3-1.6-.7-2.4-.4-.9-.5-1.4-1.5-1.7-1.3-.5-1.9-1.6-2-2.6 0-.8.2-1.7.8-2.3 1.1-1.1 2.9-1.1 4.2-.5 1.3.6 3.8 3.2 4.3 4.5 1.6 4.2.8 7.2-2.2 7.5zM12 5.6c.1.2.1.7.6.5.4-.1.4-.6-.2-1.6-.3-.6-.5-1.6 0-2.2 1-1.3 2.3-1 3.5-.7.4.1 1.5.3 1.5.8 0 .7.6 1.8 1.2 2.2 1.2 1 3.5-.1 3.5-1.8 0-1.5-1.1-2.7-2.5-2.6-.6 0-1.6.7-2 1.2-.6-.2-1.2-.4-1.9-.5-1.3-.3-2.6-.3-3.7.7-1.2 1.1-.8 2.9 0 4-.1-.1-.2-.2-.3-.4.1.1.2.3.3.4.1.1-.6-.9 0 0z"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M21.3 3.1c-.2.5-.6.9-1 1-.4.1-.9 0-1.3-.3s-.7-.7-.7-1.1c0-.2 0-.8.8-1.4.5-.4 1.4 0 1.9.4.2.4.5.8.3 1.4zM18 14.6c-.5-2.5-3.8-6.4-6.8-5.3-1.4.5-1.7 2.4-.8 3.5.7.8 2.1 1.2 3 1.6-.3 0-.6.1-.9 0 1.2 1.6.6 4.7 2.8 5.2 2.5.7 3.4-1.7 2.7-5z"
			}))
		},
		"./src/reddit/icons/svgs/SnooHappy/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 25",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				fill: "#000",
				d: "M19.7 9.4c-.6.2-1.1 0-1.6-.3-1.3-.8-2.6-1.4-4.2-1.5-1.2-.1-1.8-.1-2.3 0-1.1.2-2.2.4-3.2.7-.6.2-1.1.6-1.7.8-.2.1-.5.2-.7.2-2.3-.6-4.1.2-5.4 2.2-1.1 1.7-.4 4.4.9 5.3.2.2.5.5.5.8.1 2.1 1.2 3.6 2.7 4.8.1.1.2.1.3.2.6.4 1.9 1.2 3 1.5 1.5.5 3 .7 4.5.7 1.5-.1 3-.1 4.4-.6.4-.2 2.3-1.1 3.4-2.2 1.2-1.5 2.3-3 2.5-4.9.1-1 .4-1.8.9-2.7.2-.3.2-.6.3-.9.4-2.5-2-5-4.3-4.1z"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M20.9 10c-.4-.1-.8 0-1.4 0 1 1.1 1.8 2.1 2.2 3.4-2.2-3.2-5.3-5.1-9.1-5.1s-7 1.6-9.2 4.9c-.1-.3-.3-.6-.2-.7.5-1 1.2-1.9 2.3-2.5-1.7-.5-3.5.4-4.4 2.2-.7 1.4-.3 3.3.9 4.1l.3-1.2c.1-.4.4-.7.6-1 .1.2.1.3 0 .4-.5 1.5-.3 3 .2 4.5.5 1 1.1 2 2.1 2.8 3.9 2.9 9.4 3.6 13.8.5 1.9-1.3 2.9-3.3 3.1-5.7.1-.6.1-1.2.1-1.8.1 0 .1.1.2.1.2-.2.6-.3.7-.5.7-1.7-.4-3.9-2.2-4.4z"
			}), s.a.createElement("path", {
				fill: "#000",
				d: "M10.1 15.4s-.3-.1-.4-.2l-.6-.6c-.8-.5-1.6-.3-2.2.5-.2.3-.3.5-.5.8-.1.1-.3.2-.5.3-.1-.2-.2-.4-.2-.6.1-.4.3-.7.3-.9 1.1-1.7 3.3-1.8 4.1-.3.1.2.2.3.2.5s-.1.4-.2.5zm3.1 6.5c-2.3 0-4-1.6-4.4-3.4 0-.1.3-.4.6-.5 2-.8 5-1.1 7.2-.4.2.1.5.2.5.3 0 .1-.3.2-.3.3-.4 1.7-1.5 3.7-3.6 3.7zm5.9-6.5c-.1 0-.3-.1-.4-.2-.1 0-.1-.1-.1-.2-.6-.9-1.4-1-2.2-.3-.2.2-.5.2-.7.4.1-.3 0-.7.2-.9.7-.9 1.8-1.1 2.7-.5.2.2.6.9.8 1.4-.1.1-.2.3-.3.3zM16.6.5c-.5-.4-1.4-.7-2.3-.2-.4.2-.7.5-.8.7-.2.7-.2 1.1-.1 1.5-1 1-2.2 1.6-3.6 1.7-.2 0-.4.2-.4.4-.1.5.1.9.4 1.4.5.7.7 1.2.9 1.9V8c.1.2.2.2.4.2.1 0 .2-.1.3-.1.1-.1.1-.2.1-.3v-.2c0-.1-.1-.3-.1-.4-.1-.3-.2-.6-.3-.8-.1-.2-.2-.3-.3-.4-.1-.3-.3-.8-.3-1.1.5-.1 1.1-.2 1.6-.5.4-.2.7-.5 1-.8.2-.2.3-.3.5-.4.4.5.8.7 1.6.8h.2c.4 0 .9-.2 1.3-.5s.6-.8.6-1.4c.1-.6-.2-1.2-.7-1.6z"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M14 1.9c-.1-.6.4-1.1 1.1-1.2.8-.1 1.4.3 1.5 1 .1.7-.5 1.5-1.1 1.6-.7.1-1.4-.6-1.5-1.4z"
			}))
		},
		"./src/reddit/icons/svgs/SparkleGradient/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);

			function r(e) {
				return s.a.createElement("svg", {
					className: e.className,
					style: e.style,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 12 12"
				}, s.a.createElement("path", {
					d: "M6.47.828a.5.5 0 00-.94 0L4.268 4.267.827 5.53a.5.5 0 000 .938l3.44 1.264 1.264 3.44a.5.5 0 00.938 0l1.264-3.44 3.44-1.264a.5.5 0 000-.938l-3.44-1.264L6.47.827z",
					fill: "url(#bluePinkGradient)",
					stroke: "#fff",
					strokeLinejoin: "round"
				}), s.a.createElement("defs", null, s.a.createElement("linearGradient", {
					id: "bluePinkGradient",
					x1: "1",
					y1: "11",
					x2: "11.01",
					y2: "10.99",
					gradientUnits: "userSpaceOnUse"
				}, s.a.createElement("stop", {
					stopColor: "#6A5CFF"
				}), s.a.createElement("stop", {
					offset: "1",
					stopColor: "#E4ABFF"
				}))))
			}
		},
		"./src/reddit/icons/svgs/Subreddit/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				fill: "#737577",
				d: "M10 .38a9.62 9.62 0 100 19.24A9.62 9.62 0 0010 .38zm0 18A8.381 8.381 0 1114.6 3L9.41 15.55h1.35l4.87-11.73A8.36 8.36 0 0110 18.38z"
			}), s.a.createElement("path", {
				fill: "#737577",
				d: "M10.68 7.87l.66-1.56a1.649 1.649 0 00-.46-.15 3 3 0 00-.7-.07c-.502-.01-1 .09-1.46.29-.38.18-.72.436-1 .75V6.2H6.13v7.3h1.61V9.3A1.71 1.71 0 018 8.43a1.64 1.64 0 01.66-.59 2.12 2.12 0 011-.22 2.08 2.08 0 011.02.25z"
			}))
		},
		"./src/reddit/icons/svgs/Unlock/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 17",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.9656 14.8328L13.6 13.4672V8.99847C13.6 8.55608 13.2416 8.19848 12.8 8.19848H12V6.59849C12 4.39291 10.2056 2.59853 8 2.59853C6.5712 2.59853 5.328 3.35852 4.624 4.49131L2.1656 2.03294C1.8528 1.72014 1.3472 1.72014 1.0344 2.03294C0.721605 2.34573 0.721605 2.85133 1.0344 3.16413L13.8344 15.964C13.9904 16.12 14.1952 16.1984 14.4 16.1984C14.6048 16.1984 14.8096 16.12 14.9656 15.964C15.2784 15.6512 15.2784 15.1456 14.9656 14.8328ZM4 8.19859H3.2C2.7584 8.19859 2.4 8.55619 2.4 8.99859V14.5986C2.4 15.041 2.7584 15.3986 3.2 15.3986H11.6688L4 7.72979V8.19859ZM10.4 6.59854C10.4 5.27534 9.32319 4.19854 7.99999 4.19854C7.00959 4.19854 6.15839 4.80174 5.79199 5.65934L8.33119 8.19853H10.4V6.59854Z"
			}))
		},
		"./src/reddit/icons/svgs/Wordmark/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/CSSVariableProvider/withTheme.tsx"),
				o = a("./src/reddit/constants/colors.ts"),
				c = a("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = Object(r.a)(e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 57 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: e.color || Object(c.a)(e).bodyText
			}, s.a.createElement("path", {
				d: "M54.63,16.52V7.68h1a1,1,0,0,0,1.09-1V6.65a1,1,0,0,0-.93-1.12H54.63V3.88a1.23,1.23,0,0,0-1.12-1.23,1.2,1.2,0,0,0-1.27,1.11V5.55h-1a1,1,0,0,0-1.09,1v.07a1,1,0,0,0,.93,1.12h1.13v8.81a1.19,1.19,0,0,0,1.19,1.19h0a1.19,1.19,0,0,0,1.25-1.12A.17.17,0,0,0,54.63,16.52Z"
			}), s.a.createElement("circle", {
				fill: o.a.snoo,
				cx: "47.26",
				cy: "3.44",
				r: "2.12"
			}), s.a.createElement("path", {
				d: "M48.44,7.81a1.19,1.19,0,1,0-2.38,0h0v8.71a1.19,1.19,0,0,0,2.38,0Z"
			}), s.a.createElement("path", {
				d: "M30.84,1.19A1.19,1.19,0,0,0,29.65,0h0a1.19,1.19,0,0,0-1.19,1.19V6.51a4.11,4.11,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S22.28,18,25.42,18a4.26,4.26,0,0,0,3.1-1.23,1.17,1.17,0,0,0,1.47.8,1.2,1.2,0,0,0,.85-1.05ZM25.41,15.64c-1.83,0-3.32-1.77-3.32-4s1.48-4,3.32-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"
			}), s.a.createElement("path", {
				d: "M43.28,1.19A1.19,1.19,0,0,0,42.09,0h0a1.18,1.18,0,0,0-1.18,1.19h0V6.51a4.15,4.15,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S34.72,18,37.86,18A4.26,4.26,0,0,0,41,16.77a1.17,1.17,0,0,0,1.47.8,1.19,1.19,0,0,0,.85-1.05ZM37.85,15.64c-1.83,0-3.31-1.77-3.31-4s1.47-4,3.31-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"
			}), s.a.createElement("path", {
				d: "M17.27,12.44a1.49,1.49,0,0,0,1.59-1.38v-.15a4.81,4.81,0,0,0-.1-.85A5.83,5.83,0,0,0,13.25,5.3c-3.1,0-5.69,2.85-5.69,6.35S10.11,18,13.25,18a5.66,5.66,0,0,0,4.39-1.84,1.23,1.23,0,0,0-.08-1.74l-.11-.09a1.29,1.29,0,0,0-1.58.17,3.91,3.91,0,0,1-2.62,1.12A3.54,3.54,0,0,1,10,12.44h7.27Zm-4-4.76a3.41,3.41,0,0,1,3.09,2.64H10.14A3.41,3.41,0,0,1,13.24,7.68Z"
			}), s.a.createElement("path", {
				d: "M7.68,6.53a1.19,1.19,0,0,0-1-1.18A4.56,4.56,0,0,0,2.39,6.91V6.75A1.2,1.2,0,0,0,0,6.75v9.77a1.23,1.23,0,0,0,1.12,1.24,1.19,1.19,0,0,0,1.26-1.1.66.66,0,0,0,0-.14v-5A3.62,3.62,0,0,1,5.81,7.7a4.87,4.87,0,0,1,.54,0h.24A1.18,1.18,0,0,0,7.68,6.53Z"
			}))))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, a) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./src/lib/lessComponent.tsx"),
				s = a("./src/reddit/layout/row/Inline/index.m.less"),
				r = a.n(s);
			t.a = n.a.div("inlineRow", r.a)
		},
		"./src/redditGQL/operations/SubmitContentRatingSurvey.json": function(e) {
			e.exports = JSON.parse('{"id":"8cd4e428e688"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/5.64092e4c1d48b31e86e2.js.map