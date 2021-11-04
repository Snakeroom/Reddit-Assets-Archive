// https://www.redditstatic.com/desktop2x/1.de2c3db54b434d5cd5b0.js
// Retrieved at 11/4/2021, 10:30:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[1], {
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var n = Math.ceil,
				a = Math.max;
			e.exports = function(e, t, r, o) {
				for (var s = -1, i = a(n((t - e) / (r || 1)), 0), c = Array(i); i--;) c[o ? i : ++s] = e, e += r;
				return c
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var a = n("./node_modules/lodash/_baseRange.js"),
				r = n("./node_modules/lodash/_isIterateeCall.js"),
				o = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, s) {
					return s && "number" != typeof s && r(t, n, s) && (n = s = void 0), t = o(t), void 0 === n ? (n = t, t = 0) : n = o(n), s = void 0 === s ? t < n ? 1 : -1 : o(s), a(t, n, s, e)
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
		"./src/lib/hooks/useMutation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var a = n("./node_modules/react/index.js"),
				r = n("./src/reddit/hooks/useGqlContext.ts");

			function o(e) {
				const t = Object(r.a)(),
					[n, o] = Object(a.useState)(!1),
					[s, i] = Object(a.useState)(!1),
					[c, u] = Object(a.useState)(null),
					[d, l] = Object(a.useState)(null);
				return [Object(a.useCallback)(async n => {
					let a, r;
					o(!0), i(!0);
					try {
						if ((r = (a = await e(t(), n)).body).error) throw new Error(r.error.message);
						l(r.data)
					} catch (c) {
						u(c)
					} finally {
						o(!1)
					}
				}, [t, e]), {
					data: d,
					error: c,
					pending: n,
					called: s
				}]
			}
		},
		"./src/reddit/actions/subreddit/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "j", (function() {
				return s
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "r", (function() {
				return c
			})), n.d(t, "q", (function() {
				return u
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "l", (function() {
				return l
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "p", (function() {
				return _
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "w", (function() {
				return E
			})), n.d(t, "v", (function() {
				return v
			})), n.d(t, "x", (function() {
				return b
			})), n.d(t, "y", (function() {
				return S
			})), n.d(t, "z", (function() {
				return D
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "t", (function() {
				return T
			})), n.d(t, "u", (function() {
				return k
			})), n.d(t, "s", (function() {
				return N
			}));
			const a = "SUBREDDIT__ADD_TOP_SUBREDDIT_MODELS",
				r = "SUBREDDIT__ADD_TOP_SUBREDDIT_RANKINGS",
				o = "SUBREDDIT__ADD_TOP_SUBREDDIT_RANKINGS_PAGE_INFO",
				s = "SUBREDDIT__POSTS_LOADED",
				i = "SUBREDDIT__POSTS_SET_FAILED",
				c = "SUBREDDIT__SUBREDDITS_POSTS_LOADED",
				u = "SUBREDDIT__SUBREDDITS_POSTS_SET_FAILED",
				d = "SUBREDDIT__RANKINGS_PENDING",
				l = "SUBREDDIT__RANKINGS_LOADED",
				m = "SUBREDDIT__RANKINGS_FAILED",
				_ = "SUBREDDIT__SIMILAR_SUBREDDITS_PENDING",
				h = "SUBREDDIT__SIMILAR_SUBREDDITS_LOADED",
				p = "SUBREDDIT__SIMILAR_SUBREDDITS_FAILED",
				y = "SUBREDDIT__ONBOARDING_SUBREDDITS_PENDING",
				g = "SUBREDDIT__ONBOARDING_SUBREDDITS_LOADED",
				f = "SUBREDDIT__ONBOARDING_SUBREDDITS_FAILED",
				E = "SUBREDDIT__EDIT_REQUESTED",
				v = "SUBREDDIT__EDIT_FAILED",
				b = "SUBREDDIT__EDIT_SUCCESS",
				S = "SUBREDDIT_QUESTIONS_LOADED",
				D = "SUBREDDIT_SURVEY_ANSWERED",
				I = "SUBREDDIT_SURVEY_DISMISSED",
				x = "SUBREDDIT_SURVEY_DISMISS",
				T = "SUBREDDIT_ABOUT_INFO_UPDATE__PENDING",
				k = "SUBREDDIT_ABOUT_INFO_UPDATE__SUCCESS",
				N = "SUBREDDIT_ABOUT_INFO_UPDATE__FAILED"
		},
		"./src/reddit/components/ContentSurvey/RatingCard.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/components/ContentSurvey/index.m.less"),
				i = n.n(s),
				c = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/components/SubredditIcon/index.tsx"),
				d = n("./src/reddit/hooks/useTheme.ts"),
				l = n("./src/reddit/icons/svgs/Info/index.tsx"),
				m = n("./src/reddit/models/Theme/index.ts"),
				_ = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				h = n("./src/reddit/selectors/subreddit.ts");
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function y(e) {
				var t, n;
				const {
					ratingResponse: a,
					subredditId: s,
					children: y
				} = e, g = null !== (t = Object(o.e)(e => Object(h.Q)(e, {
					subredditId: s
				}))) && void 0 !== t ? t : {}, f = Object(d.a)();
				return r.a.createElement("div", {
					className: i.a.ratingCard
				}, "PENDING" === (null == a ? void 0 : a.status) && r.a.createElement("div", {
					className: Object(c.a)(i.a.card, i.a.pending)
				}, r.a.createElement(l.a, {
					className: i.a.infoIcon
				}), p._("Content tag is pending until reviewed", null, {
					hk: "Umha7"
				})), r.a.createElement("div", {
					className: i.a.card
				}, r.a.createElement("div", {
					className: i.a.banner,
					style: {
						background: Object(m.g)(Object(_.a)({
							theme: f
						}).banner.backgroundColor, Object(_.a)({
							theme: f
						}).banner.backgroundImage, Object(_.a)({
							theme: f
						}).banner.backgroundImagePosition)
					}
				}, r.a.createElement(u.b, {
					className: i.a.communityIcon,
					iconUrl: null === (n = g.icon) || void 0 === n ? void 0 : n.url
				})), r.a.createElement("h3", {
					className: i.a.communityName
				}, a ? r.a.createElement("span", null, g.displayText, r.a.createElement("img", {
					className: i.a.ratingImg,
					src: a.rating.icon.png
				})) : g.displayText), y))
			}
		},
		"./src/reddit/components/ContentSurvey/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "default", (function() {
				return W
			}));
			var a = n("./node_modules/icepick/icepick.js"),
				r = n("./node_modules/lodash/flatMap.js"),
				o = n.n(r),
				s = n("./node_modules/lodash/sortBy.js"),
				i = n.n(s),
				c = n("./node_modules/react/index.js"),
				u = n.n(c),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/reddit/components/ContentSurvey/index.m.less"),
				m = n.n(l),
				_ = n("./src/lib/hooks/useMutation.ts"),
				h = n("./src/lib/sentry/index.ts"),
				p = n("./src/reddit/actions/subreddit/constants.ts"),
				y = n("./src/reddit/actions/toaster.ts"),
				g = n("./node_modules/fbt/lib/FbtPublic.js"),
				f = n("./node_modules/lodash/range.js"),
				E = n.n(f),
				v = n("./src/reddit/components/ModeratorSurvey/index.m.less"),
				b = n.n(v),
				S = n("./src/lib/classNames/index.ts");
			var D = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				I = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/controls/TextButton/index.tsx"),
				T = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				k = n("./src/reddit/icons/svgs/svgIcons.tsx");

			function N(e) {
				const {
					children: t,
					activeSlide: n,
					progressCurrent: a,
					progressTotal: r,
					disableNext: o,
					buttonText: s,
					advance: i,
					goBack: d,
					onClose: l = (() => {})
				} = e, m = function e(t) {
					return c.Children.toArray(t).reduce((t, n) => n ? n.type === u.a.Fragment ? [...t, ...e(n.props.children)] : [...t, n] : t, [])
				}(t), _ = m.length, h = _ > 1 && n > 0, p = null != a ? a : n + 1, y = null != r ? r : _;
				return u.a.createElement("div", {
					className: b.a.container
				}, u.a.createElement("div", {
					className: b.a.header
				}, h ? u.a.createElement(x.a, {
					className: b.a.headerButton,
					onClick: d
				}, u.a.createElement(k.d, {
					className: b.a.backIcon
				}), u.a.createElement("div", null, g.fbt._("Back", null, {
					hk: "39TCGR"
				}))) : u.a.createElement(x.a, {
					className: b.a.headerButton,
					onClick: l
				}, u.a.createElement(D.b, null), u.a.createElement("div", null, g.fbt._("Close", null, {
					hk: "4gbyAA"
				}))), u.a.createElement(T.a, {
					className: b.a.snoo
				})), u.a.createElement("div", {
					className: b.a.slides,
					style: {
						transform: `translateX(${-600*n}px)`
					}
				}, m.map((e, t) => u.a.createElement("div", {
					key: t,
					className: b.a.slide,
					"aria-hidden": n !== t,
					"aria-current": n === t
				}, e))), u.a.createElement("div", {
					className: b.a.footer
				}, u.a.createElement("div", {
					className: b.a.progressBar
				}, y > 1 && E()(y).map((e, t) => u.a.createElement("div", {
					key: t,
					className: Object(S.a)(b.a.progressSegment, {
						[b.a.active]: t < p
					})
				}))), u.a.createElement("div", {
					className: b.a.progress
				}, y > 1 ? g.fbt._("{current} of {total}", [g.fbt._param("current", p), g.fbt._param("total", y)], {
					hk: "pZU46"
				}) : ""), u.a.createElement(I.t, {
					redditStyle: !0,
					className: b.a.footerButton,
					onClick: i,
					disabled: o
				}, null != s ? s : n === _ - 1 ? g.fbt._("Submit", null, {
					hk: "4aU3dh"
				}) : g.fbt._("Next", null, {
					hk: "2mEXAi"
				}))))
			}
			var w = n("./src/redditGQL/operations/SubmitContentRatingSurvey.json"),
				O = n("./src/lib/makeGqlRequest/index.ts");
			var R, C = (e, t) => Object(O.a)(e, {
					...w,
					variables: t
				}),
				j = n("./src/reddit/helpers/trackers/contentTag.ts"),
				A = n("./src/reddit/hooks/useTracking.ts");
			! function(e) {
				e.Accepted = "ACCEPTED", e.Pending = "PENDING"
			}(R || (R = {}));
			var U = n("./src/reddit/models/Toast/index.ts"),
				B = n("./node_modules/lodash/mapValues.js"),
				F = n.n(B),
				L = n("./src/reddit/controls/CheckboxInput/index.tsx");

			function P({
				children: e
			}) {
				return u.a.createElement(u.a.Fragment, null, (t = e, t.split(/\*+/)).map((e, t) => t % 2 == 1 ? u.a.createElement("em", {
					key: t
				}, e) : e));
				var t
			}

			function G({
				question: e,
				selectedAnswers: t,
				onChange: n
			}) {
				return u.a.createElement("div", null, u.a.createElement("h3", {
					className: m.a.header
				}, u.a.createElement(P, null, e.questionTextMarkdown)), e.answerOptions.map(a => u.a.createElement(L.a, {
					key: a.id,
					name: a.id,
					className: m.a.checkbox,
					value: t[a.id],
					onChange: r => (function(a, r) {
						const o = a.id;
						if (a.isMutuallyExclusive) return n(e.id, {
							[o]: r
						});
						if (r) {
							const a = e.answerOptions.filter(e => e.isMutuallyExclusive).map(e => e.id),
								r = F()(t, (e, t) => !a.includes(t) && e);
							return r[o] = !0, n(e.id, r)
						}
						const {
							[o]: s, ...i
						} = t;
						n(e.id, i)
					})(a, r)
				}, u.a.createElement("span", {
					id: a.id
				}, a.answerText))))
			}
			var M = n("./src/reddit/components/ContentSurvey/RatingCard.tsx");
			const {
				fbt: q
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var K;

			function W(e) {
				var t, n;
				const {
					subredditId: r,
					survey: o,
					onClose: s = (() => {})
				} = e, [l, g] = Object(c.useState)({}), f = Object(d.d)(), E = X(null == o ? void 0 : o.questions, l), [{
					surveyState: v,
					activeSlide: b
				}, S] = Object(c.useReducer)(({
					activeSlide: e
				}, t) => {
					const n = "forward" === t ? Math.min(e + 1, E.length + 1) : Math.max(e - 1, 0);
					return {
						surveyState: 0 === n ? K.Intro : n === E.length + 1 ? K.Tag : K.Survey,
						activeSlide: n
					}
				}, {
					surveyState: K.Intro,
					activeSlide: 0
				}), D = E[b - 1], I = Object(A.a)();
				Object(c.useEffect)(() => {
					switch (b) {
						case 0:
							return I(Object(j.c)());
						case 1:
							return I(Object(j.e)());
						case E.length + 1:
							return I(Object(j.n)())
					}
					if (D) return I(Object(j.j)(D.pageType))
				}, [b, I]);
				const [x, {
					pending: T,
					error: k
				}] = Object(_.a)(C);
				Object(c.useEffect)(() => {
					k && (h.c.captureException(k), f(Object(y.f)(Object(y.e)(q._("An error occurred", null, {
						hk: "1VDETi"
					}), U.b.Error))))
				}, [k, f]);
				const [w, O] = Object(c.useState)(null);
				if (!o) return null;
				if (!o.isEligible) return null;

				function B(e, t) {
					g(Object(a.setIn)(l, [e], t)), I(Object(j.a)(D.pageType))
				}
				const F = null !== (t = l[null == D ? void 0 : D.id]) && void 0 !== t ? t : {},
					L = (null !== (n = null == D ? void 0 : D.answerOptions) && void 0 !== n ? n : []).map(e => e.id).some(e => F[e]),
					P = v === K.Survey && b > 1;
				return u.a.createElement(N, {
					activeSlide: b,
					advance: async function() {
						if (v === K.Survey && b === E.length && O(function(e, t) {
								var n;
								let a = null,
									r = [];
								const o = X(e.questions, t);
								for (const s of o)
									for (const e of s.answerOptions) {
										if (!(null === (n = t[s.id]) || void 0 === n ? void 0 : n[e.id])) continue;
										if (!H(e)) continue;
										const o = e.contentRatingTag;
										(!a || a.weight < o.weight) && (a = o), o.weight > 0 && r.push(e)
									}
								if (r = i()(r, e => -e.contentRatingTag.weight), !a) throw new Error("no question was selected!");
								return {
									id: "",
									version: e.version,
									createdAt: Date.now(),
									isFromMod: !0,
									status: R.Pending,
									rating: a,
									ratingReasons: r
								}
							}(o, l)), v === K.Tag) {
							if (T) return;
							return I(Object(j.m)()), await x({
								input: {
									subredditId: r,
									version: o.version,
									answers: X(o.questions, l).map(e => ({
										questionId: e.id,
										answerIds: V(e, l).map(e => e.id)
									}))
								}
							}), f(Object(y.f)(Object(y.e)(q._("Thanks for setting up your Content Tag!", null, {
								hk: "3HW5GV"
							}), U.b.SuccessCommunityGreen))), f({
								type: p.z,
								payload: {
									id: r,
									response: w
								}
							}), void(k || s())
						}
						S("forward"), D ? I(Object(j.i)(D.pageType, V(D, l).map(e => e.id))) : 0 === b && I(Object(j.l)())
					},
					goBack: function() {
						S("back"), D && I(Object(j.b)(D.pageType))
					},
					onClose: s,
					progressCurrent: P ? b - 1 : 0,
					progressTotal: P ? E.length - 1 : 0,
					disableNext: T || v === K.Survey && !L,
					buttonText: Q(v)
				}, u.a.createElement("div", {
					className: m.a.result
				}, u.a.createElement("p", {
					className: m.a.heading
				}, q._("Get started with content tags", null, {
					hk: "2WspCv"
				})), q._("{=Not Safe for Work (NSFW) can mean different things to different people, so we're evolving the NSFW tag into more descriptive tags that help people know what to expect when they visit your community.}{=Every public and restricted community will get a content tag, and this survey is your mod team's chance to give your input.}{=Here's how it works:}{=Consult your mod team Only one moderator can take and submit the survey, so consult with your fellow mods before submitting.}{=Take the survey This survey will ask you about how different mature themes are posted about and discussed in your community.}{=Keep doing what you're doing Once you get your tag, you don't need to change anything about your community and how you run it.}{=If you want to learn more or have questions, visit ourcommunity content tags FAQ .}", [q._param("=Not Safe for Work (NSFW) can mean different things to different people, so we're evolving the NSFW tag into more descriptive tags that help people know what to expect when they visit your community.", u.a.createElement("p", {
					className: m.a.introCopy
				}, q._("Not Safe for Work (NSFW) can mean different things to different people, so we're evolving the NSFW tag into more descriptive tags that help people know what to expect when they visit your community.", null, {
					hk: "1Fer1r"
				}))), q._param("=Every public and restricted community will get a content tag, and this survey is your mod team's chance to give your input.", u.a.createElement("p", {
					className: m.a.introCopy
				}, q._("Every public and restricted community will get a content tag, and this survey is your mod team's chance to give your input.", null, {
					hk: "4cgXFP"
				}))), q._param("=Here's how it works:", u.a.createElement("p", {
					className: m.a.introCopy
				}, q._("Here's how it works:", null, {
					hk: "36BNnd"
				}))), q._param("=Consult your mod team Only one moderator can take and submit the survey, so consult with your fellow mods before submitting.", u.a.createElement("p", {
					className: m.a.introCopy
				}, q._("{=Consult your mod team} Only one moderator can take and submit the survey, so consult with your fellow mods before submitting.", [q._param("=Consult your mod team", u.a.createElement("strong", null, q._("Consult your mod team", null, {
					hk: "23H654"
				})))], {
					hk: "jnTSv"
				}))), q._param("=Take the survey This survey will ask you about how different mature themes are posted about and discussed in your community.", u.a.createElement("p", {
					className: m.a.introCopy
				}, q._("{=Take the survey} This survey will ask you about how different mature themes are posted about and discussed in your community.", [q._param("=Take the survey", u.a.createElement("strong", null, q._("Take the survey", null, {
					hk: "2hQ3n7"
				})))], {
					hk: "2KYjT1"
				}))), q._param("=Keep doing what you're doing Once you get your tag, you don't need to change anything about your community and how you run it.", u.a.createElement("p", {
					className: m.a.introCopy
				}, q._("{=Keep doing what you're doing} Once you get your tag, you don't need to change anything about your community and how you run it.", [q._param("=Keep doing what you're doing", u.a.createElement("strong", null, q._("Keep doing what you're doing", null, {
					hk: "3euaLx"
				})))], {
					hk: "4f5ry9"
				}))), q._param("=If you want to learn more or have questions, visit ourcommunity content tags FAQ .", u.a.createElement("p", {
					className: m.a.introCopy
				}, q._("If you want to learn more or have questions, visit our {=community content tags FAQ} .", [q._param("=community content tags FAQ", u.a.createElement("a", {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.reddithelp.com/hc/en-us/articles/360048185132-What-are-community-content-tags-and-how-do-they-work-"
				}, q._("community content tags FAQ", null, {
					hk: "1kl5Jq"
				})))], {
					hk: "4tG83R"
				})))], {
					hk: "2x33OC"
				})), E.map(e => {
					var t;
					return u.a.createElement(G, {
						key: e.id,
						question: e,
						selectedAnswers: null !== (t = l[e.id]) && void 0 !== t ? t : {},
						onChange: B
					})
				}), w && u.a.createElement("div", {
					key: "result",
					className: m.a.result
				}, u.a.createElement("p", {
					className: m.a.heading
				}, q._("Your Content Tag:", null, {
					hk: "2OUAzB"
				})), u.a.createElement(M.a, {
					ratingResponse: w,
					subredditId: r
				}, u.a.createElement("p", {
					className: m.a.ratingAudience
				}, w.rating.name), u.a.createElement("p", {
					className: m.a.ratingDescription
				}, w.rating.description, " ", u.a.createElement("br", null), q._("(Note: Only moderators can see this tag.)", null, {
					hk: "2PN50Z"
				}))), u.a.createElement("p", {
					className: m.a.reasonsHeader
				}, q._("Posts and discussions include:", null, {
					hk: "12MdUE"
				})), u.a.createElement("ul", null, w.ratingReasons.map(e => u.a.createElement("li", {
					key: e.id,
					className: m.a.reason
				}, e.contentRatingReasonText)))))
			}

			function Q(e) {
				switch (e) {
					case K.Intro:
						return q._("Start Survey", null, {
							hk: "41dYsT"
						});
					case K.Survey:
						return q._("Next", null, {
							hk: "2mEXAi"
						});
					case K.Tag:
						return q._("Submit", null, {
							hk: "4aU3dh"
						})
				}
			}

			function V(e, t) {
				return e.answerOptions.filter(n => {
					var a;
					return null === (a = t[e.id]) || void 0 === a ? void 0 : a[n.id]
				})
			}

			function X(e, t) {
				let n = [];
				for (const a of null != e ? e : []) {
					const e = V(a, t),
						r = o()(e, e => {
							var t;
							return null !== (t = e.subQuestions) && void 0 !== t ? t : []
						});
					n = [...n, a, ...X(r, t)]
				}
				return n
			}

			function H(e) {
				return "ContentRatingSurveyLeafAnswer" === e.__typename
			}! function(e) {
				e[e.Intro = 0] = "Intro", e[e.Survey = 1] = "Survey", e[e.Tag = 2] = "Tag"
			}(K || (K = {}))
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
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = n("./src/reddit/layout/row/Inline/index.tsx"),
				u = n("./src/reddit/controls/CheckboxInput/index.m.less"),
				d = n.n(u);
			t.a = e => r.a.createElement(c.a, {
				"aria-checked": !!e.value,
				"aria-disabled": e.disabled,
				"aria-labelledby": e.name,
				className: Object(o.a)(e.className, d.a.checkboxInput, e.disabled ? d.a.disabled : null),
				onClick: e.onChange && !e.disabled ? () => e.onChange(!e.value) : void 0,
				role: "checkbox"
			}, r.a.createElement("input", {
				value: e.value ? e.value.toString() : "",
				type: "hidden"
			}), e.value ? r.a.createElement(i.a, {
				className: d.a.checkboxSelected
			}) : r.a.createElement(s.a, null), e.children)
		},
		"./src/reddit/hooks/useGqlContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var a = n("./node_modules/react/index.js"),
				r = n("./src/reddit/contexts/ApiContext.tsx");

			function o() {
				const {
					gqlContext: e
				} = Object(a.useContext)(r.a);
				return e
			}
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var a = n("./node_modules/react/index.js"),
				r = n("./src/lib/CSSVariableProvider/index.tsx");

			function o() {
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
				o = n.n(r);
			t.a = a.a.div("inlineRow", o.a)
		},
		"./src/redditGQL/operations/SubmitContentRatingSurvey.json": function(e) {
			e.exports = JSON.parse('{"id":"8cd4e428e688"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/1.de2c3db54b434d5cd5b0.js.map