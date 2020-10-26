// https://www.redditstatic.com/desktop2x/Frontpage~ModListing.4794e172c596f0ad875a.js
// Retrieved at 10/26/2020, 6:40:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Frontpage~ModListing"], {
		"./src/graphql/operations/RecordCommunityAnswer.json": function(e) {
			e.exports = JSON.parse('{"id":"fea84f5739a4"}')
		},
		"./src/reddit/components/CommunityTopicSurvey/index.m.less": function(e, t, n) {
			e.exports = {
				survey: "_38x4rPvvkwQ6NMJG2ex7X",
				title: "_2A9MyuPuWpjhwR74--2-4O",
				closeButton: "V_TnSwg2o9gHakrKQhX3C",
				closeText: "_3HI49Q7TJQME5s2hgKebpJ",
				question: "IVHmIcBw9nMeqPbAkzV1D",
				buttonGroup: "_3MlgEhOs_SeeHPBxl7OdG_",
				submitButton: "_7RdJywSTypfwEbpxEdDba"
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return A
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/sentry/index.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/constants/localStorage.ts"),
				u = n("./src/graphql/operations/RecordCommunityAnswer.json"),
				l = n("./src/lib/makeGqlRequest/index.ts"),
				m = (e, t) => Object(l.a)(e, Object.assign(Object.assign({}, u), {
					variables: t
				}));

			function p(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
				const n = e.answerOptions.map(e => e.id).filter(e => !t.includes(e)),
					s = t => e.answerOptions.find(e => e.id === t).text;
				return {
					taggingQuestion: e.questionText,
					taggingQuestionId: e.id,
					selectedAnswerIds: t,
					selectedAnswers: t.map(s),
					nonSelectedAnswerIds: n,
					nonSelectedAnswers: n.map(s)
				}
			}
			const b = e => () => ({
					source: "community_tagging",
					action: "view",
					noun: "verify_topics_module",
					raterTag: p(e)
				}),
				g = (e, t) => () => ({
					source: "community_tagging",
					action: "click",
					noun: "select_answer",
					raterTag: p(e, t)
				}),
				y = (e, t) => () => ({
					source: "community_tagging",
					action: "click",
					noun: "submit",
					raterTag: p(e, t)
				}),
				_ = e => () => ({
					source: "community_tagging",
					action: "click",
					noun: "close",
					raterTag: p(e)
				});
			var f = n("./src/reddit/hooks/useGqlContext.ts");
			var v = n("./src/reddit/helpers/localStorage/index.ts");
			var x = n("./src/reddit/hooks/useTracking.ts"),
				h = n("./src/reddit/models/Subreddit/index.ts"),
				O = n("./src/reddit/models/Toast/index.ts"),
				S = n("./src/reddit/components/StructuredStyles/StyledComponents/index.tsx"),
				C = n("./src/reddit/controls/Button/index.tsx"),
				j = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/react-uid/dist/es2015/hooks.js")),
				k = n("./src/reddit/controls/ButtonGroup/index.m.less"),
				w = n.n(k);

			function E(e) {
				const {
					options: t,
					onChange: n = (() => {})
				} = e, s = Object(j.a)(), [i, a] = Object(r.useState)({});
				return o.a.createElement("div", {
					className: w.a.buttonGroup,
					role: "group"
				}, t.map(e => {
					let {
						text: r,
						id: c
					} = e;
					return o.a.createElement(o.a.Fragment, {
						key: c
					}, o.a.createElement("input", {
						type: "checkbox",
						id: s(c),
						name: s(c),
						className: w.a.checkbox,
						checked: !!i[c],
						onChange: () => (function(e) {
							const s = t.find(t => t.id === e),
								r = t.filter(e => e.isMutuallyExclusive),
								o = i[e];
							let c;
							if (s.isMutuallyExclusive) c = {
								[e]: !o
							};
							else {
								(c = Object.assign({}, i))[e] = !o;
								for (const e of r) c[e.id] = !1
							}
							a(c);
							const d = Object.keys(c).filter(e => c[e]);
							n(d)
						})(c)
					}), o.a.createElement("label", {
						htmlFor: s(c),
						className: w.a.option
					}, r))
				}))
			}
			var T = n("./src/reddit/controls/TextButton/index.tsx"),
				I = n("./src/reddit/components/CommunityTopicSurvey/index.m.less"),
				N = n.n(I);
			const {
				fbt: P
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function M(e) {
				const {
					questionId: t,
					questionText: n,
					answers: s,
					onClose: i
				} = e, [a, c] = Object(r.useState)([]);
				return o.a.createElement("div", {
					className: N.a.survey
				}, o.a.createElement(T.a, {
					className: N.a.closeButton,
					onClick: () => i(t)
				}, o.a.createElement(S.b, null), o.a.createElement("span", {
					className: N.a.closeText
				}, P._("Close", null, {
					hk: "4gbyAA"
				}))), o.a.createElement("h3", {
					className: N.a.title
				}, P._("Reddit Community Survey", null, {
					hk: "lNp7A"
				})), o.a.createElement("p", {
					className: N.a.question
				}, n), o.a.createElement(E, {
					options: s,
					onChange: function(n) {
						var s;
						c(n), null === (s = e.onSelect) || void 0 === s || s.call(e, t, n)
					}
				}), o.a.createElement(C.i, {
					className: N.a.submitButton,
					redditStyle: !0,
					role: "submit",
					onClick: async function() {
						await e.onSubmit(t, a)
					},
					disabled: 0 === a.length
				}, P._("Submit", null, {
					hk: "7ztww"
				})))
			}
			const {
				fbt: B
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function q(e) {
				const {
					questionId: t,
					questionText: n,
					answers: s,
					onClose: i,
					noSubmit: a = !1
				} = e, [c, d] = Object(r.useState)([]);
				return o.a.createElement("div", {
					className: N.a.survey
				}, o.a.createElement(T.a, {
					className: N.a.closeButton,
					onClick: () => i(t)
				}, o.a.createElement(S.b, null), o.a.createElement("span", {
					className: N.a.closeText
				}, B._("Close", null, {
					hk: "4gbyAA"
				}))), o.a.createElement("h3", {
					className: N.a.title
				}, B._("Reddit Community Survey", null, {
					hk: "lNp7A"
				})), o.a.createElement("p", {
					className: N.a.question
				}, n), o.a.createElement("div", {
					className: N.a.buttonGroup
				}, o.a.createElement(E, {
					onChange: function(n) {
						var s;
						d(n), null === (s = e.onSelect) || void 0 === s || s.call(e, t, n), a && e.onSubmit(t, n)
					},
					options: s.map(e => Object.assign(Object.assign({}, e), {
						isMutuallyExclusive: !0
					}))
				})), !a && o.a.createElement(C.i, {
					className: N.a.submitButton,
					redditStyle: !0,
					role: "submit",
					onClick: async function() {
						await e.onSubmit(t, c)
					},
					disabled: 0 === c.length
				}, B._("Submit", null, {
					hk: "7ztww"
				})))
			}

			function A(e) {
				var t;
				const {
					subredditId: n
				} = e, u = Object(x.a)(), l = Object(f.a)(), p = null !== (t = Object(i.d)(e => e.subreddits.questions[n])) && void 0 !== t ? t : [], S = Object(i.c)(), [C, j] = function(e, t) {
					let n;
					n = Object(v.o)(e);
					const [s, o] = Object(r.useState)(null != n ? n : t);
					return [s, function(t) {
						Object(v.bb)(e, t), o(t)
					}]
				}(d.f, []), [k, w] = Object(r.useState)(!1), E = function() {
					const [e, t] = Object(r.useState)(!1);
					return Object(r.useEffect)(() => {
						setTimeout(t, 1, !0)
					}, []), e
				}(), T = p.filter(e => {
					let {
						id: t
					} = e;
					return !C.includes(t)
				})[0];
				if (Object(r.useEffect)(() => {
						T && !k && u(b(T))
					}, [u, T, k]), k) return null;
				if (!E) return null;
				if (!T) return null;

				function I(e) {
					w(!0), j([...C, e])
				}
				async function N(e) {
					m(l(), {
						input: {
							questionId: e,
							answerIds: [],
							skip: !0
						}
					}).catch(), u(_(T)), I(e)
				}
				async function P(e, t) {
					await m(l(), {
						input: {
							questionId: e,
							answerIds: t,
							skip: !1
						}
					}), u(y(T, t)), I(e), S(Object(c.e)({
						text: s.fbt._("Thank you for your help!", null, {
							hk: "1asBUQ"
						}),
						kind: O.b.SuccessCommunityGreen
					}))
				}

				function B(e, t) {
					u(g(T, t))
				}
				switch (T.type) {
					case h.c.Multi:
						return o.a.createElement(M, {
							questionId: T.id,
							questionText: T.questionText,
							answers: T.answerOptions,
							onSubmit: P,
							onSelect: B,
							onClose: N
						});
					case h.c.SingleWithSubmit:
						return o.a.createElement(q, {
							questionId: T.id,
							questionText: T.questionText,
							answers: T.answerOptions,
							onSubmit: P,
							onSelect: B,
							onClose: N
						});
					case h.c.SingleNoSubmit:
						return o.a.createElement(q, {
							questionId: T.id,
							questionText: T.questionText,
							answers: T.answerOptions,
							onSubmit: P,
							onSelect: B,
							onClose: N,
							noSubmit: !0
						})
				}
				return a.c.captureException("Unknown SubredditQuestionType: ".concat(T.type)), null
			}
		},
		"./src/reddit/components/ContentSurvey/ContentRatingSurveyBanner.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/config.ts"),
				i = n("./src/reddit/components/ContentSurvey/index.m.less"),
				a = n.n(i),
				c = n("./src/reddit/helpers/trackers/contentTag.ts"),
				d = n("./src/reddit/hooks/useTracking.ts"),
				u = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				l = n("./src/reddit/components/ContentSurvey/SurveyModal.tsx");
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function p(e) {
				let {
					survey: t,
					subredditId: n
				} = e;
				const [i, p] = Object(s.useState)(!1), b = Object(d.a)();
				return Object(s.useEffect)(() => b(Object(c.h)()), [b]), r.a.createElement("div", {
					className: a.a.feedBanner,
					onClick: function() {
						p(!0), b(Object(c.g)())
					}
				}, r.a.createElement("div", {
					className: a.a.notepadSnoo
				}, r.a.createElement("img", {
					src: "".concat(o.a.assetPath, "/img/snoovatar-notepad.png")
				})), r.a.createElement("div", {
					className: a.a.bannerCopy
				}, r.a.createElement("p", {
					className: a.a.copy
				}, m._("Set up this community’s content tag", null, {
					hk: "3ssqQf"
				})), r.a.createElement("p", {
					className: a.a.meta
				}, m._("Take a quick survey to help people know what to expect when they visit this community", null, {
					hk: "3sUbRf"
				}))), r.a.createElement(u.a, {
					className: a.a.chevron
				}), i && r.a.createElement(l.a, {
					withOverlay: !0,
					subredditId: n,
					survey: t,
					onClose: () => p(!1)
				}))
			}
		},
		"./src/reddit/components/ContentSurvey/SurveyModal.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/higherOrderComponents/asModal/index.tsx");
			const o = Object(s.a)({
					resolved: {},
					chunkName: () => "",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e(0), n.e(1), n.e(2)]).then(n.bind(null, "./src/reddit/components/ContentSurvey/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ContentSurvey/index.tsx"
					}
				}),
				i = Object(r.a)(o);
			t.a = i
		},
		"./src/reddit/components/ContentSurvey/index.m.less": function(e, t, n) {
			e.exports = {
				feedBanner: "_3oY2sjcQ7EgBYd7agqleJv",
				notepadSnoo: "B0cLCCVs794x74kjJidDO",
				bannerCopy: "_2NfcId0Mtt4-NP4AbrAck5",
				copy: "BcSr5zM39F4cQJ9MQqkRn",
				meta: "r9AkMaLWOPKfC5Swx9XQf",
				chevron: "yFbNzMMxa-u2DgUP3Gz5h",
				header: "wKkshJ3Og8gaDgJmSULiK",
				introCopy: "m3rT-KnA6An7scRNg10UW",
				checkbox: "Y5aDAUsXXQaMbdCe1-qdG",
				result: "_29ewfEVekvKEl_P2hqf4tI",
				heading: "_3yKTUBG4MrGHv9n644t4Ua",
				card: "_18VT-IpGoX6SDdyHHLI_eo",
				pending: "hg80uiMz2ssH44RLsmlhG",
				infoIcon: "_3HgNBpJCFAy2mohcd9VxmZ",
				banner: "_23eBsXSECZlQ3Eh-zXhEbC",
				communityIcon: "_2Z8cRxGvjX2hQUlQK_VEOE",
				communityName: "_1sHP__xe_7iTbSpLKp7FeC",
				ratingImg: "UZWqo3i6ydUcE18iJqx3P",
				ratingAudience: "_1Y5aAemcMRF3uwSgYpqbsT",
				ratingDescription: "_1e5wHYsIyWJlZSjZCHhBKg",
				reasonsHeader: "_1npcgCYHbRcUsU6KOI7ony",
				reason: "_3rlzPcuZsxLsVx6ib3oBjk"
			}
		},
		"./src/reddit/components/EmptySubreddit.m.less": function(e, t, n) {
			e.exports = {
				PrimaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				primaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				SecondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				secondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				MainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				mainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				MainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				mainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				BackgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				backgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				SubmitLink: "_2lrHxBsyZpA36hEKC_alta",
				submitLink: "_2lrHxBsyZpA36hEKC_alta",
				SnooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				snooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				Component: "_2_C857z2MF49YnHj6VQteT",
				component: "_2_C857z2MF49YnHj6VQteT",
				EmptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				emptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg"
			}
		},
		"./src/reddit/components/EmptySubreddit.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/upperFirst.js"),
				o = n.n(r),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./src/config.ts"),
				d = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/isFakeSubreddit/index.ts"),
				l = n("./src/reddit/constants/postLayout.ts"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/components/PostList/Placeholder.tsx"),
				b = n("./src/reddit/components/EmptySubreddit.m.less"),
				g = n.n(b),
				y = n("./src/lib/classNames/index.ts"),
				_ = n("./src/lib/lessComponent.tsx"),
				f = n("./src/reddit/pages/Subreddit/SurveyUnit.tsx");
			const v = _.a.wrapped(p.a, "BackgroundPlaceholder", g.a),
				x = _.a.wrapped(m.k, "SubmitLink", g.a),
				h = e => {
					switch (e) {
						case d.O.RISING:
							return s.fbt._("Create a new post and take all the glory", null, {
								hk: "1NhXUe"
							});
						case d.O.TOP:
						case d.O.CONTROVERSIAL:
							return null;
						default:
							return s.fbt._("Be the first to till this fertile land.", null, {
								hk: "VYQD0"
							})
					}
				},
				O = e => {
					let {
						listingName: t,
						sort: n
					} = e;
					const r = h(n);
					return a.a.createElement("div", {
						className: g.a.MainContent
					}, a.a.createElement("div", {
						className: g.a.PrimaryText
					}, (e => {
						switch (e) {
							case d.O.RISING:
								return s.fbt._("Looks like nothing is rising fast enough in this subreddit", null, {
									hk: "kJ3Te"
								});
							case d.O.TOP:
							case d.O.CONTROVERSIAL:
								return s.fbt._("No posts were found using the {listing sort option} sort. Try changing the sort.", [s.fbt._param("listing sort option", o()(e))], {
									hk: "48BeCW"
								});
							default:
								return s.fbt._("There are no posts in this subreddit", null, {
									hk: "5mVkT"
								})
						}
					})(n)), t && !Object(u.a)(t) && !!r && a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: g.a.SecondaryText
					}, h(n)), a.a.createElement(x, {
						to: "/r/".concat(t, "/submit")
					}, s.fbt._("Add a post", null, {
						hk: "1vnCSW"
					}))))
				},
				S = () => a.a.createElement("div", {
					className: g.a.MainContent
				}, a.a.createElement("img", {
					className: g.a.SnooImg,
					src: "".concat(c.a.assetPath, "/img/snoo_discovery@1x.png")
				}), a.a.createElement("div", {
					className: g.a.PrimaryText
				}, s.fbt._("Reddit gets better when you join communities, so find some that you’ll love!", null, {
					hk: "7B6oq"
				})), a.a.createElement(x, {
					to: "/r/popular"
				}, s.fbt._("Browse Popular Posts", null, {
					hk: "2zfgXv"
				})));
			t.a = e => a.a.createElement(a.a.Fragment, null, e.subreddit && a.a.createElement(f.a, {
				subredditId: e.subreddit.id
			}), a.a.createElement("div", {
				className: Object(y.a)(g.a.Component, g.a.EmptyHomepage)
			}, a.a.createElement(v, {
				isLoading: !1,
				layout: l.g.Classic
			}), a.a.createElement("div", {
				className: g.a.MainContentWrapper
			}, e.subreddit ? a.a.createElement(O, e) : a.a.createElement(S, null))))
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/PostList/index.tsx"),
				r = n("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(r.a)(s.a)
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
				return b
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "h", (function() {
				return h
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/ToggleInput/index.tsx"),
				d = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				u = n("./src/reddit/icons/svgs/Close/index.tsx"),
				l = n("./src/reddit/components/StructuredStyles/StyledComponents/index.m.less"),
				m = n.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = i.a.wrapped(u.a, "CloseIcon", m.a),
				g = i.a.wrapped(d.a, "ThemedChevron", m.a),
				y = i.a.wrapped(a.i, "Button", m.a),
				_ = i.a.wrapped(a.o, "TertiaryButton", m.a),
				f = i.a.div("SubFormTitle", m.a),
				v = i.a.wrapped(a.l, "SecondaryButton", m.a),
				x = i.a.wrapped(_, "DeleteButton", m.a),
				h = (i.a.section("ModalBody", m.a), i.a.header("ModalHeader", m.a), i.a.h2("ModalTitle", m.a), i.a.div("ModalMain", m.a), i.a.p("ModalText", m.a), i.a.footer("ModalFooter", m.a), e => r.a.createElement(c.a, p({}, e, {
					className: Object(o.a)(m.a.ToggleInput, {
						[m.a.selected]: !!e.selected
					})
				})));
			i.a.div("DisabledOverlay", m.a)
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return S
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "b", (function() {
				return w
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/objectSelector/index.ts"),
				i = n("./src/reddit/actions/ads/index.ts"),
				a = n("./src/reddit/actions/focusedVerticals/index.ts"),
				c = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/actions/postList.ts"),
				u = n("./src/reddit/actions/survey/index.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				b = n("./src/reddit/helpers/trackers/post.ts"),
				g = n("./src/reddit/components/PostList/Placeholder.tsx"),
				y = n("./src/reddit/featureFlags/index.ts"),
				_ = n("./src/reddit/selectors/experiments/econ/predictions.ts"),
				f = n("./src/reddit/selectors/experiments/survey.ts"),
				v = n("./src/reddit/selectors/listings.ts"),
				x = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/selectors/tracking.ts");

			function S() {
				return Object(m.t)({
					currentProfileName: m.h,
					isCommentPermalink: m.v,
					isCommentsPage: m.w,
					isFrontpage: m.y,
					isProfilePostListing: m.I,
					isTopicPage: m.M,
					pageLayer: e => e
				})
			}
			const C = S(),
				j = {
					apiError: v.c,
					apiPending: v.d,
					measureScrollFPS: y.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(m.N)(e, t),
					loadMore: v.g,
					postsById: (e, t) => Object(x.Z)(e, Object.assign(Object.assign({}, t), {
						predictionsEnabled: Object(_.a)(e)
					})),
					postIds: Object(o.a)((e, t) => {
						let {
							listingKey: n,
							listingName: s,
							inSubredditOrProfile: r
						} = t;
						return Object(x.L)(e, n, s, r, Object(_.a)(e))
					}),
					subredditsById: h.ab,
					viewportDataLoaded: O.a,
					pageReferrer: m.Q,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: f.b
				},
				k = Object(r.c)(j),
				w = (e, t) => {
					let {
						isFrontpage: n
					} = t;
					return {
						onBottomViewed: (t, n) => e(d.c(t, n)),
						adBrandSafetyStatusReceived: t => {
							e(i.d({
								isViewSafe: t
							}))
						},
						openPost: t => {
							n && e(Object(a.a)({
								lastLoadedEnv: "server"
							})), e(c.C(t))
						},
						fireAdPixelsOfType: (t, n) => {
							e(c.t(t, n))
						},
						trackOnPostEnteredViewport: (t, n, s) => {
							e(c.F(t, s))
						},
						trackOnPostExitedViewport: (t, n, s, r) => {
							e(c.G(t, s, r))
						},
						surveyTriggerScrollCounted: () => e(Object(u.b)())
					}
				},
				E = Object(s.b)(k, w, (e, t, n) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), n), {
					postClickEvent: (e, t, s) => Object(b.f)(e, t, s, n.listingKey, n.hostPostId, n.listingBelowVariant),
					postComponentForLayout: e => Object(p.b)(Object.assign({}, e))
				}));
			t.a = e => Object(l.c)(C(E(e)))
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
		"./src/reddit/controls/ToggleInput/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/controls/ToggleInput/index.m.less"),
				i = n.n(o);
			t.a = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement("input", {
				className: i.a.input,
				name: e.name,
				value: e.selected ? e.onValue : e.offValue,
				onClick: t => e.onChange(e.selected ? e.offValue : e.onValue),
				readOnly: !0
			}))
		},
		"./src/reddit/helpers/trackers/contentTag.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return s
			})), n.d(t, "g", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "l", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "j", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "n", (function() {
				return m
			})), n.d(t, "m", (function() {
				return p
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "d", (function() {
				return _
			}));
			const s = () => () => ({
					source: "content_tag",
					action: "view",
					noun: "verify_topics_module"
				}),
				r = () => () => ({
					source: "content_tag",
					action: "click",
					noun: "verify_topics_module"
				}),
				o = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_intro",
					actionInfo: {
						pageType: "survey_intro"
					}
				}),
				i = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "start",
					actionInfo: {
						pageType: "survey_intro"
					}
				}),
				a = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "mature_themes_prompt",
					actionInfo: {
						pageType: "survey_mature_themes"
					}
				}),
				c = e => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: e,
					actionInfo: {
						pageType: e
					}
				}),
				d = e => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "survey_answer",
					actionInfo: {
						pageType: e
					}
				}),
				u = (e, t) => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "next",
					actionInfo: {
						reason: t.join(),
						pageType: e
					}
				}),
				l = e => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "back",
					actionInfo: {
						pageType: e
					}
				}),
				m = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_rating_summary",
					actionInfo: {
						pageType: "survey_rating_summary"
					}
				}),
				p = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "submit_survey",
					actionInfo: {
						pageType: "survey_rating_summary"
					}
				}),
				b = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_rating_review",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				g = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "take_survey",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				y = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "message_modsupport",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				_ = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "learn_more",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				})
		},
		"./src/reddit/hooks/useExperimentVariant.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");

			function o(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.a;
				return Object(s.d)(n => Object(r.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: t
				}))
			}
		},
		"./src/reddit/hooks/useGqlContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n("./src/reddit/contexts/ApiContext.tsx");

			function o() {
				const {
					gqlContext: e
				} = Object(s.useContext)(r.a);
				return e
			}
		},
		"./src/reddit/icons/fonts/Gift/index.m.less": function(e, t, n) {
			e.exports = {
				GiftIcon: "_12P1l1cITUMF05krI6QUSj",
				giftIcon: "_12P1l1cITUMF05krI6QUSj"
			}
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Gift/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(o.b)("gift"), " ").concat(e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(o.a, null, e.desc)), "GiftIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/pages/Subreddit/SurveyUnit.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/CommunityTopicSurvey/index.tsx"),
				c = n("./src/reddit/components/ContentSurvey/ContentRatingSurveyBanner.tsx"),
				d = n("./src/reddit/constants/experiments.ts"),
				u = n("./src/reddit/hooks/useExperimentVariant.ts");
			const l = Object(s.a)({
				resolved: {},
				chunkName: () => "NewCommunityProgress",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e(0), n.e(1), n.e("NewCommunityProgress")]).then(n.bind(null, "./src/reddit/components/NewCommunityProgress/NewCommunityProgress.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/NewCommunityProgress/NewCommunityProgress.tsx"
				}
			});

			function m(e) {
				let {
					subredditId: t
				} = e;
				var n;
				const s = Object(i.d)(e => e.subreddits.survey[t]),
					r = !!Object(u.a)(d.N),
					m = Object(i.d)(e => e.subreddits.progressModule[t]);
				return (null === (n = null == m ? void 0 : m.cards) || void 0 === n ? void 0 : n.length) > 0 ? o.a.createElement(l, {
					subredditId: t,
					progressModule: m
				}) : r && (null == s ? void 0 : s.isEligible) && !(null == s ? void 0 : s.response) ? o.a.createElement(c.a, {
					subredditId: t,
					survey: s
				}) : o.a.createElement(a.a, {
					subredditId: t
				})
			}
		},
		"./src/reddit/selectors/experiments/econLeaderboards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = e => {
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: o.I,
						experimentName: s.lb
					});
					return !(!t || Object(s.Yc)(t))
				},
				a = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: o.I,
						experimentName: s.lb
					}) === s.sb.ListingEnabled
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Frontpage~ModListing.4794e172c596f0ad875a.js.map