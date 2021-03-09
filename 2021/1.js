// https://www.redditstatic.com/desktop2x/1.9e0d37e71b505a642c62.js
// Retrieved at 3/9/2021, 6:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[1], {
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
				d = n("./src/reddit/hooks/useTheme.ts"),
				u = n("./src/reddit/icons/svgs/Info/index.tsx"),
				m = n("./src/reddit/models/Theme/index.ts"),
				h = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				v = n("./src/reddit/selectors/subreddit.ts");
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function g(e) {
				var t, n;
				const {
					ratingResponse: a,
					subredditId: o,
					children: g
				} = e, y = null !== (t = Object(r.e)(e => Object(v.T)(e, {
					subredditId: o
				}))) && void 0 !== t ? t : {}, b = Object(d.a)();
				return s.a.createElement("div", {
					className: i.a.ratingCard
				}, "PENDING" === (null == a ? void 0 : a.status) && s.a.createElement("div", {
					className: Object(c.a)(i.a.card, i.a.pending)
				}, s.a.createElement(u.a, {
					className: i.a.infoIcon
				}), p._("Content tag is pending until reviewed", null, {
					hk: "Umha7"
				})), s.a.createElement("div", {
					className: i.a.card
				}, s.a.createElement("div", {
					className: i.a.banner,
					style: {
						background: Object(m.g)(Object(h.a)({
							theme: b
						}).banner.backgroundColor, Object(h.a)({
							theme: b
						}).banner.backgroundImage, Object(h.a)({
							theme: b
						}).banner.backgroundImagePosition)
					}
				}, s.a.createElement(l.b, {
					className: i.a.communityIcon,
					iconUrl: null === (n = y.icon) || void 0 === n ? void 0 : n.url
				})), s.a.createElement("h3", {
					className: i.a.communityName
				}, a ? s.a.createElement("span", null, y.displayText, s.a.createElement("img", {
					className: i.a.ratingImg,
					src: a.rating.icon.png
				})) : y.displayText), g))
			}
		},
		"./src/reddit/components/ContentSurvey/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "default", (function() {
				return H
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
				h = n("./src/lib/sentry/index.ts"),
				v = n("./src/reddit/actions/subreddit/constants.ts"),
				p = n("./src/reddit/actions/toaster.ts"),
				g = n("./node_modules/fbt/lib/FbtPublic.js"),
				y = n("./node_modules/lodash/range.js"),
				b = n.n(y),
				f = n("./src/reddit/components/ModeratorSurvey/index.m.less"),
				x = n.n(f),
				w = n("./src/lib/classNames/index.ts");
			var _ = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				E = n("./src/reddit/controls/Button/index.tsx"),
				k = n("./src/reddit/controls/TextButton/index.tsx"),
				N = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				j = n("./src/reddit/icons/svgs/svgIcons.tsx");

			function C(e) {
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
				}(t), h = m.length, v = h > 1 && n > 0, p = null != a ? a : n + 1, y = null != s ? s : h;
				return l.a.createElement("div", {
					className: x.a.container
				}, l.a.createElement("div", {
					className: x.a.header
				}, v ? l.a.createElement(k.a, {
					className: x.a.headerButton,
					onClick: d
				}, l.a.createElement(j.f, {
					className: x.a.backIcon
				}), l.a.createElement("div", null, g.fbt._("Back", null, {
					hk: "39TCGR"
				}))) : l.a.createElement(k.a, {
					className: x.a.headerButton,
					onClick: u
				}, l.a.createElement(_.b, null), l.a.createElement("div", null, g.fbt._("Close", null, {
					hk: "4gbyAA"
				}))), l.a.createElement(N.a, {
					className: x.a.snoo
				})), l.a.createElement("div", {
					className: x.a.slides,
					style: {
						transform: `translateX(${-600*n}px)`
					}
				}, m.map((e, t) => l.a.createElement("div", {
					key: t,
					className: x.a.slide,
					"aria-hidden": n !== t,
					"aria-current": n === t
				}, e))), l.a.createElement("div", {
					className: x.a.footer
				}, l.a.createElement("div", {
					className: x.a.progressBar
				}, y > 1 && b()(y).map((e, t) => l.a.createElement("div", {
					key: t,
					className: Object(w.a)(x.a.progressSegment, {
						[x.a.active]: t < p
					})
				}))), l.a.createElement("div", {
					className: x.a.progress
				}, y > 1 ? g.fbt._("{current} of {total}", [g.fbt._param("current", p), g.fbt._param("total", y)], {
					hk: "pZU46"
				}) : ""), l.a.createElement(E.q, {
					redditStyle: !0,
					className: x.a.footerButton,
					onClick: i,
					disabled: r
				}, null != o ? o : n === h - 1 ? g.fbt._("Submit", null, {
					hk: "194VZ0"
				}) : g.fbt._("Next", null, {
					hk: "3WmYcd"
				}))))
			}
			var S = n("./src/graphql/operations/SubmitContentRatingSurvey.json"),
				O = n("./src/lib/makeGqlRequest/index.ts");
			var T, I = (e, t) => Object(O.a)(e, {
					...S,
					variables: t
				}),
				L = n("./src/reddit/helpers/trackers/contentTag.ts"),
				A = n("./src/reddit/hooks/useMutation.ts"),
				M = n("./src/reddit/hooks/useTracking.ts");
			! function(e) {
				e.Accepted = "ACCEPTED", e.Pending = "PENDING"
			}(T || (T = {}));
			var B = n("./src/reddit/models/Toast/index.ts"),
				R = n("./node_modules/lodash/mapValues.js"),
				Z = n.n(R),
				F = n("./src/reddit/controls/CheckboxInput/index.tsx");

			function P({
				children: e
			}) {
				return l.a.createElement(l.a.Fragment, null, (t = e, t.split(/\*+/)).map((e, t) => t % 2 == 1 ? l.a.createElement("em", {
					key: t
				}, e) : e));
				var t
			}

			function q({
				question: e,
				selectedAnswers: t,
				onChange: n
			}) {
				return l.a.createElement("div", null, l.a.createElement("h3", {
					className: m.a.header
				}, l.a.createElement(P, null, e.questionTextMarkdown)), e.answerOptions.map(a => l.a.createElement(F.a, {
					key: a.id,
					name: a.id,
					className: m.a.checkbox,
					value: t[a.id],
					onChange: s => (function(a, s) {
						const r = a.id;
						if (a.isMutuallyExclusive) return n(e.id, {
							[r]: s
						});
						if (s) {
							const a = e.answerOptions.filter(e => e.isMutuallyExclusive).map(e => e.id),
								s = Z()(t, (e, t) => !a.includes(t) && e);
							return s[r] = !0, n(e.id, s)
						}
						const {
							[r]: o, ...i
						} = t;
						n(e.id, i)
					})(a, s)
				}, l.a.createElement("span", {
					id: a.id
				}, a.answerText))))
			}
			var V = n("./src/reddit/components/ContentSurvey/RatingCard.tsx");
			const {
				fbt: W
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var D;

			function H(e) {
				var t, n;
				const {
					subredditId: s,
					survey: r,
					onClose: o = (() => {})
				} = e, [u, g] = Object(c.useState)({}), y = Object(d.d)(), b = Q(null == r ? void 0 : r.questions, u), [{
					surveyState: f,
					activeSlide: x
				}, w] = Object(c.useReducer)(({
					activeSlide: e
				}, t) => {
					const n = "forward" === t ? Math.min(e + 1, b.length + 1) : Math.max(e - 1, 0);
					return {
						surveyState: 0 === n ? D.Intro : n === b.length + 1 ? D.Tag : D.Survey,
						activeSlide: n
					}
				}, {
					surveyState: D.Intro,
					activeSlide: 0
				}), _ = b[x - 1], E = Object(M.a)();
				Object(c.useEffect)(() => {
					switch (x) {
						case 0:
							return E(Object(L.c)());
						case 1:
							return E(Object(L.e)());
						case b.length + 1:
							return E(Object(L.n)())
					}
					if (_) return E(Object(L.j)(_.pageType))
				}, [x, E]);
				const [k, {
					pending: N,
					error: j
				}] = Object(A.a)(I);
				Object(c.useEffect)(() => {
					j && (h.c.captureException(j), y(Object(p.e)(Object(p.d)(W._("An error occurred", null, {
						hk: "1VDETi"
					}), B.b.Error))))
				}, [j, y]);
				const [S, O] = Object(c.useState)(null);
				if (!r) return null;
				if (!r.isEligible) return null;

				function R(e, t) {
					g(Object(a.setIn)(u, [e], t)), E(Object(L.a)(_.pageType))
				}
				const Z = null !== (t = u[null == _ ? void 0 : _.id]) && void 0 !== t ? t : {},
					F = (null !== (n = null == _ ? void 0 : _.answerOptions) && void 0 !== n ? n : []).map(e => e.id).some(e => Z[e]),
					P = f === D.Survey && x > 1;
				return l.a.createElement(C, {
					activeSlide: x,
					advance: async function() {
						if (f === D.Survey && x === b.length && O(function(e, t) {
								var n;
								let a = null,
									s = [];
								const r = Q(e.questions, t);
								for (const o of r)
									for (const e of o.answerOptions) {
										if (!(null === (n = t[o.id]) || void 0 === n ? void 0 : n[e.id])) continue;
										if (!X(e)) continue;
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
							}(r, u)), f === D.Tag) {
							if (N) return;
							return E(Object(L.m)()), await k({
								input: {
									subredditId: s,
									version: r.version,
									answers: Q(r.questions, u).map(e => ({
										questionId: e.id,
										answerIds: U(e, u).map(e => e.id)
									}))
								}
							}), y(Object(p.e)(Object(p.d)(W._("Thanks for setting up your Content Tag!", null, {
								hk: "3HW5GV"
							}), B.b.SuccessCommunityGreen))), y({
								type: v.x,
								payload: {
									id: s,
									response: S
								}
							}), void(j || o())
						}
						w("forward"), _ ? E(Object(L.i)(_.pageType, U(_, u).map(e => e.id))) : 0 === x && E(Object(L.l)())
					},
					goBack: function() {
						w("back"), _ && E(Object(L.b)(_.pageType))
					},
					onClose: o,
					progressCurrent: P ? x - 1 : 0,
					progressTotal: P ? b.length - 1 : 0,
					disableNext: N || f === D.Survey && !F,
					buttonText: K(f)
				}, l.a.createElement("div", {
					className: m.a.result
				}, l.a.createElement("p", {
					className: m.a.heading
				}, W._("Get started with content tags", null, {
					hk: "2WspCv"
				})), W._("{=Not Safe for Work (NSFW) can mean different things to different people, so we're evolving the NSFW tag into more descriptive tags that help people know what to expect when they visit your community.}{=Every public and restricted community will get a content tag, and this survey is your mod team's chance to give your input.}{=Here's how it works:}{=Consult your mod team Only one moderator can take and submit the survey, so consult with your fellow mods before submitting.}{=Take the survey This survey will ask you about how different mature themes are posted about and discussed in your community.}{=Keep doing what you're doing Once you get your tag, you don't need to change anything about your community and how you run it.}{=If you want to learn more or have questions, visit ourcommunity content tags FAQ .}", [W._param("=Not Safe for Work (NSFW) can mean different things to different people, so we're evolving the NSFW tag into more descriptive tags that help people know what to expect when they visit your community.", l.a.createElement("p", {
					className: m.a.introCopy
				}, W._("Not Safe for Work (NSFW) can mean different things to different people, so we're evolving the NSFW tag into more descriptive tags that help people know what to expect when they visit your community.", null, {
					hk: "1Fer1r"
				}))), W._param("=Every public and restricted community will get a content tag, and this survey is your mod team's chance to give your input.", l.a.createElement("p", {
					className: m.a.introCopy
				}, W._("Every public and restricted community will get a content tag, and this survey is your mod team's chance to give your input.", null, {
					hk: "4cgXFP"
				}))), W._param("=Here's how it works:", l.a.createElement("p", {
					className: m.a.introCopy
				}, W._("Here's how it works:", null, {
					hk: "36BNnd"
				}))), W._param("=Consult your mod team Only one moderator can take and submit the survey, so consult with your fellow mods before submitting.", l.a.createElement("p", {
					className: m.a.introCopy
				}, W._("{=Consult your mod team} Only one moderator can take and submit the survey, so consult with your fellow mods before submitting.", [W._param("=Consult your mod team", l.a.createElement("strong", null, W._("Consult your mod team", null, {
					hk: "23H654"
				})))], {
					hk: "jnTSv"
				}))), W._param("=Take the survey This survey will ask you about how different mature themes are posted about and discussed in your community.", l.a.createElement("p", {
					className: m.a.introCopy
				}, W._("{=Take the survey} This survey will ask you about how different mature themes are posted about and discussed in your community.", [W._param("=Take the survey", l.a.createElement("strong", null, W._("Take the survey", null, {
					hk: "2hQ3n7"
				})))], {
					hk: "2KYjT1"
				}))), W._param("=Keep doing what you're doing Once you get your tag, you don't need to change anything about your community and how you run it.", l.a.createElement("p", {
					className: m.a.introCopy
				}, W._("{=Keep doing what you're doing} Once you get your tag, you don't need to change anything about your community and how you run it.", [W._param("=Keep doing what you're doing", l.a.createElement("strong", null, W._("Keep doing what you're doing", null, {
					hk: "3euaLx"
				})))], {
					hk: "4f5ry9"
				}))), W._param("=If you want to learn more or have questions, visit ourcommunity content tags FAQ .", l.a.createElement("p", {
					className: m.a.introCopy
				}, W._("If you want to learn more or have questions, visit our {=community content tags FAQ} .", [W._param("=community content tags FAQ", l.a.createElement("a", {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.reddithelp.com/hc/en-us/articles/360048185132-What-are-community-content-tags-and-how-do-they-work-"
				}, W._("community content tags FAQ", null, {
					hk: "1kl5Jq"
				})))], {
					hk: "4tG83R"
				})))], {
					hk: "2x33OC"
				})), b.map(e => {
					var t;
					return l.a.createElement(q, {
						key: e.id,
						question: e,
						selectedAnswers: null !== (t = u[e.id]) && void 0 !== t ? t : {},
						onChange: R
					})
				}), S && l.a.createElement("div", {
					key: "result",
					className: m.a.result
				}, l.a.createElement("p", {
					className: m.a.heading
				}, W._("Your Content Tag:", null, {
					hk: "2OUAzB"
				})), l.a.createElement(V.a, {
					ratingResponse: S,
					subredditId: s
				}, l.a.createElement("p", {
					className: m.a.ratingAudience
				}, S.rating.name), l.a.createElement("p", {
					className: m.a.ratingDescription
				}, S.rating.description, " ", l.a.createElement("br", null), W._("(Note: Only moderators can see this tag.)", null, {
					hk: "2PN50Z"
				}))), l.a.createElement("p", {
					className: m.a.reasonsHeader
				}, W._("Posts and discussions include:", null, {
					hk: "12MdUE"
				})), l.a.createElement("ul", null, S.ratingReasons.map(e => l.a.createElement("li", {
					key: e.id,
					className: m.a.reason
				}, e.contentRatingReasonText)))))
			}

			function K(e) {
				switch (e) {
					case D.Intro:
						return W._("Start Survey", null, {
							hk: "41dYsT"
						});
					case D.Survey:
						return W._("Next", null, {
							hk: "3WmYcd"
						});
					case D.Tag:
						return W._("Submit", null, {
							hk: "2tgWd9"
						})
				}
			}

			function U(e, t) {
				return e.answerOptions.filter(n => {
					var a;
					return null === (a = t[e.id]) || void 0 === a ? void 0 : a[n.id]
				})
			}

			function Q(e, t) {
				let n = [];
				for (const a of null != e ? e : []) {
					const e = U(a, t),
						s = r()(e, e => {
							var t;
							return null !== (t = e.subQuestions) && void 0 !== t ? t : []
						});
					n = [...n, a, ...Q(s, t)]
				}
				return n
			}

			function X(e) {
				return "ContentRatingSurveyLeafAnswer" === e.__typename
			}! function(e) {
				e[e.Intro = 0] = "Intro", e[e.Survey = 1] = "Survey", e[e.Tag = 2] = "Tag"
			}(D || (D = {}))
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
		"./src/reddit/hooks/useTheme.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var a = n("./node_modules/react/index.js"),
				s = n("./src/lib/CSSVariableProvider/index.tsx");

			function r() {
				return Object(a.useContext)(s.b)
			}
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
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/Inline/index.m.less"),
				r = n.n(s);
			t.a = a.a.div("inlineRow", r.a)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/1.9e0d37e71b505a642c62.js.map