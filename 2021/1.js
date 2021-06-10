// https://www.redditstatic.com/desktop2x/1.1b356176e9a941edc8a3.js
// Retrieved at 6/10/2021, 5:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[1], {
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var n = Math.ceil,
				a = Math.max;
			e.exports = function(e, t, r, s) {
				for (var o = -1, i = a(n((t - e) / (r || 1)), 0), c = Array(i); i--;) c[s ? i : ++o] = e, e += r;
				return c
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var a = n("./node_modules/lodash/_baseRange.js"),
				r = n("./node_modules/lodash/_isIterateeCall.js"),
				s = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, o) {
					return o && "number" != typeof o && r(t, n, o) && (n = o = void 0), t = s(t), void 0 === n ? (n = t, t = 0) : n = s(n), o = void 0 === o ? t < n ? 1 : -1 : s(o), a(t, n, o, e)
				}
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, n) {
			var a = n("./node_modules/lodash/_baseFlatten.js"),
				r = n("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return a(r(e, t), 1)
			}
		},
		"./node_modules/lodash/range.js": function(e, t, n) {
			var a = n("./node_modules/lodash/_createRange.js")();
			e.exports = a
		},
		"./src/reddit/components/ContentSurvey/RatingCard.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/components/ContentSurvey/index.m.less"),
				i = n.n(o),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				d = n("./src/reddit/hooks/useTheme.ts"),
				u = n("./src/reddit/icons/svgs/Info/index.tsx"),
				m = n("./src/reddit/models/Theme/index.ts"),
				h = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				p = n("./src/reddit/selectors/subreddit.ts");
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function g(e) {
				var t, n;
				const {
					ratingResponse: a,
					subredditId: o,
					children: g
				} = e, v = null !== (t = Object(s.e)(e => Object(p.U)(e, {
					subredditId: o
				}))) && void 0 !== t ? t : {}, b = Object(d.a)();
				return r.a.createElement("div", {
					className: i.a.ratingCard
				}, "PENDING" === (null == a ? void 0 : a.status) && r.a.createElement("div", {
					className: Object(c.a)(i.a.card, i.a.pending)
				}, r.a.createElement(u.a, {
					className: i.a.infoIcon
				}), y._("Content tag is pending until reviewed", null, {
					hk: "Umha7"
				})), r.a.createElement("div", {
					className: i.a.card
				}, r.a.createElement("div", {
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
				}, r.a.createElement(l.b, {
					className: i.a.communityIcon,
					iconUrl: null === (n = v.icon) || void 0 === n ? void 0 : n.url
				})), r.a.createElement("h3", {
					className: i.a.communityName
				}, a ? r.a.createElement("span", null, v.displayText, r.a.createElement("img", {
					className: i.a.ratingImg,
					src: a.rating.icon.png
				})) : v.displayText), g))
			}
		},
		"./src/reddit/components/ContentSurvey/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "default", (function() {
				return U
			}));
			var a = n("./node_modules/icepick/icepick.js"),
				r = n("./node_modules/lodash/flatMap.js"),
				s = n.n(r),
				o = n("./node_modules/lodash/sortBy.js"),
				i = n.n(o),
				c = n("./node_modules/react/index.js"),
				l = n.n(c),
				d = n("./node_modules/react-redux/es/index.js"),
				u = n("./src/reddit/components/ContentSurvey/index.m.less"),
				m = n.n(u),
				h = n("./src/lib/sentry/index.ts"),
				p = n("./src/reddit/actions/subreddit/constants.ts"),
				y = n("./src/reddit/actions/toaster.ts"),
				g = n("./node_modules/fbt/lib/FbtPublic.js"),
				v = n("./node_modules/lodash/range.js"),
				b = n.n(v),
				f = n("./src/reddit/components/ModeratorSurvey/index.m.less"),
				_ = n.n(f),
				x = n("./src/lib/classNames/index.ts");
			var k = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				w = n("./src/reddit/controls/Button/index.tsx"),
				E = n("./src/reddit/controls/TextButton/index.tsx"),
				N = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				C = n("./src/reddit/icons/svgs/svgIcons.tsx");

			function j(e) {
				const {
					children: t,
					activeSlide: n,
					progressCurrent: a,
					progressTotal: r,
					disableNext: s,
					buttonText: o,
					advance: i,
					goBack: d,
					onClose: u = (() => {})
				} = e, m = function e(t) {
					return c.Children.toArray(t).reduce((t, n) => n ? n.type === l.a.Fragment ? [...t, ...e(n.props.children)] : [...t, n] : t, [])
				}(t), h = m.length, p = h > 1 && n > 0, y = null != a ? a : n + 1, v = null != r ? r : h;
				return l.a.createElement("div", {
					className: _.a.container
				}, l.a.createElement("div", {
					className: _.a.header
				}, p ? l.a.createElement(E.a, {
					className: _.a.headerButton,
					onClick: d
				}, l.a.createElement(C.d, {
					className: _.a.backIcon
				}), l.a.createElement("div", null, g.fbt._("Back", null, {
					hk: "39TCGR"
				}))) : l.a.createElement(E.a, {
					className: _.a.headerButton,
					onClick: u
				}, l.a.createElement(k.b, null), l.a.createElement("div", null, g.fbt._("Close", null, {
					hk: "4gbyAA"
				}))), l.a.createElement(N.a, {
					className: _.a.snoo
				})), l.a.createElement("div", {
					className: _.a.slides,
					style: {
						transform: `translateX(${-600*n}px)`
					}
				}, m.map((e, t) => l.a.createElement("div", {
					key: t,
					className: _.a.slide,
					"aria-hidden": n !== t,
					"aria-current": n === t
				}, e))), l.a.createElement("div", {
					className: _.a.footer
				}, l.a.createElement("div", {
					className: _.a.progressBar
				}, v > 1 && b()(v).map((e, t) => l.a.createElement("div", {
					key: t,
					className: Object(x.a)(_.a.progressSegment, {
						[_.a.active]: t < y
					})
				}))), l.a.createElement("div", {
					className: _.a.progress
				}, v > 1 ? g.fbt._("{current} of {total}", [g.fbt._param("current", y), g.fbt._param("total", v)], {
					hk: "pZU46"
				}) : ""), l.a.createElement(w.q, {
					redditStyle: !0,
					className: _.a.footerButton,
					onClick: i,
					disabled: s
				}, null != o ? o : n === h - 1 ? g.fbt._("Submit", null, {
					hk: "194VZ0"
				}) : g.fbt._("Next", null, {
					hk: "3WmYcd"
				}))))
			}
			var S = n("./src/redditGQL/operations/SubmitContentRatingSurvey.json"),
				O = n("./src/lib/makeGqlRequest/index.ts");
			var T, I = (e, t) => Object(O.a)(e, {
					...S,
					variables: t
				}),
				A = n("./src/reddit/helpers/trackers/contentTag.ts"),
				R = n("./src/reddit/hooks/useMutation.ts"),
				F = n("./src/reddit/hooks/useTracking.ts");
			! function(e) {
				e.Accepted = "ACCEPTED", e.Pending = "PENDING"
			}(T || (T = {}));
			var W = n("./src/reddit/models/Toast/index.ts"),
				q = n("./node_modules/lodash/mapValues.js"),
				M = n.n(q),
				B = n("./src/reddit/controls/CheckboxInput/index.tsx");

			function L({
				children: e
			}) {
				return l.a.createElement(l.a.Fragment, null, (t = e, t.split(/\*+/)).map((e, t) => t % 2 == 1 ? l.a.createElement("em", {
					key: t
				}, e) : e));
				var t
			}

			function P({
				question: e,
				selectedAnswers: t,
				onChange: n
			}) {
				return l.a.createElement("div", null, l.a.createElement("h3", {
					className: m.a.header
				}, l.a.createElement(L, null, e.questionTextMarkdown)), e.answerOptions.map(a => l.a.createElement(B.a, {
					key: a.id,
					name: a.id,
					className: m.a.checkbox,
					value: t[a.id],
					onChange: r => (function(a, r) {
						const s = a.id;
						if (a.isMutuallyExclusive) return n(e.id, {
							[s]: r
						});
						if (r) {
							const a = e.answerOptions.filter(e => e.isMutuallyExclusive).map(e => e.id),
								r = M()(t, (e, t) => !a.includes(t) && e);
							return r[s] = !0, n(e.id, r)
						}
						const {
							[s]: o, ...i
						} = t;
						n(e.id, i)
					})(a, r)
				}, l.a.createElement("span", {
					id: a.id
				}, a.answerText))))
			}
			var D = n("./src/reddit/components/ContentSurvey/RatingCard.tsx");
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Q;

			function U(e) {
				var t, n;
				const {
					subredditId: r,
					survey: s,
					onClose: o = (() => {})
				} = e, [u, g] = Object(c.useState)({}), v = Object(d.d)(), b = V(null == s ? void 0 : s.questions, u), [{
					surveyState: f,
					activeSlide: _
				}, x] = Object(c.useReducer)(({
					activeSlide: e
				}, t) => {
					const n = "forward" === t ? Math.min(e + 1, b.length + 1) : Math.max(e - 1, 0);
					return {
						surveyState: 0 === n ? Q.Intro : n === b.length + 1 ? Q.Tag : Q.Survey,
						activeSlide: n
					}
				}, {
					surveyState: Q.Intro,
					activeSlide: 0
				}), k = b[_ - 1], w = Object(F.a)();
				Object(c.useEffect)(() => {
					switch (_) {
						case 0:
							return w(Object(A.c)());
						case 1:
							return w(Object(A.e)());
						case b.length + 1:
							return w(Object(A.n)())
					}
					if (k) return w(Object(A.j)(k.pageType))
				}, [_, w]);
				const [E, {
					pending: N,
					error: C
				}] = Object(R.a)(I);
				Object(c.useEffect)(() => {
					C && (h.c.captureException(C), v(Object(y.f)(Object(y.e)(K._("An error occurred", null, {
						hk: "1VDETi"
					}), W.b.Error))))
				}, [C, v]);
				const [S, O] = Object(c.useState)(null);
				if (!s) return null;
				if (!s.isEligible) return null;

				function q(e, t) {
					g(Object(a.setIn)(u, [e], t)), w(Object(A.a)(k.pageType))
				}
				const M = null !== (t = u[null == k ? void 0 : k.id]) && void 0 !== t ? t : {},
					B = (null !== (n = null == k ? void 0 : k.answerOptions) && void 0 !== n ? n : []).map(e => e.id).some(e => M[e]),
					L = f === Q.Survey && _ > 1;
				return l.a.createElement(j, {
					activeSlide: _,
					advance: async function() {
						if (f === Q.Survey && _ === b.length && O(function(e, t) {
								var n;
								let a = null,
									r = [];
								const s = V(e.questions, t);
								for (const o of s)
									for (const e of o.answerOptions) {
										if (!(null === (n = t[o.id]) || void 0 === n ? void 0 : n[e.id])) continue;
										if (!X(e)) continue;
										const s = e.contentRatingTag;
										(!a || a.weight < s.weight) && (a = s), s.weight > 0 && r.push(e)
									}
								if (r = i()(r, e => -e.contentRatingTag.weight), !a) throw new Error("no question was selected!");
								return {
									id: "",
									version: e.version,
									createdAt: Date.now(),
									isFromMod: !0,
									status: T.Pending,
									rating: a,
									ratingReasons: r
								}
							}(s, u)), f === Q.Tag) {
							if (N) return;
							return w(Object(A.m)()), await E({
								input: {
									subredditId: r,
									version: s.version,
									answers: V(s.questions, u).map(e => ({
										questionId: e.id,
										answerIds: H(e, u).map(e => e.id)
									}))
								}
							}), v(Object(y.f)(Object(y.e)(K._("Thanks for setting up your Content Tag!", null, {
								hk: "3HW5GV"
							}), W.b.SuccessCommunityGreen))), v({
								type: p.z,
								payload: {
									id: r,
									response: S
								}
							}), void(C || o())
						}
						x("forward"), k ? w(Object(A.i)(k.pageType, H(k, u).map(e => e.id))) : 0 === _ && w(Object(A.l)())
					},
					goBack: function() {
						x("back"), k && w(Object(A.b)(k.pageType))
					},
					onClose: o,
					progressCurrent: L ? _ - 1 : 0,
					progressTotal: L ? b.length - 1 : 0,
					disableNext: N || f === Q.Survey && !B,
					buttonText: G(f)
				}, l.a.createElement("div", {
					className: m.a.result
				}, l.a.createElement("p", {
					className: m.a.heading
				}, K._("Get started with content tags", null, {
					hk: "2WspCv"
				})), K._("{=Not Safe for Work (NSFW) can mean different things to different people, so we're evolving the NSFW tag into more descriptive tags that help people know what to expect when they visit your community.}{=Every public and restricted community will get a content tag, and this survey is your mod team's chance to give your input.}{=Here's how it works:}{=Consult your mod team Only one moderator can take and submit the survey, so consult with your fellow mods before submitting.}{=Take the survey This survey will ask you about how different mature themes are posted about and discussed in your community.}{=Keep doing what you're doing Once you get your tag, you don't need to change anything about your community and how you run it.}{=If you want to learn more or have questions, visit ourcommunity content tags FAQ .}", [K._param("=Not Safe for Work (NSFW) can mean different things to different people, so we're evolving the NSFW tag into more descriptive tags that help people know what to expect when they visit your community.", l.a.createElement("p", {
					className: m.a.introCopy
				}, K._("Not Safe for Work (NSFW) can mean different things to different people, so we're evolving the NSFW tag into more descriptive tags that help people know what to expect when they visit your community.", null, {
					hk: "1Fer1r"
				}))), K._param("=Every public and restricted community will get a content tag, and this survey is your mod team's chance to give your input.", l.a.createElement("p", {
					className: m.a.introCopy
				}, K._("Every public and restricted community will get a content tag, and this survey is your mod team's chance to give your input.", null, {
					hk: "4cgXFP"
				}))), K._param("=Here's how it works:", l.a.createElement("p", {
					className: m.a.introCopy
				}, K._("Here's how it works:", null, {
					hk: "36BNnd"
				}))), K._param("=Consult your mod team Only one moderator can take and submit the survey, so consult with your fellow mods before submitting.", l.a.createElement("p", {
					className: m.a.introCopy
				}, K._("{=Consult your mod team} Only one moderator can take and submit the survey, so consult with your fellow mods before submitting.", [K._param("=Consult your mod team", l.a.createElement("strong", null, K._("Consult your mod team", null, {
					hk: "23H654"
				})))], {
					hk: "jnTSv"
				}))), K._param("=Take the survey This survey will ask you about how different mature themes are posted about and discussed in your community.", l.a.createElement("p", {
					className: m.a.introCopy
				}, K._("{=Take the survey} This survey will ask you about how different mature themes are posted about and discussed in your community.", [K._param("=Take the survey", l.a.createElement("strong", null, K._("Take the survey", null, {
					hk: "2hQ3n7"
				})))], {
					hk: "2KYjT1"
				}))), K._param("=Keep doing what you're doing Once you get your tag, you don't need to change anything about your community and how you run it.", l.a.createElement("p", {
					className: m.a.introCopy
				}, K._("{=Keep doing what you're doing} Once you get your tag, you don't need to change anything about your community and how you run it.", [K._param("=Keep doing what you're doing", l.a.createElement("strong", null, K._("Keep doing what you're doing", null, {
					hk: "3euaLx"
				})))], {
					hk: "4f5ry9"
				}))), K._param("=If you want to learn more or have questions, visit ourcommunity content tags FAQ .", l.a.createElement("p", {
					className: m.a.introCopy
				}, K._("If you want to learn more or have questions, visit our {=community content tags FAQ} .", [K._param("=community content tags FAQ", l.a.createElement("a", {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.reddithelp.com/hc/en-us/articles/360048185132-What-are-community-content-tags-and-how-do-they-work-"
				}, K._("community content tags FAQ", null, {
					hk: "1kl5Jq"
				})))], {
					hk: "4tG83R"
				})))], {
					hk: "2x33OC"
				})), b.map(e => {
					var t;
					return l.a.createElement(P, {
						key: e.id,
						question: e,
						selectedAnswers: null !== (t = u[e.id]) && void 0 !== t ? t : {},
						onChange: q
					})
				}), S && l.a.createElement("div", {
					key: "result",
					className: m.a.result
				}, l.a.createElement("p", {
					className: m.a.heading
				}, K._("Your Content Tag:", null, {
					hk: "2OUAzB"
				})), l.a.createElement(D.a, {
					ratingResponse: S,
					subredditId: r
				}, l.a.createElement("p", {
					className: m.a.ratingAudience
				}, S.rating.name), l.a.createElement("p", {
					className: m.a.ratingDescription
				}, S.rating.description, " ", l.a.createElement("br", null), K._("(Note: Only moderators can see this tag.)", null, {
					hk: "2PN50Z"
				}))), l.a.createElement("p", {
					className: m.a.reasonsHeader
				}, K._("Posts and discussions include:", null, {
					hk: "12MdUE"
				})), l.a.createElement("ul", null, S.ratingReasons.map(e => l.a.createElement("li", {
					key: e.id,
					className: m.a.reason
				}, e.contentRatingReasonText)))))
			}

			function G(e) {
				switch (e) {
					case Q.Intro:
						return K._("Start Survey", null, {
							hk: "41dYsT"
						});
					case Q.Survey:
						return K._("Next", null, {
							hk: "3WmYcd"
						});
					case Q.Tag:
						return K._("Submit", null, {
							hk: "2tgWd9"
						})
				}
			}

			function H(e, t) {
				return e.answerOptions.filter(n => {
					var a;
					return null === (a = t[e.id]) || void 0 === a ? void 0 : a[n.id]
				})
			}

			function V(e, t) {
				let n = [];
				for (const a of null != e ? e : []) {
					const e = H(a, t),
						r = s()(e, e => {
							var t;
							return null !== (t = e.subQuestions) && void 0 !== t ? t : []
						});
					n = [...n, a, ...V(r, t)]
				}
				return n
			}

			function X(e) {
				return "ContentRatingSurveyLeafAnswer" === e.__typename
			}! function(e) {
				e[e.Intro = 0] = "Intro", e[e.Survey = 1] = "Survey", e[e.Tag = 2] = "Tag"
			}(Q || (Q = {}))
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
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = n("./src/reddit/layout/row/Inline/index.tsx"),
				l = n("./src/reddit/controls/CheckboxInput/index.m.less"),
				d = n.n(l);
			t.a = e => r.a.createElement(c.a, {
				"aria-checked": !!e.value,
				"aria-disabled": e.disabled,
				"aria-labelledby": e.name,
				className: Object(s.a)(e.className, d.a.checkboxInput, e.disabled ? d.a.disabled : null),
				onClick: e.onChange && !e.disabled ? () => e.onChange(!e.value) : void 0,
				role: "checkbox"
			}, r.a.createElement("input", {
				value: e.value ? e.value.toString() : "",
				type: "hidden"
			}), e.value ? r.a.createElement(i.a, {
				className: d.a.checkboxSelected
			}) : r.a.createElement(o.a, null), e.children)
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var a = n("./node_modules/react/index.js"),
				r = n("./src/lib/CSSVariableProvider/index.tsx");

			function s() {
				return Object(a.useContext)(r.b)
			}
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/Inline/index.m.less"),
				s = n.n(r);
			t.a = a.a.div("inlineRow", s.a)
		},
		"./src/redditGQL/operations/SubmitContentRatingSurvey.json": function(e) {
			e.exports = JSON.parse('{"id":"8cd4e428e688"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/1.1b356176e9a941edc8a3.js.map