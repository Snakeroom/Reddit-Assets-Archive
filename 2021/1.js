// https://www.redditstatic.com/desktop2x/1.71f7d0e6bbbf133fbd24.js
// Retrieved at 12/6/2021, 6:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[1], {
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var n = Math.ceil,
				a = Math.max;
			e.exports = function(e, t, s, r) {
				for (var o = -1, i = a(n((t - e) / (s || 1)), 0), l = Array(i); i--;) l[r ? i : ++o] = e, e += s;
				return l
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
		"./src/lib/hooks/useMutation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var a = n("./node_modules/react/index.js"),
				s = n("./src/reddit/hooks/useGqlContext.ts");

			function r(e) {
				const t = Object(s.a)(),
					[n, r] = Object(a.useState)(!1),
					[o, i] = Object(a.useState)(!1),
					[l, c] = Object(a.useState)(null),
					[d, u] = Object(a.useState)(null);
				return [Object(a.useCallback)(async n => {
					let a, s;
					r(!0), i(!0);
					try {
						if ((s = (a = await e(t(), n)).body).error) throw new Error(s.error.message);
						u(s.data)
					} catch (l) {
						c(l)
					} finally {
						r(!1)
					}
				}, [t, e]), {
					data: d,
					error: l,
					pending: n,
					called: o
				}]
			}
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
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/SubredditIcon/index.tsx"),
				d = n("./src/reddit/hooks/useTheme.ts"),
				u = n("./src/reddit/icons/svgs/Info/index.tsx"),
				m = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				h = n("./src/reddit/selectors/subreddit.ts");
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function g(e) {
				var t, n;
				const {
					ratingResponse: a,
					subredditId: o,
					children: g
				} = e, f = null !== (t = Object(r.e)(e => Object(h.R)(e, {
					subredditId: o
				}))) && void 0 !== t ? t : {}, x = Object(d.a)();
				return s.a.createElement("div", {
					className: i.a.ratingCard
				}, "PENDING" === (null == a ? void 0 : a.status) && s.a.createElement("div", {
					className: Object(l.a)(i.a.card, i.a.pending)
				}, s.a.createElement(u.a, {
					className: i.a.infoIcon
				}), v._("Content tag is pending until reviewed", null, {
					hk: "Umha7"
				})), s.a.createElement("div", {
					className: i.a.card
				}, s.a.createElement("div", {
					className: i.a.banner,
					style: {
						background: Object(m.g)(Object(p.a)({
							theme: x
						}).banner.backgroundColor, Object(p.a)({
							theme: x
						}).banner.backgroundImage, Object(p.a)({
							theme: x
						}).banner.backgroundImagePosition)
					}
				}, s.a.createElement(c.b, {
					className: i.a.communityIcon,
					iconUrl: null === (n = f.icon) || void 0 === n ? void 0 : n.url
				})), s.a.createElement("h3", {
					className: i.a.communityName
				}, a ? s.a.createElement("span", null, f.displayText, s.a.createElement("img", {
					className: i.a.ratingImg,
					src: a.rating.icon.png
				})) : f.displayText), g))
			}
		},
		"./src/reddit/components/ContentSurvey/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "default", (function() {
				return Z
			}));
			var a = n("./node_modules/icepick/icepick.js"),
				s = n("./node_modules/lodash/flatMap.js"),
				r = n.n(s),
				o = n("./node_modules/lodash/sortBy.js"),
				i = n.n(o),
				l = n("./node_modules/react/index.js"),
				c = n.n(l),
				d = n("./node_modules/react-redux/es/index.js"),
				u = n("./src/reddit/components/ContentSurvey/index.m.less"),
				m = n.n(u),
				p = n("./src/lib/hooks/useMutation.ts"),
				h = n("./src/lib/sentry/index.ts"),
				v = n("./src/reddit/actions/subreddit/constants.ts"),
				g = n("./src/reddit/actions/toaster.ts"),
				f = n("./node_modules/fbt/lib/FbtPublic.js"),
				x = n("./node_modules/lodash/range.js"),
				y = n.n(x),
				b = n("./src/reddit/components/ModeratorSurvey/index.m.less"),
				w = n.n(b),
				_ = n("./src/lib/classNames/index.ts");
			var C = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				E = n("./src/reddit/controls/Button/index.tsx"),
				k = n("./src/reddit/controls/TextButton/index.tsx"),
				j = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				N = n("./src/reddit/icons/svgs/svgIcons.tsx");

			function S(e) {
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
					return l.Children.toArray(t).reduce((t, n) => n ? n.type === c.a.Fragment ? [...t, ...e(n.props.children)] : [...t, n] : t, [])
				}(t), p = m.length, h = p > 1 && n > 0, v = null != a ? a : n + 1, g = null != s ? s : p;
				return c.a.createElement("div", {
					className: w.a.container
				}, c.a.createElement("div", {
					className: w.a.header
				}, h ? c.a.createElement(k.a, {
					className: w.a.headerButton,
					onClick: d
				}, c.a.createElement(N.d, {
					className: w.a.backIcon
				}), c.a.createElement("div", null, f.fbt._("Back", null, {
					hk: "39TCGR"
				}))) : c.a.createElement(k.a, {
					className: w.a.headerButton,
					onClick: u
				}, c.a.createElement(C.b, null), c.a.createElement("div", null, f.fbt._("Close", null, {
					hk: "4gbyAA"
				}))), c.a.createElement(j.a, {
					className: w.a.snoo
				})), c.a.createElement("div", {
					className: w.a.slides,
					style: {
						transform: `translateX(${-600*n}px)`
					}
				}, m.map((e, t) => c.a.createElement("div", {
					key: t,
					className: w.a.slide,
					"aria-hidden": n !== t,
					"aria-current": n === t
				}, e))), c.a.createElement("div", {
					className: w.a.footer
				}, c.a.createElement("div", {
					className: w.a.progressBar
				}, g > 1 && y()(g).map((e, t) => c.a.createElement("div", {
					key: t,
					className: Object(_.a)(w.a.progressSegment, {
						[w.a.active]: t < v
					})
				}))), c.a.createElement("div", {
					className: w.a.progress
				}, g > 1 ? f.fbt._("{current} of {total}", [f.fbt._param("current", v), f.fbt._param("total", g)], {
					hk: "pZU46"
				}) : ""), c.a.createElement(E.t, {
					redditStyle: !0,
					className: w.a.footerButton,
					onClick: i,
					disabled: r
				}, null != o ? o : n === p - 1 ? f.fbt._("Submit", null, {
					hk: "4aU3dh"
				}) : f.fbt._("Next", null, {
					hk: "2mEXAi"
				}))))
			}
			var M = n("./src/redditGQL/operations/SubmitContentRatingSurvey.json"),
				T = n("./src/lib/makeGqlRequest/index.ts");
			var O, I = (e, t) => Object(T.a)(e, {
					...M,
					variables: t
				}),
				L = n("./src/reddit/helpers/trackers/contentTag.ts"),
				B = n("./src/reddit/hooks/useTracking.ts");
			! function(e) {
				e.Accepted = "ACCEPTED", e.Pending = "PENDING"
			}(O || (O = {}));
			var F = n("./src/reddit/models/Toast/index.ts"),
				R = n("./node_modules/lodash/mapValues.js"),
				A = n.n(R),
				P = n("./src/reddit/controls/CheckboxInput/index.tsx");

			function H({
				children: e
			}) {
				return c.a.createElement(c.a.Fragment, null, (t = e, t.split(/\*+/)).map((e, t) => t % 2 == 1 ? c.a.createElement("em", {
					key: t
				}, e) : e));
				var t
			}

			function W({
				question: e,
				selectedAnswers: t,
				onChange: n
			}) {
				return c.a.createElement("div", null, c.a.createElement("h3", {
					className: m.a.header
				}, c.a.createElement(H, null, e.questionTextMarkdown)), e.answerOptions.map(a => c.a.createElement(P.a, {
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
								s = A()(t, (e, t) => !a.includes(t) && e);
							return s[r] = !0, n(e.id, s)
						}
						const {
							[r]: o, ...i
						} = t;
						n(e.id, i)
					})(a, s)
				}, c.a.createElement("span", {
					id: a.id
				}, a.answerText))))
			}
			var V = n("./src/reddit/components/ContentSurvey/RatingCard.tsx");
			const {
				fbt: q
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var U;

			function Z(e) {
				var t, n;
				const {
					subredditId: s,
					survey: r,
					onClose: o = (() => {})
				} = e, [u, f] = Object(l.useState)({}), x = Object(d.d)(), y = X(null == r ? void 0 : r.questions, u), [{
					surveyState: b,
					activeSlide: w
				}, _] = Object(l.useReducer)(({
					activeSlide: e
				}, t) => {
					const n = "forward" === t ? Math.min(e + 1, y.length + 1) : Math.max(e - 1, 0);
					return {
						surveyState: 0 === n ? U.Intro : n === y.length + 1 ? U.Tag : U.Survey,
						activeSlide: n
					}
				}, {
					surveyState: U.Intro,
					activeSlide: 0
				}), C = y[w - 1], E = Object(B.a)();
				Object(l.useEffect)(() => {
					switch (w) {
						case 0:
							return E(Object(L.c)());
						case 1:
							return E(Object(L.e)());
						case y.length + 1:
							return E(Object(L.n)())
					}
					if (C) return E(Object(L.j)(C.pageType))
				}, [w, E]);
				const [k, {
					pending: j,
					error: N
				}] = Object(p.a)(I);
				Object(l.useEffect)(() => {
					N && (h.c.captureException(N), x(Object(g.f)(Object(g.e)(q._("An error occurred", null, {
						hk: "1VDETi"
					}), F.b.Error))))
				}, [N, x]);
				const [M, T] = Object(l.useState)(null);
				if (!r) return null;
				if (!r.isEligible) return null;

				function R(e, t) {
					f(Object(a.setIn)(u, [e], t)), E(Object(L.a)(C.pageType))
				}
				const A = null !== (t = u[null == C ? void 0 : C.id]) && void 0 !== t ? t : {},
					P = (null !== (n = null == C ? void 0 : C.answerOptions) && void 0 !== n ? n : []).map(e => e.id).some(e => A[e]),
					H = b === U.Survey && w > 1;
				return c.a.createElement(S, {
					activeSlide: w,
					advance: async function() {
						if (b === U.Survey && w === y.length && T(function(e, t) {
								var n;
								let a = null,
									s = [];
								const r = X(e.questions, t);
								for (const o of r)
									for (const e of o.answerOptions) {
										if (!(null === (n = t[o.id]) || void 0 === n ? void 0 : n[e.id])) continue;
										if (!Q(e)) continue;
										const r = e.contentRatingTag;
										(!a || a.weight < r.weight) && (a = r), r.weight > 0 && s.push(e)
									}
								if (s = i()(s, e => -e.contentRatingTag.weight), !a) throw new Error("no question was selected!");
								return {
									id: "",
									version: e.version,
									createdAt: Date.now(),
									isFromMod: !0,
									status: O.Pending,
									rating: a,
									ratingReasons: s
								}
							}(r, u)), b === U.Tag) {
							if (j) return;
							return E(Object(L.m)()), await k({
								input: {
									subredditId: s,
									version: r.version,
									answers: X(r.questions, u).map(e => ({
										questionId: e.id,
										answerIds: D(e, u).map(e => e.id)
									}))
								}
							}), x(Object(g.f)(Object(g.e)(q._("Thanks for setting up your Content Tag!", null, {
								hk: "3HW5GV"
							}), F.b.SuccessCommunityGreen))), x({
								type: v.z,
								payload: {
									id: s,
									response: M
								}
							}), void(N || o())
						}
						_("forward"), C ? E(Object(L.i)(C.pageType, D(C, u).map(e => e.id))) : 0 === w && E(Object(L.l)())
					},
					goBack: function() {
						_("back"), C && E(Object(L.b)(C.pageType))
					},
					onClose: o,
					progressCurrent: H ? w - 1 : 0,
					progressTotal: H ? y.length - 1 : 0,
					disableNext: j || b === U.Survey && !P,
					buttonText: z(b)
				}, c.a.createElement("div", {
					className: m.a.result
				}, c.a.createElement("p", {
					className: m.a.heading
				}, q._("Get started with content tags", null, {
					hk: "2WspCv"
				})), q._("{=Not Safe for Work (NSFW) can mean different things to different people, so we're evolving the NSFW tag into more descriptive tags that help people know what to expect when they visit your community.}{=Every public and restricted community will get a content tag, and this survey is your mod team's chance to give your input.}{=Here's how it works:}{=Consult your mod team Only one moderator can take and submit the survey, so consult with your fellow mods before submitting.}{=Take the survey This survey will ask you about how different mature themes are posted about and discussed in your community.}{=Keep doing what you're doing Once you get your tag, you don't need to change anything about your community and how you run it.}{=If you want to learn more or have questions, visit ourcommunity content tags FAQ .}", [q._param("=Not Safe for Work (NSFW) can mean different things to different people, so we're evolving the NSFW tag into more descriptive tags that help people know what to expect when they visit your community.", c.a.createElement("p", {
					className: m.a.introCopy
				}, q._("Not Safe for Work (NSFW) can mean different things to different people, so we're evolving the NSFW tag into more descriptive tags that help people know what to expect when they visit your community.", null, {
					hk: "1Fer1r"
				}))), q._param("=Every public and restricted community will get a content tag, and this survey is your mod team's chance to give your input.", c.a.createElement("p", {
					className: m.a.introCopy
				}, q._("Every public and restricted community will get a content tag, and this survey is your mod team's chance to give your input.", null, {
					hk: "4cgXFP"
				}))), q._param("=Here's how it works:", c.a.createElement("p", {
					className: m.a.introCopy
				}, q._("Here's how it works:", null, {
					hk: "36BNnd"
				}))), q._param("=Consult your mod team Only one moderator can take and submit the survey, so consult with your fellow mods before submitting.", c.a.createElement("p", {
					className: m.a.introCopy
				}, q._("{=Consult your mod team} Only one moderator can take and submit the survey, so consult with your fellow mods before submitting.", [q._param("=Consult your mod team", c.a.createElement("strong", null, q._("Consult your mod team", null, {
					hk: "23H654"
				})))], {
					hk: "jnTSv"
				}))), q._param("=Take the survey This survey will ask you about how different mature themes are posted about and discussed in your community.", c.a.createElement("p", {
					className: m.a.introCopy
				}, q._("{=Take the survey} This survey will ask you about how different mature themes are posted about and discussed in your community.", [q._param("=Take the survey", c.a.createElement("strong", null, q._("Take the survey", null, {
					hk: "2hQ3n7"
				})))], {
					hk: "2KYjT1"
				}))), q._param("=Keep doing what you're doing Once you get your tag, you don't need to change anything about your community and how you run it.", c.a.createElement("p", {
					className: m.a.introCopy
				}, q._("{=Keep doing what you're doing} Once you get your tag, you don't need to change anything about your community and how you run it.", [q._param("=Keep doing what you're doing", c.a.createElement("strong", null, q._("Keep doing what you're doing", null, {
					hk: "3euaLx"
				})))], {
					hk: "4f5ry9"
				}))), q._param("=If you want to learn more or have questions, visit ourcommunity content tags FAQ .", c.a.createElement("p", {
					className: m.a.introCopy
				}, q._("If you want to learn more or have questions, visit our {=community content tags FAQ} .", [q._param("=community content tags FAQ", c.a.createElement("a", {
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
					return c.a.createElement(W, {
						key: e.id,
						question: e,
						selectedAnswers: null !== (t = u[e.id]) && void 0 !== t ? t : {},
						onChange: R
					})
				}), M && c.a.createElement("div", {
					key: "result",
					className: m.a.result
				}, c.a.createElement("p", {
					className: m.a.heading
				}, q._("Your Content Tag:", null, {
					hk: "2OUAzB"
				})), c.a.createElement(V.a, {
					ratingResponse: M,
					subredditId: s
				}, c.a.createElement("p", {
					className: m.a.ratingAudience
				}, M.rating.name), c.a.createElement("p", {
					className: m.a.ratingDescription
				}, M.rating.description, " ", c.a.createElement("br", null), q._("(Note: Only moderators can see this tag.)", null, {
					hk: "2PN50Z"
				}))), c.a.createElement("p", {
					className: m.a.reasonsHeader
				}, q._("Posts and discussions include:", null, {
					hk: "12MdUE"
				})), c.a.createElement("ul", null, M.ratingReasons.map(e => c.a.createElement("li", {
					key: e.id,
					className: m.a.reason
				}, e.contentRatingReasonText)))))
			}

			function z(e) {
				switch (e) {
					case U.Intro:
						return q._("Start Survey", null, {
							hk: "41dYsT"
						});
					case U.Survey:
						return q._("Next", null, {
							hk: "2mEXAi"
						});
					case U.Tag:
						return q._("Submit", null, {
							hk: "4aU3dh"
						})
				}
			}

			function D(e, t) {
				return e.answerOptions.filter(n => {
					var a;
					return null === (a = t[e.id]) || void 0 === a ? void 0 : a[n.id]
				})
			}

			function X(e, t) {
				let n = [];
				for (const a of null != e ? e : []) {
					const e = D(a, t),
						s = r()(e, e => {
							var t;
							return null !== (t = e.subQuestions) && void 0 !== t ? t : []
						});
					n = [...n, a, ...X(s, t)]
				}
				return n
			}

			function Q(e) {
				return "ContentRatingSurveyLeafAnswer" === e.__typename
			}! function(e) {
				e[e.Intro = 0] = "Intro", e[e.Survey = 1] = "Survey", e[e.Tag = 2] = "Tag"
			}(U || (U = {}))
		},
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, n) {
			e.exports = {
				CloseIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				closeIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				ModalBody: "_2R3RlhymCOkPrz9TusvcPq",
				modalBody: "_2R3RlhymCOkPrz9TusvcPq",
				ModalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				modalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				ModalText: "mFTHPdbEAklUs8yhT4Xm7",
				modalText: "mFTHPdbEAklUs8yhT4Xm7",
				ModalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				modalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				ModalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				modalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				ModalMetaText: "_27eskYssCs-urVW1uHI4YI",
				modalMetaText: "_27eskYssCs-urVW1uHI4YI",
				ModalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				modalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				ModalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				modalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				ModalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				modalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				ModalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				modalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				ModalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				modalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				ModalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				modalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				ModalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				modalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				ModalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				modalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				TextArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				textArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				WarningButton: "_17UyTSs2atqnKg9dIq5ERg",
				warningButton: "_17UyTSs2atqnKg9dIq5ERg",
				PrimaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				primaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				CancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				cancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				RemoveButton: "_2ulRgczjI5SWCMgSA1CNLj",
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj",
				ConfirmButton: "JZC61-VzVuaiHdWuRUiSC",
				confirmButton: "JZC61-VzVuaiHdWuRUiSC"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "n", (function() {
				return v
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "o", (function() {
				return f
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "m", (function() {
				return y
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "j", (function() {
				return w
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "q", (function() {
				return k
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "l", (function() {
				return N
			})), n.d(t, "t", (function() {
				return S
			})), n.d(t, "u", (function() {
				return M
			})), n.d(t, "r", (function() {
				return T
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "s", (function() {
				return I
			})), n.d(t, "c", (function() {
				return L
			}));
			var a = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/Input/ModalInput.tsx"),
				c = n("./src/reddit/icons/svgs/Close/index.tsx"),
				d = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				u = n.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const p = s.a.wrapped(c.a, "CloseIcon", u.a),
				h = s.a.section("ModalBody", u.a),
				v = s.a.section("ModalPostPreview", u.a),
				g = s.a.p("ModalText", u.a),
				f = s.a.div("ModalSmallText", u.a),
				x = s.a.div("ModalDescriptionText", u.a),
				y = s.a.div("ModalMetaText", u.a),
				b = s.a.label("ModalFormItem", u.a),
				w = s.a.wrapped(l.a, "ModalInput", u.a),
				_ = s.a.label("ModalInputLabel", u.a),
				C = s.a.footer("ModalFooter", u.a),
				E = s.a.header("ModalHeader", u.a),
				k = s.a.div("ModalTitle", u.a),
				j = s.a.div("ModalAnnotation", u.a),
				N = s.a.div("ModalMain", u.a),
				S = s.a.textarea("TextArea", u.a),
				M = s.a.wrapped(i.l, "WarningButton", u.a),
				T = s.a.wrapped(i.l, "PrimaryButton", u.a),
				O = s.a.wrapped(i.o, "CancelButton", u.a),
				I = s.a.wrapped(i.r, "RemoveButton", u.a),
				L = ({
					className: e,
					...t
				}) => o.a.createElement(i.t, m({
					kind: i.b.Button,
					priority: i.c.Primary,
					className: Object(a.a)(u.a.ConfirmButton, e)
				}, t))
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
				l = n("./src/reddit/layout/row/Inline/index.tsx"),
				c = n("./src/reddit/controls/CheckboxInput/index.m.less"),
				d = n.n(c);
			t.a = e => s.a.createElement(l.a, {
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
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/constants/keycodes.ts"),
				c = n("./src/reddit/controls/Input/index.m.less"),
				d = n.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			class m extends s.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = ({
						keyCode: e
					}) => {
						e === l.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...n
					} = this.props;
					return s.a.createElement("input", u({
						className: Object(o.a)(d.a.input, e),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(r.b)(null, {
				closeModal: i.f
			})(m)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/hooks/useGqlContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var a = n("./node_modules/react/index.js"),
				s = n("./src/reddit/contexts/ApiContext.tsx");

			function r() {
				const {
					gqlContext: e
				} = Object(a.useContext)(s.a);
				return e
			}
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
		"./src/reddit/icons/svgs/AddCollection/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, s.a.createElement("defs", null, s.a.createElement("path", {
				id: "svg-add-collection",
				d: "M19.2 2.4a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V4.8a2.4 2.4 0 0 1 2.4-2.4h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V8.4A2.4 2.4 0 0 1 4.8 6h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v7.2a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.4V12a2.4 2.4 0 0 1 2.4-2.4h14.4zm-3.806 5.1H12.9v-2.494a.9.9 0 1 0-1.8 0V14.7H8.607a.9.9 0 1 0 0 1.8H11.1v2.494a.9.9 0 1 0 1.8 0V16.5h2.494a.9.9 0 0 0 0-1.8z"
			})), s.a.createElement("use", {
				fill: "inherit",
				xlinkHref: "#svg-add-collection",
				fillRule: "evenodd"
			}))
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);

			function r(e) {
				return s.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), s.a.createElement("path", {
					clipRule: "evenodd",
					d: "M13 9H11V7C11 6.7235 10.7765 6.5 10.5 6.5H9.5C9.2235 6.5 9 6.7235 9 7V9H7C6.724 9 6.5 9.2235 6.5 9.5V10.5C6.5 10.7765 6.724 11 7 11H9V13C9 13.2765 9.2235 13.5 9.5 13.5H10.5C10.7765 13.5 11 13.2765 11 13V11H13C13.2765 11 13.5 10.7765 13.5 10.5V9.5C13.5 9.2235 13.2765 9 13 9Z",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(i.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, s.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, n) {
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
				d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
			}), s.a.createElement("path", {
				d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
			}))
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
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
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, s.a.createElement("g", {
				stroke: "none"
			}, s.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Powerup/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 32 32",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("path", {
				d: "M12.249 32c-.4 0-.8-.1-1.2-.25l-.05-.05-5.05-2.6c-1.25-.7-1.75-2.2-1.25-3.5l.05-.1 2.45-5.45-3.15-1.5a2.985 2.985 0 01-1.4-3.55l3.5-12.05C6.649 1.2 8.299 0 10.099 0h7.8c.45 0 .9.1 1.3.3l.15.1 4.85 2.45c1.5.8 2.05 2.55 1.35 4.05l-2.2 4.3 4.45 2.25c.8.45 1.35 1.25 1.45 2.2.1.9-.2 1.8-.9 2.45l-14.15 13.15c-.55.5-1.25.75-1.95.75z",
				fill: "#000"
			}), s.a.createElement("path", {
				d: "M10.648 17l-.85 2.1-4.65-2.2c.1.05.25.1.4.1h5.1zM23.749 13.6l3.1 1.6c.5.3.65 1 .15 1.45L12.849 29.8c-.3.25-.65.3-.95.15l-4.85-2.5c.3.1.65.1.9-.15l14.15-13.15c.5-.45.35-1.15-.15-1.45l1.8.9z",
				fill: "#FF4500"
			}), s.a.createElement("path", {
				d: "M23.75 13.6l3.1 1.6c.5.3.65 1 .15 1.45l-4.9-2.5c.5-.45.35-1.15-.15-1.45l1.8.9z",
				fill: "#FF8717"
			}), s.a.createElement("path", {
				d: "M18.898 3.5c.25-.55.05-1.1-.45-1.4l4.9 2.5c.5.25.7.85.45 1.4l-3.35 6.55h-6.05l4.5-9.05z",
				fill: "#FF4500"
			}), s.a.createElement("path", {
				d: "M18.9 3.5c.25-.55.05-1.1-.45-1.4l4.9 2.5c.5.25.7.85.45 1.4l-4.9-2.5z",
				fill: "#FF8717"
			}), s.a.createElement("path", {
				d: "M21.95 12.65c.5.3.65 1 .15 1.45L7.95 27.3c-.3.25-.65.3-.9.15l-.1-.05a.86.86 0 01-.4-1.05l4.1-9.35h-5.1c-.15 0-.3-.05-.45-.1l-.1-.05c-.4-.25-.65-.75-.5-1.25L8.05 3.55A2.19 2.19 0 0110.15 2h7.8c.15 0 .3.05.45.1l.05.05c.45.25.7.85.45 1.4l-4.5 9.05h7.1c.15 0 .3.05.4.1l.05-.05z",
				fill: "#FFD635"
			}), s.a.createElement("path", {
				d: "M15.599 3.45c.55-.15 1.15-.25 1.7-.45-.6-.1-1.15-.15-1.75-.2-.6-.05-1.15-.05-1.75-.1-1.15-.05-2.25 0-3.4.05-.55 0-1.05.3-1.35.8-.15.3-.15.35-.2.5l-.15.4-.5 1.55c-.35 1.05-.7 2.1-1 3.15-.3 1.05-.65 2.1-.9 3.2-.3 1.05-.6 2.15-.8 3.25.55-1 1-2 1.5-3 .45-1 .9-2 1.35-3.05.4-1 .85-2.05 1.2-3.1l.6-1.55.25-.65h.05c1.15-.1 2.3-.25 3.4-.45.6-.1 1.15-.2 1.75-.35zM20.25 13.35c-1.1-.05-2.2-.05-3.3 0-.55 0-1.1.05-1.65.1-.55.05-1.1.1-1.65.2.55.15 1.1.25 1.6.35.55.1 1.1.2 1.65.25.6.1 1.25.15 1.85.2-.45.45-.9.85-1.3 1.3-.75.75-1.5 1.5-2.25 2.3-.75.8-1.5 1.55-2.2 2.35-.7.8-1.45 1.6-2.1 2.45.9-.65 1.7-1.3 2.55-2 .85-.7 1.65-1.4 2.45-2.1.8-.7 1.6-1.45 2.4-2.15l2.35-2.2c.1-.1.15-.25.2-.4 0-.4-.3-.65-.6-.65z",
				fill: "#fff"
			}))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = ({
				className: e
			}) => s.a.createElement("svg", {
				className: e,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fillRule: "evenodd"
			}, s.a.createElement("path", {
				d: "M0 12h12V0H0z",
				fill: "none"
			}), s.a.createElement("path", {
				d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				i = n.n(o);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", l({}, e, {
				className: Object(r.a)(i.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, n) {
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
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = function({
				className: e
			}) {
				return s.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, s.a.createElement("g", {
					fill: "inherit"
				}, s.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
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
				s = n("./src/reddit/layout/row/Inline/index.m.less"),
				r = n.n(s);
			t.a = a.a.div("inlineRow", r.a)
		},
		"./src/redditGQL/operations/SubmitContentRatingSurvey.json": function(e) {
			e.exports = JSON.parse('{"id":"8cd4e428e688"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/1.71f7d0e6bbbf133fbd24.js.map