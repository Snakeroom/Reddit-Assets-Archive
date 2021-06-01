// https://www.redditstatic.com/desktop2x/CommunityTopicSurvey.aa4a014a83728c4c155b.js
// Retrieved at 6/1/2021, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommunityTopicSurvey"], {
		"./node_modules/react-uid/dist/es2015/hooks.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return u
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
				a = function() {
					return c()[0].uid
				},
				u = function() {
					return c()[0].gen
				}
		},
		"./src/graphql/operations/RecordCommunityAnswer.json": function(e) {
			e.exports = JSON.parse('{"id":"fea84f5739a4"}')
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
				a = n("./src/graphql/operations/RecordCommunityAnswer.json"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				l = (e, t) => Object(u.a)(e, {
					...a,
					variables: t
				}),
				m = n("./src/reddit/selectors/subreddit.ts");

			function b(e, t = []) {
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
			const p = (e, t) => n => ({
					source: "community_tagging",
					action: "view",
					noun: "verify_topics_module",
					subreddit: Object(m.U)(n, {
						subredditId: t
					}),
					raterTag: b(e)
				}),
				f = (e, t, n) => r => ({
					source: "community_tagging",
					action: "click",
					noun: "select_answer",
					subreddit: Object(m.U)(r, {
						subredditId: n
					}),
					raterTag: b(e, t)
				}),
				_ = (e, t, n) => r => ({
					source: "community_tagging",
					action: "click",
					noun: "submit",
					subreddit: Object(m.U)(r, {
						subredditId: n
					}),
					raterTag: b(e, t)
				}),
				x = (e, t) => n => ({
					source: "community_tagging",
					action: "click",
					noun: "close",
					subreddit: Object(m.U)(n, {
						subredditId: t
					}),
					raterTag: b(e)
				});
			var h = n("./src/reddit/hooks/useGqlContext.ts"),
				g = n("./src/reddit/hooks/useTracking.ts"),
				v = n("./src/reddit/models/Subreddit/index.ts"),
				E = n("./src/reddit/models/Toast/index.ts"),
				S = n("./src/reddit/actions/subreddit/constants.ts"),
				I = n("./src/lib/classNames/index.ts"),
				C = n("./src/reddit/components/StructuredStyles/StyledComponents/index.tsx"),
				y = n("./src/reddit/controls/Button/index.tsx"),
				O = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/react-uid/dist/es2015/hooks.js")),
				j = n("./src/reddit/controls/ButtonGroup/index.m.less"),
				T = n.n(j);

			function w(e) {
				const {
					options: t,
					onChange: n = (() => {})
				} = e, r = Object(O.b)(), [i, d] = Object(s.useState)({});
				return o.a.createElement("div", {
					className: T.a.buttonGroup,
					role: "group",
					onClick: e => e.stopPropagation()
				}, t.map(({
					text: e,
					id: s
				}) => o.a.createElement(o.a.Fragment, {
					key: s
				}, o.a.createElement("input", {
					type: "checkbox",
					id: r(s),
					name: r(s),
					className: T.a.checkbox,
					checked: !!i[s],
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
						const a = Object.keys(c).filter(e => c[e]);
						n(a)
					})(s)
				}), o.a.createElement("label", {
					htmlFor: r(s),
					className: T.a.option
				}, e))))
			}
			var k = n("./src/reddit/controls/TextButton/index.tsx"),
				B = n("./src/reddit/components/SubredditMention/index.tsx"),
				N = n("./src/reddit/constants/experiments.ts");

			function D(e) {
				const {
					children: t
				} = e, n = (null !== (r = /(.*)(\br\/\w+\b)(.*)/.exec(t)) && void 0 !== r ? r : [""]).slice(1);
				var r;
				return 0 === n.length ? o.a.createElement(o.a.Fragment, null, t) : o.a.createElement(o.a.Fragment, null, n[0], o.a.createElement(B.a, {
					isFeatureFlagEnabled: !0,
					isUserInTreatment: !0,
					userVariant: N.qd.SmIconHc,
					subredditName: n[1].split("/")[1],
					rtJsonElementProps: {}
				}), n[2])
			}
			var U = n("./src/reddit/components/CommunityTopicSurvey/index.m.less"),
				M = n.n(U);
			const {
				fbt: R
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function q(e) {
				const {
					questionId: t,
					questionText: n,
					answers: r,
					inFeed: i,
					onClose: d
				} = e, [c, a] = Object(s.useState)([]);
				return o.a.createElement("div", {
					className: Object(I.a)(M.a.survey, i && M.a.inFeed),
					"data-survey": !0,
					onClick: e => e.stopPropagation()
				}, o.a.createElement(k.a, {
					className: M.a.closeButton,
					onClick: () => d(t)
				}, o.a.createElement(C.b, null), o.a.createElement("span", {
					className: M.a.closeText
				}, R._("Close", null, {
					hk: "4gbyAA"
				}))), o.a.createElement("p", {
					className: M.a.question
				}, o.a.createElement(D, null, n)), o.a.createElement(w, {
					options: r,
					onChange: function(n) {
						var r;
						a(n), null === (r = e.onSelect) || void 0 === r || r.call(e, t, n)
					}
				}), o.a.createElement(y.i, {
					className: M.a.submitButton,
					redditStyle: !0,
					role: "submit",
					onClick: async function() {
						await e.onSubmit(t, c)
					},
					disabled: 0 === c.length
				}, R._("Submit", null, {
					hk: "7ztww"
				})))
			}
			const {
				fbt: A
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function F(e) {
				const {
					questionId: t,
					questionText: n,
					answers: r,
					onClose: i,
					noSubmit: d = !1,
					inFeed: c
				} = e, [a, u] = Object(s.useState)([]);
				return o.a.createElement("div", {
					className: Object(I.a)(M.a.survey, c && M.a.inFeed),
					"data-survey": !0,
					onClick: e => e.stopPropagation()
				}, o.a.createElement(k.a, {
					className: M.a.closeButton,
					onClick: () => i(t)
				}, o.a.createElement(C.b, null), o.a.createElement("span", {
					className: M.a.closeText
				}, A._("Close", null, {
					hk: "4gbyAA"
				}))), o.a.createElement("p", {
					className: M.a.question
				}, o.a.createElement(D, null, n)), o.a.createElement("div", {
					className: M.a.buttonGroup
				}, o.a.createElement(w, {
					onChange: function(n) {
						var r;
						u(n), null === (r = e.onSelect) || void 0 === r || r.call(e, t, n), d && e.onSubmit(t, n)
					},
					options: r.map(e => ({
						...e,
						isMutuallyExclusive: !0
					}))
				})), !d && o.a.createElement(y.i, {
					className: M.a.submitButton,
					redditStyle: !0,
					role: "submit",
					onClick: async function() {
						await e.onSubmit(t, a)
					},
					disabled: 0 === a.length
				}, A._("Submit", null, {
					hk: "7ztww"
				})))
			}

			function L(e) {
				var t;
				const {
					subredditId: n,
					inFeed: a
				} = e, u = Object(g.a)(), m = Object(h.a)(), b = null !== (t = Object(i.e)(e => e.subreddits.questions[n])) && void 0 !== t ? t : [], I = Object(i.d)(), [C, y] = Object(s.useState)(!1), O = b[0];
				if (Object(s.useEffect)(() => {
						O && !C && u(p(O, n))
					}, [u, O, C, n]), C) return null;
				if (!O) return null;
				async function j(e) {
					l(m(), {
						input: {
							questionId: e,
							answerIds: [],
							skip: !0
						}
					}).catch(), I({
						type: S.d,
						payload: {
							subredditId: n,
							questionId: e
						}
					}), u(x(O, n)), y(!0), I({
						type: S.e,
						payload: {}
					})
				}
				async function T(e, t) {
					await l(m(), {
						input: {
							questionId: e,
							answerIds: t,
							skip: !1
						}
					}), I({
						type: S.d,
						payload: {
							subredditId: n,
							questionId: e
						}
					}), u(_(O, t, n)), I(Object(c.f)({
						text: r.fbt._("Thank you for your help!", null, {
							hk: "1asBUQ"
						}),
						kind: E.b.SuccessCommunityGreen
					}))
				}

				function w(e, t) {
					u(f(O, t, n))
				}
				switch (O.type) {
					case v.d.Multi:
						return o.a.createElement(q, {
							key: O.id,
							questionId: O.id,
							questionText: O.questionText,
							answers: O.answerOptions,
							onSubmit: T,
							onSelect: w,
							onClose: j,
							inFeed: a
						});
					case v.d.SingleWithSubmit:
						return o.a.createElement(F, {
							key: O.id,
							questionId: O.id,
							questionText: O.questionText,
							answers: O.answerOptions,
							onSubmit: T,
							onSelect: w,
							onClose: j,
							inFeed: a
						});
					case v.d.SingleNoSubmit:
						return o.a.createElement(F, {
							key: O.id,
							questionId: O.id,
							questionText: O.questionText,
							answers: O.answerOptions,
							onSubmit: T,
							onSelect: w,
							onClose: j,
							inFeed: a,
							noSubmit: !0
						})
				}
				return d.c.captureException(`Unknown SubredditQuestionType: ${O.type}`), null
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
				return l
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "v", (function() {
				return h
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "u", (function() {
				return S
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "m", (function() {
				return y
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "t", (function() {
				return j
			})), n.d(t, "p", (function() {
				return T
			})), n.d(t, "o", (function() {
				return w
			})), n.d(t, "q", (function() {
				return k
			})), n.d(t, "s", (function() {
				return B
			})), n.d(t, "r", (function() {
				return N
			})), n.d(t, "a", (function() {
				return D
			})), n.d(t, "w", (function() {
				return U
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/controls/OutboundLink/index.tsx"),
				i = n("./src/reddit/components/RichTextJson/elements.m.less"),
				d = n.n(i),
				c = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/Governance/VaultActionLink/async.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const l = [c.a.div("H1", d.a), c.a.div("H2", d.a), c.a.div("H3", d.a), c.a.div("H4", d.a), c.a.div("H5", d.a), c.a.div("H6", d.a)],
				m = c.a.hr("Hr", d.a),
				b = c.a.code("M", d.a),
				p = c.a.pre("Pre", d.a),
				f = c.a.blockquote("Blockquote", d.a),
				_ = c.a.p("P", d.a),
				x = c.a.li("Li", d.a),
				h = c.a.ul("Ul", d.a),
				g = c.a.ol("Ol", d.a),
				v = c.a.strong("B", d.a),
				E = c.a.em("I", d.a),
				S = c.a.span("U", d.a),
				I = e => s.a.createElement("del", e),
				C = c.a.sub("Sub", d.a),
				y = c.a.sup("Sup", d.a),
				O = c.a.table("Table", d.a),
				j = c.a.tr("Tr", d.a),
				T = c.a.td("Tdl", d.a),
				w = c.a.td("Tdc", d.a),
				k = c.a.td("Tdr", d.a),
				B = c.a.th("Thl", d.a),
				N = c.a.th("Thc", d.a),
				D = (c.a.th("Thr", d.a), c.a.wrapped(e => s.a.createElement(o.b, u({}, e, {
					isSponsored: !1,
					source: null
				})), "A", d.a)),
				U = c.a.wrapped(a.a, "A", d.a)
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
				return _
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "h", (function() {
				return I
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/ToggleInput/index.m.less"),
				a = n.n(c);
			var u = e => s.a.createElement("div", {
					className: e.className
				}, s.a.createElement("input", {
					className: a.a.input,
					name: e.name,
					value: e.selected ? e.onValue : e.offValue,
					onClick: t => e.onChange(e.selected ? e.offValue : e.onValue),
					readOnly: !0
				})),
				l = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				m = n("./src/reddit/icons/svgs/Close/index.tsx"),
				b = n("./src/reddit/components/StructuredStyles/StyledComponents/index.m.less"),
				p = n.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = i.a.wrapped(m.a, "CloseIcon", p.a),
				x = i.a.wrapped(l.a, "ThemedChevron", p.a),
				h = i.a.wrapped(d.i, "Button", p.a),
				g = i.a.wrapped(d.o, "TertiaryButton", p.a),
				v = i.a.div("SubFormTitle", p.a),
				E = i.a.wrapped(d.l, "SecondaryButton", p.a),
				S = i.a.wrapped(g, "DeleteButton", p.a),
				I = (i.a.section("ModalBody", p.a), i.a.header("ModalHeader", p.a), i.a.h2("ModalTitle", p.a), i.a.div("ModalMain", p.a), i.a.p("ModalText", p.a), i.a.footer("ModalFooter", p.a), e => s.a.createElement(u, f({}, e, {
					className: Object(o.a)(p.a.ToggleInput, {
						[p.a.selected]: !!e.selected
					})
				})));
			i.a.div("DisabledOverlay", p.a)
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
				return l
			})), n.d(t, "a", (function() {
				return m
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/SubredditIcon/index.tsx"),
				d = n("./src/reddit/controls/OutboundLink/index.tsx"),
				c = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				a = n.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const l = o.a.wrapped(i.b, "SubredditIcon", a.a),
				m = o.a.wrapped(e => s.a.createElement(d.b, u({}, e, {
					isSponsored: !1,
					source: null
				})), "S", a.a)
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
				return S
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				u = n("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				l = n("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = n.n(l);
			var b = Object(c.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(a.a)(() => n.e("SubredditMentionWithIcon").then(n.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent: ({
						subredditName: e
					}) => s.a.createElement("span", {
						className: m.a.subredditMentionContainer
					}, s.a.createElement(u.a, {
						href: `/r/${e}/`
					}, s.a.createElement("span", {
						className: m.a.subredditIconContainer
					}, s.a.createElement(u.b, null)), `r/${e}`))
				}),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/constants/experiments.ts"),
				_ = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				x = n("./src/reddit/selectors/subredditMention.ts");
			class h extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: n
						} = this.props;
						t(Object(_.a)({
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
			const g = Object(p.c)(h),
				v = Object(i.c)({
					isFeatureFlagEnabled: x.b,
					isUserInTreatment: x.e,
					userVariant: x.a
				}),
				E = Object(o.b)(v),
				S = ({
					isFeatureFlagEnabled: e,
					isUserInTreatment: t,
					subredditName: n,
					userVariant: r,
					rtJsonElementProps: o
				}) => {
					if (!t || !e) return s.a.createElement(g, {
						subredditName: n,
						rtJsonElementProps: o
					});
					switch (r) {
						case f.qd.SmIcon:
							return s.a.createElement(b, {
								subredditName: n,
								rtJsonElementProps: o
							});
						case f.qd.SmIconHc:
							return s.a.createElement(b, {
								subredditName: n,
								isHoverable: !0,
								rtJsonElementProps: o
							});
						default:
							return s.a.createElement(g, {
								subredditName: n,
								rtJsonElementProps: o
							})
					}
				};
			t.b = E(S)
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const i = {
					apiContext: () => {
						throw new Error("Component attempted to make an API request with no ApiContext")
					},
					gqlContext: () => {
						throw new Error("Component attempted to make an API request with no GqlContext")
					}
				},
				d = Object(r.createContext)(i);

			function c(e) {
				const t = t => s.a.createElement(d.Consumer, null, ({
					apiContext: n,
					gqlContext: r
				}) => s.a.createElement(e, o({
					apiContext: n,
					gqlContext: r
				}, t)));
				return t.displayName = `WithApiContext(${e.displayName||e.name})`, t
			}
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
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "e", (function() {
				return C
			}));
			var r, s, o = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/helpers/isComment.ts"),
				c = n("./src/reddit/helpers/isPost.ts"),
				a = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				l = n("./src/reddit/selectors/telemetry.ts"),
				m = n("./src/telemetry/models/Outbound.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(r || (r = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(s || (s = {}));
			const b = e => ({
					...l.defaults(e),
					source: s.LINK,
					action: o.c.CLICK,
					noun: r.INTERNAL_LINK
				}),
				p = e => ({
					...l.defaults(e),
					source: s,
					screen: l.screen(e),
					discoveryUnit: {
						id: "xd_100",
						name: r.SUBREDDIT_HOVERCARD,
						type: a.f.Listing,
						title: r.SUBREDDIT_HOVERCARD
					}
				}),
				f = (e, {
					renderingObjectInfo: t,
					pageLayer: n
				}) => {
					if (t && (Object(d.b)(t) || Object(c.b)(t))) return Object(d.b)(t) ? m.SourceElement.Comment : Object(i.w)(n) ? m.SourceElement.PostDetail : Object(i.E)(n) ? m.SourceElement.ListingPostDetail : void 0
				},
				_ = (e, t) => {
					const {
						renderingObjectInfo: n,
						subredditName: r
					} = t;
					if (!n || !Object(c.b)(n) && !Object(d.b)(n)) return {
						outbound: void 0
					};
					const s = Object(c.b)(n) ? "postId" : "commentId",
						o = {
							url: `/r/${r}/`,
							sourceElement: f(0, t),
							subredditName: r,
							[s]: n.id
						},
						i = Object(u.A)(e, {
							subredditName: r
						});
					return i ? {
						outbound: {
							...o,
							url: i.url,
							subredditId: i.id
						}
					} : {
						outbound: {
							...o
						}
					}
				},
				x = (e, t) => {
					const {
						renderingObjectInfo: n
					} = t;
					if (!n || !Object(c.b)(n) && !Object(d.b)(n)) return {};
					const r = Object(c.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: l.post(e, n.id),
						subreddit: l.subredditById(e, r),
						..._(e, t)
					}
				},
				h = e => t => ({
					...b(t),
					...x(t, e)
				}),
				g = e => t => ({
					...p(t),
					source: "global",
					action: o.c.VIEW,
					noun: r.SUBREDDIT_HOVERCARD,
					subreddit: l.subredditByName(t, e),
					screen: l.screen(t)
				}),
				v = (e, t) => n => ({
					...p(n),
					source: s.DISCOVERY_UNIT,
					action: o.c.VIEW,
					noun: r.ITEM_POST,
					post: l.post(n, t),
					subreddit: l.subredditByName(n, e),
					screen: l.screen(n)
				}),
				E = (e, t) => n => ({
					...p(n),
					source: s.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: r.ITEM_POST,
					post: l.post(n, t),
					subreddit: l.subredditByName(n, e),
					screen: l.screen(n)
				}),
				S = e => t => ({
					...p(t),
					subreddit: l.subredditById(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: r.HEADER_SUBREDDIT
				}),
				I = e => t => ({
					...p(t),
					subreddit: l.subredditById(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: r.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				C = e => t => ({
					...p(t),
					subreddit: l.subredditById(t, e) || null,
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
				return a
			})), n.d(t, "c", (function() {
				return u
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
						experimentName: r.id
					}) || ""
				},
				a = e => {
					const t = c(e);
					return t === r.qd.SmIcon || t === r.qd.SmIconHc
				},
				u = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.pending[t]
				},
				l = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.error[t]
				},
				m = (e, {
					subredditName: t
				}) => {
					const n = Object(i.Y)(e, {
						subredditName: t
					});
					return (n && n.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommunityTopicSurvey.aa4a014a83728c4c155b.js.map