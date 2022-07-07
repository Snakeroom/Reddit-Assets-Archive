// https://www.redditstatic.com/desktop2x/CommunityTopicSurvey.aeb87ac2a56ba8acda5e.js
// Retrieved at 7/7/2022, 2:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommunityTopicSurvey"], {
		"./node_modules/react-uid/dist/es2015/hooks.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				s = function() {
					var e = 1,
						t = new WeakMap,
						n = function(r, s) {
							return "number" == typeof r || "string" == typeof r ? s ? "idx-" + s : "val-" + r : t.has(r) ? "uid" + t.get(r) : (t.set(r, e++), n(r))
						};
					return n
				},
				o = (s(), function(e) {
					return void 0 === e && (e = ""), {
						value: 1,
						prefix: e,
						uid: s()
					}
				}),
				i = o(),
				d = r.createContext(o()),
				c = function() {
					return r.useState((e = r.useContext(d), {
						uid: n = function(e) {
							return e ? e.prefix : ""
						}(t = e || i) + function(e) {
							return e.value++
						}(t),
						gen: function(e) {
							return n + t.uid(e)
						}
					}));
					var e, t, n
				},
				u = function() {
					return c()[0].uid
				},
				a = function() {
					return c()[0].gen
				}
		},
		"./src/reddit/actions/subreddit/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "j", (function() {
				return i
			})), n.d(t, "i", (function() {
				return d
			})), n.d(t, "r", (function() {
				return c
			})), n.d(t, "q", (function() {
				return u
			})), n.d(t, "m", (function() {
				return a
			})), n.d(t, "l", (function() {
				return l
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "p", (function() {
				return _
			})), n.d(t, "o", (function() {
				return b
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "w", (function() {
				return I
			})), n.d(t, "v", (function() {
				return D
			})), n.d(t, "x", (function() {
				return x
			})), n.d(t, "y", (function() {
				return h
			})), n.d(t, "z", (function() {
				return T
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "t", (function() {
				return v
			})), n.d(t, "u", (function() {
				return C
			})), n.d(t, "s", (function() {
				return U
			}));
			const r = "SUBREDDIT__ADD_TOP_SUBREDDIT_MODELS",
				s = "SUBREDDIT__ADD_TOP_SUBREDDIT_RANKINGS",
				o = "SUBREDDIT__ADD_TOP_SUBREDDIT_RANKINGS_PAGE_INFO",
				i = "SUBREDDIT__POSTS_LOADED",
				d = "SUBREDDIT__POSTS_SET_FAILED",
				c = "SUBREDDIT__SUBREDDITS_POSTS_LOADED",
				u = "SUBREDDIT__SUBREDDITS_POSTS_SET_FAILED",
				a = "SUBREDDIT__RANKINGS_PENDING",
				l = "SUBREDDIT__RANKINGS_LOADED",
				m = "SUBREDDIT__RANKINGS_FAILED",
				_ = "SUBREDDIT__SIMILAR_SUBREDDITS_PENDING",
				b = "SUBREDDIT__SIMILAR_SUBREDDITS_LOADED",
				p = "SUBREDDIT__SIMILAR_SUBREDDITS_FAILED",
				S = "SUBREDDIT__ONBOARDING_SUBREDDITS_PENDING",
				f = "SUBREDDIT__ONBOARDING_SUBREDDITS_LOADED",
				E = "SUBREDDIT__ONBOARDING_SUBREDDITS_FAILED",
				I = "SUBREDDIT__EDIT_REQUESTED",
				D = "SUBREDDIT__EDIT_FAILED",
				x = "SUBREDDIT__EDIT_SUCCESS",
				h = "SUBREDDIT_QUESTIONS_LOADED",
				T = "SUBREDDIT_SURVEY_ANSWERED",
				g = "SUBREDDIT_SURVEY_DISMISSED",
				O = "SUBREDDIT_SURVEY_DISMISS",
				v = "SUBREDDIT_ABOUT_INFO_UPDATE__PENDING",
				C = "SUBREDDIT_ABOUT_INFO_UPDATE__SUCCESS",
				U = "SUBREDDIT_ABOUT_INFO_UPDATE__FAILED"
		},
		"./src/reddit/components/CommunityTopicSurvey/index.m.less": function(e, t, n) {
			e.exports = {
				survey: "_38x4rPvvkwQ6NMJG2ex7X",
				inFeed: "_2HIXc0CnGxfzNp0KsgwpF-",
				closeButton: "V_TnSwg2o9gHakrKQhX3C",
				closeText: "_3HI49Q7TJQME5s2hgKebpJ",
				question: "IVHmIcBw9nMeqPbAkzV1D",
				buttonGroup: "_3MlgEhOs_SeeHPBxl7OdG_",
				submitButton: "_7RdJywSTypfwEbpxEdDba"
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "default", (function() {
				return L
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/lib/sentry/index.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/RecordCommunityAnswer.json"),
				l = (e, t) => Object(u.a)(e, {
					...a,
					variables: t
				}),
				m = n("./src/reddit/selectors/subreddit.ts");

			function _(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
				const n = e.answerOptions.map(e => e.id).filter(e => !t.includes(e)),
					r = t => e.answerOptions.find(e => e.id === t).text;
				return {
					taggingQuestion: e.questionText,
					taggingQuestionId: e.id,
					selectedAnswerIds: t,
					selectedAnswers: t.map(r),
					nonSelectedAnswerIds: n,
					nonSelectedAnswers: n.map(r)
				}
			}
			const b = (e, t) => n => ({
					source: "community_tagging",
					action: "view",
					noun: "verify_topics_module",
					subreddit: Object(m.U)(n, {
						subredditId: t
					}),
					raterTag: _(e)
				}),
				p = (e, t, n) => r => ({
					source: "community_tagging",
					action: "click",
					noun: "select_answer",
					subreddit: Object(m.U)(r, {
						subredditId: n
					}),
					raterTag: _(e, t)
				}),
				S = (e, t, n) => r => ({
					source: "community_tagging",
					action: "click",
					noun: "submit",
					subreddit: Object(m.U)(r, {
						subredditId: n
					}),
					raterTag: _(e, t)
				}),
				f = (e, t) => n => ({
					source: "community_tagging",
					action: "click",
					noun: "close",
					subreddit: Object(m.U)(n, {
						subredditId: t
					}),
					raterTag: _(e)
				});
			var E = n("./src/reddit/hooks/useGqlContext.ts"),
				I = n("./src/reddit/hooks/useTracking.ts"),
				D = n("./src/reddit/models/Subreddit/index.ts"),
				x = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/actions/subreddit/constants.ts"),
				T = n("./src/lib/classNames/index.ts"),
				g = n("./src/reddit/components/StructuredStyles/StyledComponents/index.tsx"),
				O = n("./src/reddit/controls/Button/index.tsx"),
				v = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/react-uid/dist/es2015/hooks.js")),
				C = n("./src/reddit/controls/ButtonGroup/index.m.less"),
				U = n.n(C);

			function R(e) {
				const {
					options: t,
					onChange: n = (() => {})
				} = e, r = Object(v.b)(), [i, d] = Object(s.useState)({});
				return o.a.createElement("div", {
					className: U.a.buttonGroup,
					role: "group",
					onClick: e => e.stopPropagation()
				}, t.map(e => {
					let {
						text: s,
						id: c
					} = e;
					return o.a.createElement(o.a.Fragment, {
						key: c
					}, o.a.createElement("input", {
						type: "checkbox",
						id: r(c),
						name: r(c),
						className: U.a.checkbox,
						checked: !!i[c],
						onChange: () => (function(e) {
							const r = t.find(t => t.id === e),
								s = t.filter(e => e.isMutuallyExclusive),
								o = i[e];
							let c;
							if (r.isMutuallyExclusive) c = {
								[e]: !o
							};
							else {
								(c = {
									...i
								})[e] = !o;
								for (const e of s) c[e.id] = !1
							}
							d(c);
							const u = Object.keys(c).filter(e => c[e]);
							n(u)
						})(c)
					}), o.a.createElement("label", {
						htmlFor: r(c),
						className: U.a.option
					}, s))
				}))
			}
			var B = n("./src/reddit/controls/TextButton/index.tsx"),
				y = n("./src/reddit/components/SubredditMention/index.tsx"),
				N = n("./src/reddit/constants/experiments.ts");

			function j(e) {
				const {
					children: t
				} = e, n = (null !== (r = /(.*)(\br\/\w+\b)(.*)/.exec(t)) && void 0 !== r ? r : [""]).slice(1);
				var r;
				return 0 === n.length ? o.a.createElement(o.a.Fragment, null, t) : o.a.createElement(o.a.Fragment, null, n[0], o.a.createElement(y.a, {
					isFeatureFlagEnabled: !0,
					isUserInTreatment: !0,
					userVariant: N.Cf.SmIconHc,
					subredditName: n[1].split("/")[1],
					rtJsonElementProps: {}
				}), n[2])
			}
			var A = n("./src/reddit/components/CommunityTopicSurvey/index.m.less"),
				k = n.n(A);

			function w(e) {
				const {
					questionId: t,
					questionText: n,
					answers: i,
					inFeed: d,
					onClose: c
				} = e, [u, a] = Object(s.useState)([]);
				return o.a.createElement("div", {
					className: Object(T.a)(k.a.survey, d && k.a.inFeed),
					"data-survey": !0,
					onClick: e => e.stopPropagation()
				}, o.a.createElement(B.a, {
					className: k.a.closeButton,
					onClick: () => c(t)
				}, o.a.createElement(g.b, null), o.a.createElement("span", {
					className: k.a.closeText
				}, r.fbt._("Close", null, {
					hk: "4gbyAA"
				}))), o.a.createElement("p", {
					className: k.a.question
				}, o.a.createElement(j, null, n)), o.a.createElement(R, {
					options: i,
					onChange: function(n) {
						var r;
						a(n), null === (r = e.onSelect) || void 0 === r || r.call(e, t, n)
					}
				}), o.a.createElement(O.l, {
					className: k.a.submitButton,
					redditStyle: !0,
					role: "submit",
					onClick: async function() {
						await e.onSubmit(t, u)
					},
					disabled: 0 === u.length
				}, r.fbt._("Submit", null, {
					hk: "4aU3dh"
				})))
			}

			function M(e) {
				const {
					questionId: t,
					questionText: n,
					answers: i,
					onClose: d,
					noSubmit: c = !1,
					inFeed: u
				} = e, [a, l] = Object(s.useState)([]);
				return o.a.createElement("div", {
					className: Object(T.a)(k.a.survey, u && k.a.inFeed),
					"data-survey": !0,
					onClick: e => e.stopPropagation()
				}, o.a.createElement(B.a, {
					className: k.a.closeButton,
					onClick: () => d(t)
				}, o.a.createElement(g.b, null), o.a.createElement("span", {
					className: k.a.closeText
				}, r.fbt._("Close", null, {
					hk: "4gbyAA"
				}))), o.a.createElement("p", {
					className: k.a.question
				}, o.a.createElement(j, null, n)), o.a.createElement("div", {
					className: k.a.buttonGroup
				}, o.a.createElement(R, {
					onChange: function(n) {
						var r;
						l(n), null === (r = e.onSelect) || void 0 === r || r.call(e, t, n), c && e.onSubmit(t, n)
					},
					options: i.map(e => ({
						...e,
						isMutuallyExclusive: !0
					}))
				})), !c && o.a.createElement(O.l, {
					className: k.a.submitButton,
					redditStyle: !0,
					role: "submit",
					onClick: async function() {
						await e.onSubmit(t, a)
					},
					disabled: 0 === a.length
				}, r.fbt._("Submit", null, {
					hk: "4aU3dh"
				})))
			}

			function L(e) {
				var t;
				const {
					subredditId: n,
					inFeed: u
				} = e, a = Object(I.a)(), m = Object(E.a)(), _ = null !== (t = Object(i.e)(e => e.subreddits.questions[n])) && void 0 !== t ? t : [], T = Object(i.d)(), [g, O] = Object(s.useState)(!1), v = _[0];
				if (Object(s.useEffect)(() => {
						v && !g && a(b(v, n))
					}, [a, v, g, n]), g) return null;
				if (!v) return null;
				async function C(e) {
					l(m(), {
						input: {
							questionId: e,
							answerIds: [],
							skip: !0
						}
					}).catch(), T({
						type: h.d,
						payload: {
							subredditId: n,
							questionId: e
						}
					}), a(f(v, n)), O(!0), T({
						type: h.e,
						payload: {}
					})
				}
				async function U(e, t) {
					await l(m(), {
						input: {
							questionId: e,
							answerIds: t,
							skip: !1
						}
					}), T({
						type: h.d,
						payload: {
							subredditId: n,
							questionId: e
						}
					}), a(S(v, t, n)), T(Object(c.f)({
						text: r.fbt._("Thank you for your help!", null, {
							hk: "1asBUQ"
						}),
						kind: x.b.SuccessCommunityGreen
					}))
				}

				function R(e, t) {
					a(p(v, t, n))
				}
				switch (v.type) {
					case D.e.Multi:
						return o.a.createElement(w, {
							key: v.id,
							questionId: v.id,
							questionText: v.questionText,
							answers: v.answerOptions,
							onSubmit: U,
							onSelect: R,
							onClose: C,
							inFeed: u
						});
					case D.e.SingleWithSubmit:
						return o.a.createElement(M, {
							key: v.id,
							questionId: v.id,
							questionText: v.questionText,
							answers: v.answerOptions,
							onSubmit: U,
							onSelect: R,
							onClose: C,
							inFeed: u
						});
					case D.e.SingleNoSubmit:
						return o.a.createElement(M, {
							key: v.id,
							questionId: v.id,
							questionText: v.questionText,
							answers: v.answerOptions,
							onSubmit: U,
							onSelect: R,
							onClose: C,
							inFeed: u,
							noSubmit: !0
						})
				}
				return d.c.captureException(`Unknown SubredditQuestionType: ${v.type}`), null
			}
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/reddit/featureFlags/component.tsx");
			const o = Object(r.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				i = Object(s.a)("spBurnLinks", Object(r.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, n) {
			e.exports = {
				H1: "_7T4UafM1PdBGycd5na9nF",
				h1: "_7T4UafM1PdBGycd5na9nF",
				H2: "_1WODZhR-x-fbMu3MOL9cH1",
				h2: "_1WODZhR-x-fbMu3MOL9cH1",
				H3: "WFFrvt6_3z5B7MBcYKr8U",
				h3: "WFFrvt6_3z5B7MBcYKr8U",
				H4: "_2UlSUuiYR4BRv_FiLxCcu9",
				h4: "_2UlSUuiYR4BRv_FiLxCcu9",
				H5: "hnYPKCNkyo9X6QpCXHj1I",
				h5: "hnYPKCNkyo9X6QpCXHj1I",
				H6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				h6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				Hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				M: "_34q3PgLsx9zIU5BiSOjFoM",
				m: "_34q3PgLsx9zIU5BiSOjFoM",
				Pre: "_3GnarIQX9tD_qsgXkfSDz1",
				pre: "_3GnarIQX9tD_qsgXkfSDz1",
				Blockquote: "_28lDeogZhLGXvE95QRPeDL",
				blockquote: "_28lDeogZhLGXvE95QRPeDL",
				P: "_1qeIAgB0cPwnLhDF9XSiJM",
				p: "_1qeIAgB0cPwnLhDF9XSiJM",
				Li: "_3gqTEjt4x9UIIpWiro7YXz",
				li: "_3gqTEjt4x9UIIpWiro7YXz",
				Ul: "_33MEMislY0GAlB78wL1_CR",
				ul: "_33MEMislY0GAlB78wL1_CR",
				Ol: "_1eJr7K139jnMstd4HajqYP",
				ol: "_1eJr7K139jnMstd4HajqYP",
				B: "_12FoOEddL7j_RgMQN0SNeU",
				b: "_12FoOEddL7j_RgMQN0SNeU",
				I: "_7s4syPYtk5hfUIjySXcRE",
				i: "_7s4syPYtk5hfUIjySXcRE",
				U: "HoWuCifWxDx-PnwllGmZd",
				u: "HoWuCifWxDx-PnwllGmZd",
				Sub: "_2aQztsTwdz2uTN4arsyBD6",
				sub: "_2aQztsTwdz2uTN4arsyBD6",
				Sup: "_1jsgSPRO0cMQfs1UZrSovE",
				sup: "_1jsgSPRO0cMQfs1UZrSovE",
				Table: "MRH-njmSb5ZTkfb1o4dqv",
				table: "MRH-njmSb5ZTkfb1o4dqv",
				Tr: "s6JZe6869f81l9E_5G7Q9",
				tr: "s6JZe6869f81l9E_5G7Q9",
				Tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				Tdc: "_1LHijgw3WoeCUe8AUewfUB",
				tdc: "_1LHijgw3WoeCUe8AUewfUB",
				Tdr: "_3DqGFKR55y45L5IxBTgsFz",
				tdr: "_3DqGFKR55y45L5IxBTgsFz",
				Thl: "_4uv59XIILEFm6V3BmtSuR",
				thl: "_4uv59XIILEFm6V3BmtSuR",
				Thc: "_3TNkDptlyGOiWXvdX_acOB",
				thc: "_3TNkDptlyGOiWXvdX_acOB",
				Thr: "_1AUCpXmm3maPuEbUSe90Y8",
				thr: "_1AUCpXmm3maPuEbUSe90Y8",
				A: "_3t5uN8xUmg0TOwRCOGQEcU",
				a: "_3t5uN8xUmg0TOwRCOGQEcU"
			}
		},
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "x", (function() {
				return a
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "g", (function() {
				return S
			})), n.d(t, "v", (function() {
				return f
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "b", (function() {
				return I
			})), n.d(t, "f", (function() {
				return D
			})), n.d(t, "u", (function() {
				return x
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "l", (function() {
				return T
			})), n.d(t, "m", (function() {
				return g
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "t", (function() {
				return v
			})), n.d(t, "p", (function() {
				return C
			})), n.d(t, "o", (function() {
				return U
			})), n.d(t, "q", (function() {
				return R
			})), n.d(t, "s", (function() {
				return B
			})), n.d(t, "r", (function() {
				return y
			})), n.d(t, "a", (function() {
				return N
			})), n.d(t, "w", (function() {
				return j
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/controls/OutboundLink/index.tsx"),
				i = n("./src/reddit/components/RichTextJson/elements.m.less"),
				d = n.n(i),
				c = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const a = [c.a.div("H1", d.a), c.a.div("H2", d.a), c.a.div("H3", d.a), c.a.div("H4", d.a), c.a.div("H5", d.a), c.a.div("H6", d.a)],
				l = c.a.hr("Hr", d.a),
				m = c.a.code("M", d.a),
				_ = c.a.pre("Pre", d.a),
				b = c.a.blockquote("Blockquote", d.a),
				p = c.a.p("P", d.a),
				S = c.a.li("Li", d.a),
				f = c.a.ul("Ul", d.a),
				E = c.a.ol("Ol", d.a),
				I = c.a.strong("B", d.a),
				D = c.a.em("I", d.a),
				x = c.a.span("U", d.a),
				h = e => s.a.createElement("del", e),
				T = c.a.sub("Sub", d.a),
				g = c.a.sup("Sup", d.a),
				O = c.a.table("Table", d.a),
				v = c.a.tr("Tr", d.a),
				C = c.a.td("Tdl", d.a),
				U = c.a.td("Tdc", d.a),
				R = c.a.td("Tdr", d.a),
				B = c.a.th("Thl", d.a),
				y = c.a.th("Thc", d.a),
				N = (c.a.th("Thr", d.a), c.a.wrapped(e => s.a.createElement(o.b, e), "A", d.a)),
				j = c.a.wrapped(u.a, "A", d.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/index.m.less": function(e, t, n) {
			e.exports = {
				CloseIcon: "_3RAaeGnzROhVYLF2fmshH",
				closeIcon: "_3RAaeGnzROhVYLF2fmshH",
				ThemedChevron: "_2M_5xv3fWesOuUt2gytq6R",
				themedChevron: "_2M_5xv3fWesOuUt2gytq6R",
				Button: "_3Rt3ZY4ojMg7wfI9k69nvr",
				button: "_3Rt3ZY4ojMg7wfI9k69nvr",
				TertiaryButton: "_1K4F8XF0kX4Wn5JczKdGNw",
				tertiaryButton: "_1K4F8XF0kX4Wn5JczKdGNw",
				SubFormTitle: "_2Mcs0_1b4khVpvd3VoPwgO",
				subFormTitle: "_2Mcs0_1b4khVpvd3VoPwgO",
				SecondaryButton: "_3eCD81J-e6itJCgpouLk7F",
				secondaryButton: "_3eCD81J-e6itJCgpouLk7F",
				DeleteButton: "_3qK8hxcissqDUqh0hdhKpA",
				deleteButton: "_3qK8hxcissqDUqh0hdhKpA",
				ModalBody: "NI1TKCw2eJdZ2OUDbjnH7",
				modalBody: "NI1TKCw2eJdZ2OUDbjnH7",
				ModalHeader: "bLHAeXh7YjdFXThswBfW4",
				modalHeader: "bLHAeXh7YjdFXThswBfW4",
				ModalTitle: "_2JAYII4pHjv6tUdk_Nw86K",
				modalTitle: "_2JAYII4pHjv6tUdk_Nw86K",
				ModalMain: "_3sUbdYy2TxbnpDYjBKbQXg",
				modalMain: "_3sUbdYy2TxbnpDYjBKbQXg",
				ModalText: "_11keK7OntunlhHWXBYXlpv",
				modalText: "_11keK7OntunlhHWXBYXlpv",
				ModalFooter: "_20VE_S1Gf-ls6PlYBoW-gD",
				modalFooter: "_20VE_S1Gf-ls6PlYBoW-gD",
				DisabledOverlay: "_14F_la6Xncrsnpa6o4LPO",
				disabledOverlay: "_14F_la6Xncrsnpa6o4LPO",
				ToggleInput: "_12tgaX8PtYIF1972W0C17O",
				toggleInput: "_12tgaX8PtYIF1972W0C17O",
				selected: "_3jtpy3ShATQhbYUePIhv4C"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return S
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "e", (function() {
				return D
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "h", (function() {
				return T
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/ToggleInput/index.m.less"),
				u = n.n(c);
			var a = e => s.a.createElement("div", {
					className: e.className
				}, s.a.createElement("input", {
					className: u.a.input,
					name: e.name,
					value: e.selected ? e.onValue : e.offValue,
					onClick: t => e.onChange(e.selected ? e.offValue : e.onValue),
					readOnly: !0
				})),
				l = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				m = n("./src/reddit/icons/svgs/Close/index.tsx"),
				_ = n("./src/reddit/components/StructuredStyles/StyledComponents/index.m.less"),
				b = n.n(_);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const S = i.a.wrapped(m.a, "CloseIcon", b.a),
				f = i.a.wrapped(l.a, "ThemedChevron", b.a),
				E = i.a.wrapped(d.l, "Button", b.a),
				I = i.a.wrapped(d.r, "TertiaryButton", b.a),
				D = i.a.div("SubFormTitle", b.a),
				x = i.a.wrapped(d.o, "SecondaryButton", b.a),
				h = i.a.wrapped(I, "DeleteButton", b.a),
				T = (i.a.section("ModalBody", b.a), i.a.header("ModalHeader", b.a), i.a.h2("ModalTitle", b.a), i.a.div("ModalMain", b.a), i.a.p("ModalText", b.a), i.a.footer("ModalFooter", b.a), e => s.a.createElement(a, p({}, e, {
					className: Object(o.a)(b.a.ToggleInput, {
						[b.a.selected]: !!e.selected
					})
				})));
			i.a.div("DisabledOverlay", b.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, n) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/SubredditIcon/index.tsx"),
				d = n("./src/reddit/controls/OutboundLink/index.tsx"),
				c = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				u = n.n(c);
			const a = o.a.wrapped(i.b, "SubredditIcon", u.a),
				l = o.a.wrapped(e => s.a.createElement(d.b, e), "S", u.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, n) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./src/higherOrderComponents/makeAsync.tsx"),
				u = n("./src/lib/loadWithRetries/index.ts"),
				a = n("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				l = n("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = n.n(l);
			var _ = Object(c.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(u.a)(() => n.e("SubredditMentionWithIcon").then(n.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent(e) {
						let {
							subredditName: t
						} = e;
						return s.a.createElement("span", {
							className: m.a.subredditMentionContainer
						}, s.a.createElement(a.a, {
							href: `/r/${t}/`
						}, s.a.createElement("span", {
							className: m.a.subredditIconContainer
						}, s.a.createElement(a.b, null)), `r/${t}`))
					}
				}),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/constants/experiments.ts"),
				S = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				f = n("./src/reddit/selectors/subredditMention.ts");
			class E extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: n
						} = this.props;
						t(Object(S.a)({
							...e,
							subredditName: n
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return s.a.createElement(d.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const I = Object(b.c)(E),
				D = Object(i.c)({
					isFeatureFlagEnabled: f.b,
					isUserInTreatment: f.e,
					userVariant: f.a
				}),
				x = Object(o.b)(D),
				h = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: n,
						subredditName: r,
						userVariant: o,
						rtJsonElementProps: i
					} = e;
					if (!n || !t) return s.a.createElement(I, {
						subredditName: r,
						rtJsonElementProps: i
					});
					switch (o) {
						case p.Cf.SmIcon:
							return s.a.createElement(_, {
								subredditName: r,
								rtJsonElementProps: i
							});
						case p.Cf.SmIconHc:
							return s.a.createElement(_, {
								subredditName: r,
								isHoverable: !0,
								rtJsonElementProps: i
							});
						default:
							return s.a.createElement(I, {
								subredditName: r,
								rtJsonElementProps: i
							})
					}
				};
			t.b = x(h)
		},
		"./src/reddit/controls/ButtonGroup/index.m.less": function(e, t, n) {
			e.exports = {
				checkbox: "_3pla8OO99AYPmtaUgA0RIb",
				option: "C5XHgdcrqGWMcZSRloJgg"
			}
		},
		"./src/reddit/controls/ToggleInput/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_2uq1gh0F_Wl3Cb183l1njW"
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const r = Object(i.c)({
					featureEnabled: t => d.d[e](t)
				});
				return Object(o.b)(r)(e => {
					const {
						featureEnabled: r,
						...o
					} = e, i = o;
					return r ? s.a.createElement(t, i) : void 0 !== n ? s.a.createElement(n, i) : null
				})
			}
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/helpers/isComment.ts"),
				o = n("./src/reddit/helpers/isPost.ts"),
				i = n("./src/telemetry/models/Outbound.ts");
			const d = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: n
				} = e;
				if (t && (Object(s.b)(t) || Object(o.b)(t))) return Object(s.b)(t) ? i.SourceElement.Comment : Object(r.x)(n) ? i.SourceElement.PostDetail : Object(r.H)(n) ? i.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "b", (function() {
				return I
			})), n.d(t, "c", (function() {
				return D
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "e", (function() {
				return h
			}));
			var r, s, o = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/helpers/isComment.ts"),
				d = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				u = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				a = n("./src/reddit/selectors/subreddit.ts"),
				l = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(r || (r = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(s || (s = {}));
			const m = e => ({
					...l.n(e),
					source: s.LINK,
					action: o.c.CLICK,
					noun: r.INTERNAL_LINK
				}),
				_ = e => ({
					...l.n(e),
					source: s,
					screen: l.Z(e),
					discoveryUnit: {
						id: "xd_100",
						name: r.SUBREDDIT_HOVERCARD,
						type: u.e.Listing,
						title: r.SUBREDDIT_HOVERCARD
					}
				}),
				b = (e, t) => {
					const {
						renderingObjectInfo: n,
						subredditName: r
					} = t;
					if (!n || !Object(d.b)(n) && !Object(i.b)(n)) return {
						outbound: void 0
					};
					const s = Object(d.b)(n) ? "postId" : "commentId",
						o = {
							url: `/r/${r}/`,
							sourceElement: Object(c.a)(t),
							subredditName: r,
							[s]: n.id
						},
						u = Object(a.z)(e, {
							subredditName: r
						});
					return u ? {
						outbound: {
							...o,
							url: u.url,
							subredditId: u.id
						}
					} : {
						outbound: {
							...o
						}
					}
				},
				p = (e, t) => {
					const {
						renderingObjectInfo: n
					} = t;
					if (!n || !Object(d.b)(n) && !Object(i.b)(n)) return {};
					const r = Object(d.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: l.I(e, n.id),
						subreddit: l.ib(e, r),
						...b(e, t)
					}
				},
				S = e => t => ({
					...m(t),
					...p(t, e)
				}),
				f = e => t => ({
					..._(t),
					source: "global",
					action: o.c.VIEW,
					noun: r.SUBREDDIT_HOVERCARD,
					subreddit: l.jb(t, e),
					screen: l.Z(t)
				}),
				E = (e, t) => n => ({
					..._(n),
					source: s.DISCOVERY_UNIT,
					action: o.c.VIEW,
					noun: r.ITEM_POST,
					post: l.I(n, t),
					subreddit: l.jb(n, e),
					screen: l.Z(n)
				}),
				I = (e, t) => n => ({
					..._(n),
					source: s.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: r.ITEM_POST,
					post: l.I(n, t),
					subreddit: l.jb(n, e),
					screen: l.Z(n)
				}),
				D = e => t => ({
					..._(t),
					subreddit: l.ib(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: r.HEADER_SUBREDDIT
				}),
				x = e => t => ({
					..._(t),
					subreddit: l.ib(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: r.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				h = e => t => ({
					..._(t),
					subreddit: l.ib(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: r.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/hooks/useGqlContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				s = n("./src/reddit/contexts/ApiContext.tsx");

			function o() {
				const {
					gqlContext: e
				} = Object(r.useContext)(s.a);
				return e
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				d = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(o.a)(d.a.chevron, e.className),
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
		"./src/reddit/selectors/subredditMention.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "f", (function() {
				return m
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			const d = e => s.d.subredditMentionD2xExperiment(e),
				c = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: d,
						experimentName: r.vf
					}) || ""
				},
				u = e => {
					const t = c(e);
					return t === r.Cf.SmIcon || t === r.Cf.SmIconHc
				},
				a = (e, t) => {
					let {
						subredditName: n
					} = t;
					return !!e.subreddits.api.models.pending[n]
				},
				l = (e, t) => {
					let {
						subredditName: n
					} = t;
					return !!e.subreddits.api.models.error[n]
				},
				m = (e, t) => {
					let {
						subredditName: n
					} = t;
					const r = Object(i.Y)(e, {
						subredditName: n
					});
					return (r && r.postIds || []).slice(0, 2)
				}
		},
		"./src/redditGQL/operations/RecordCommunityAnswer.json": function(e) {
			e.exports = JSON.parse('{"id":"fea84f5739a4"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommunityTopicSurvey.aeb87ac2a56ba8acda5e.js.map