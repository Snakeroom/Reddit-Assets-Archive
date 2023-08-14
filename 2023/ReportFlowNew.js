// https://www.redditstatic.com/desktop2x/ReportFlowNew.604fdcdf98f76f9942cf.js
// Retrieved at 8/14/2023, 5:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ReportFlowNew"], {
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			})), o.d(t, "c", (function() {
				return n
			})), o.d(t, "b", (function() {
				return i
			}));
			var s = o("./src/lib/loadableAction/index.ts");
			const r = Object(s.a)(() => o.e("ReportFlow").then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				n = Object(s.a)(() => o.e("ReportFlow").then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(s.a)(() => o.e("ReportFlow").then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/components/CrisisFlow/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			}));
			var s = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = o("./src/reddit/constants/colors.ts");
			const n = {
				backgroundColor: r.a.overlayReportFlow
			};
			t.b = Object(s.a)({
				resolved: {},
				chunkName: () => "CrisisFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!o.m[t]
				},
				importAsync: () => o.e("CrisisFlow").then(o.bind(null, "./src/reddit/components/CrisisFlow/_CrisisFlow.tsx")).then(e => e.default),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return o(t)
				},
				resolve() {
					return "./src/reddit/components/CrisisFlow/_CrisisFlow.tsx"
				}
			})
		},
		"./src/reddit/components/FormBuilder/async.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-FormBuilder",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!o.m[t]
				},
				importAsync: () => Promise.all([o.e("vendors~reddit-components-FormBuilder"), o.e("reddit-components-FormBuilder")]).then(o.bind(null, "./src/reddit/components/FormBuilder/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return o(t)
				},
				resolve() {
					return "./src/reddit/components/FormBuilder/index.tsx"
				}
			})
		},
		"./src/reddit/components/ReportFlow/_ReportFlowNew.tsx": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "ValidThingReportTypes", (function() {
				return U
			}));
			var s = o("./src/config.ts"),
				r = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/lodash/get.js"),
				i = o.n(n),
				d = o("./node_modules/react/index.js"),
				c = o.n(d),
				a = o("./node_modules/react-redux/es/index.js"),
				l = o("./node_modules/reselect/es/index.js"),
				p = o("./src/reddit/actions/reportFlow/index.ts"),
				u = o("./src/reddit/actions/toaster.ts"),
				m = o("./src/reddit/components/CrisisFlow/index.tsx"),
				h = o("./src/reddit/components/TrackingHelper/index.tsx"),
				b = o("./src/reddit/selectors/telemetry.ts"),
				f = o("./src/telemetry/models/Event.ts");
			const w = e => t => ({
					source: f.e.UserReport,
					action: f.c.Click,
					noun: f.d.BlockUser,
					targetUser: {
						id: e
					},
					...b.q(t)
				}),
				x = e => t => ({
					source: "report_modal",
					action: f.c.Click,
					noun: "comment",
					comment: b.j({
						state: t,
						commentId: e
					}),
					media: {
						mimetype: b.l(t, e)
					},
					...b.q(t)
				});
			var v = o("./src/reddit/components/FormBuilder/async.tsx"),
				g = o("./src/reddit/actions/userBlocks.ts"),
				R = o("./src/lib/makeGqlRequest/index.ts"),
				j = o("./src/redditGQL/operations/ReportComment.json");
			const _ = (e, t) => Object(R.a)(e, {
				...j,
				variables: t
			});
			var O = o("./src/reddit/endpoints/messages/index.ts"),
				k = o("./src/reddit/endpoints/post/report.ts"),
				y = o("./src/redditGQL/operations/ReportForm.json");
			var A = o("./src/reddit/endpoints/talk/index.ts"),
				L = o("./src/reddit/contexts/ApiContext.tsx"),
				S = o("./src/reddit/models/Toast/index.ts"),
				C = o("./src/reddit/models/WhitelistAndBlocked.ts"),
				F = o("./src/reddit/selectors/commentSelector.ts"),
				I = o("./src/reddit/selectors/experiments/reportAd.ts"),
				E = o("./src/reddit/selectors/meta.ts"),
				P = o("./src/reddit/selectors/posts.ts"),
				T = o("./src/reddit/selectors/user.ts"),
				G = o("./src/lib/lessComponent.tsx"),
				N = o("./src/reddit/components/ReportFlow/index.m.less"),
				q = o.n(N);
			const $ = G.a.div("ReportLoaderWrapper", q.a),
				Q = G.a.img("LoadingIcon", q.a),
				B = "2.1";
			var U;
			! function(e) {
				e.Post = "post", e.Comment = "comment", e.Message = "message"
			}(U || (U = {}));
			const J = Object(l.c)({
					post: (e, t) => {
						let {
							postId: o
						} = t;
						return o ? Object(P.F)(e, {
							postId: o
						}) : null
					},
					comment: (e, t) => {
						let {
							commentId: o
						} = t;
						return o ? Object(F.c)(e, {
							commentId: o
						}) : null
					},
					blockUserPending: e => e.user.blocked.api,
					blockedUser: (e, t) => e.user.blocked.data.find(o => {
						const {
							commentId: s,
							postId: r
						} = t, n = s ? Object(F.c)(e, {
							commentId: s
						}) : null, i = r ? Object(P.F)(e, {
							postId: r
						}) : null;
						(n ? n.author : i ? i.author : null) || t.author;
						o.name
					}),
					isNightmodeOn: T.fb,
					locale: E.k,
					isReportAnAdEnabled: I.a
				}),
				M = Object(a.b)(J, (e, t) => {
					let {
						timestamp: o
					} = t;
					return {
						onCloseReportFlow: () => {
							e(Object(p.b)())
						},
						onBlockUser: t => {
							e(Object(g.h)(t))
						},
						showFailToast: () => e(Object(u.f)({
							kind: S.b.Error,
							text: r.fbt._("Something went wrong!", null, {
								hk: "1BEFhz"
							})
						}))
					}
				}),
				K = async (e, t, o, s, r) => {
					var n;
					const i = await ((e, t) => {
						let {
							itemId: o,
							formVersion: s,
							hostAppName: r,
							locale: n
						} = t;
						return Object(R.a)(e, {
							...y,
							variables: {
								itemId: o,
								hostAppName: r,
								formVersion: s,
								locale: n
							}
						})
					})(e, {
						itemId: t,
						formVersion: o,
						hostAppName: s,
						locale: r
					});
					if (i && i.ok) {
						const e = null === (n = i.body.data.reportForm) || void 0 === n ? void 0 : n.form;
						return e ? JSON.parse(e) : null
					}
				};
			class Y extends c.a.Component {
				constructor(e) {
					super(e), this.getItemMetadata = () => {
						const {
							postId: e,
							commentId: t,
							messageId: o,
							isReportAnAdEnabled: s,
							post: r
						} = this.props;
						let n, i, d, c;
						if (this.props.author && (d = this.props.author), t) n = t, i = U.Comment, this.props.comment && !d && (d = this.props.comment.author, c = this.props.comment.authorId);
						else if (e) n = e, r && r.isSponsored && s && (n = `ad_${r.impressionId}_${r.postId}`), i = U.Post, this.props.post && !d && (d = this.props.post.author, c = this.props.post.authorId);
						else {
							if (!o) throw new Error("Invalid object type passed to reporting flow");
							n = o, i = U.Message
						}
						return {
							itemId: n,
							itemType: i,
							itemAuthor: d,
							itemAuthorId: c
						}
					}, this.handleEscapeKey = e => {
						if (27 === e.keyCode) return this.handleReportFlowClose()
					}, this.handleReportFlowClose = () => {
						if (this.props.onCloseReportModal) return this.props.onCloseReportModal();
						this.props.onCloseReportFlow()
					}, this.onBlockAuthor = (e, t) => {
						const {
							blockUserPending: o,
							sendEvent: s
						} = this.props;
						o.new !== C.a.pending && (this.props.onBlockUser(e), s(w(t)))
					}, this.onOpenCtlFlow = () => {
						this.props.postMessage && this.props.postMessage({
							type: "openCtl"
						}), this.setState({
							ctlFlowOpened: !0
						})
					}, this.onReportSubmit = async (e, t) => {
						var o;
						const {
							props: {
								gqlContext: s,
								showFailToast: r,
								hostAppName: n
							}
						} = this, {
							itemId: d,
							itemType: c
						} = this.getItemMetadata();
						if (!e) throw new Error("Report data not provided");
						const {
							ruleId: a,
							ruleType: l,
							customRule: p,
							freeText: u
						} = e, m = {
							fromHelpDesk: !1,
							hostAppName: n
						};
						switch (u && (m.freeText = i()(t, u.ref)), l) {
							case "site":
								m.siteRule = i()(t, a.ref).value || i()(t, a.ref);
								break;
							case "subreddit":
							default:
								const e = i()(t, a.ref);
								"other" === e && p ? m.customRule = i()(t, p.ref) : m.subredditRule = e
						}
						let h;
						switch (c) {
							case U.Post:
								if (null === (o = this.props.post) || void 0 === o ? void 0 : o.audioRoom) {
									const e = new URLSearchParams(window.location.href),
										t = parseInt(e.get("reportedTimeInSeconds") || "0", 10),
										o = {
											reportedAt: isNaN(t) ? 0 : t,
											postId: d,
											...m
										};
									h = () => Object(A.c)(s(), {
										input: o
									});
									break
								}
								const e = {
									postId: d,
									...m
								};
								h = () => Object(k.d)(s(), {
									input: e
								});
								break;
							case U.Comment:
								const t = {
									commentId: d,
									...m
								};
								h = () => (this.props.sendEvent(x(d)), _(s(), {
									input: t
								}));
								break;
							case U.Message:
								const r = {
									messageId: d,
									...m
								};
								h = () => Object(O.a)(s(), {
									input: r
								});
								break;
							default:
								throw new Error("Unsupported item type provided")
						}(await h()).ok || r()
					}, this.state = {
						ctlFlowOpened: !1,
						hasLoaded: !1
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					const {
						itemId: e
					} = this.getItemMetadata(), {
						locale: t,
						gqlContext: o,
						hostAppName: s
					} = this.props;
					K(o(), e, B, s, t).then(e => {
						e && this.setState({
							formComponent: e.component,
							formState: e.state,
							hasLoaded: !0
						})
					}), document.addEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					var e;
					const {
						props: {
							isNightmodeOn: t,
							postId: o,
							commentId: n,
							messageId: i,
							isReportAnAdEnabled: d
						},
						state: {
							formComponent: a,
							formState: l,
							ctlFlowOpened: p,
							hasLoaded: u
						}
					} = this, h = d && (null === (e = this.props.post) || void 0 === e ? void 0 : e.isSponsored) ? r.fbt._("Report Ad", null, {
						hk: "4ncCdo"
					}) : r.fbt._("Submit a Report", null, {
						hk: "1v59vx"
					}), {
						itemAuthor: b,
						itemAuthorId: f
					} = this.getItemMetadata(), w = n || o || i;
					return p && b ? c.a.createElement(m.b, {
						withOverlay: !0,
						overlayCustomStyles: m.a,
						username: b,
						fromUserProfile: !w,
						onCloseCrisisModal: this.handleReportFlowClose,
						thingId: w
					}) : a && l && u ? c.a.createElement(v.a, {
						formComponent: a,
						formState: l,
						onCloseClick: this.handleReportFlowClose,
						onSubmit: this.onReportSubmit,
						headerTitle: h,
						onOpenCtlFlow: this.onOpenCtlFlow,
						onBlockAuthor: () => this.onBlockAuthor(b, f),
						onResize: this.props.onResize
					}) : c.a.createElement($, null, c.a.createElement(Q, {
						src: t ? `${s.a.assetPath}/img/loader_2orbit_loop_nightmode.gif` : `${s.a.assetPath}/img/loader_2orbit_loop.gif`,
						alt: r.fbt._("Loading", null, {
							hk: "wiY7"
						})
					}))
				}
			}
			t.default = Object(L.b)(M(Object(h.c)(Y)))
		},
		"./src/reddit/components/ReportFlow/index.m.less": function(e, t, o) {
			e.exports = {
				ReportLoaderWrapper: "_2klptZtqsBAGq-K0L-mmhN",
				reportLoaderWrapper: "_2klptZtqsBAGq-K0L-mmhN",
				LoadingIcon: "_2a3vKytEqctI3YbHm0Jt5d",
				loadingIcon: "_2a3vKytEqctI3YbHm0Jt5d"
			}
		},
		"./src/reddit/endpoints/post/report.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return p
			})), o.d(t, "a", (function() {
				return u
			})), o.d(t, "b", (function() {
				return m
			})), o.d(t, "c", (function() {
				return b
			}));
			var s = o("./src/lib/constants/index.ts"),
				r = o("./src/lib/makeApiRequest/index.ts"),
				n = o("./src/lib/makeGqlRequest/index.ts"),
				i = o("./src/lib/omitHeaders/index.ts"),
				d = o("./src/reddit/constants/headers.ts"),
				c = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				a = o("./src/reddit/helpers/reportPage/index.ts"),
				l = o("./src/redditGQL/operations/ReportPost.json");
			const p = (e, t) => Object(n.a)(e, {
				...l,
				variables: t
			});
			var u;
			! function(e) {
				e.Rule = "rule", e.SiteRule = "siteRule", e.Other = "other", e.FileComplaint = "fileComplaint", e.CrisisTextLine = "crisisTextLine"
			}(u || (u = {}));
			const m = (e, t) => Object(r.a)(Object(i.a)(e, [d.a]), {
					method: s.nb.POST,
					endpoint: Object(c.a)(`${e.apiUrl}/api/report`),
					data: h(t)
				}),
				h = e => {
					const t = {
							thing_id: e.id,
							api_type: "json",
							...e.timestamp && {
								live_stream_relative_report_time_sec: e.timestamp.toString()
							}
						},
						{
							reportFlowPayload: o
						} = e;
					switch (o.customText && (t.custom_text = o.customText), o.kind) {
						case u.Other:
							return {
								...t, reason: "other", other_reason: o.rule
							};
						case u.Rule:
							return {
								...t, reason: o.rule, rule_reason: o.rule
							};
						case u.SiteRule:
						case u.CrisisTextLine:
						default:
							return {
								...t, reason: "site_reason_selected", site_reason: o.rule
							}
					}
				},
				b = (e, t, o) => Object(r.a)(Object(i.a)(e, [d.a]), {
					method: s.nb.POST,
					endpoint: Object(c.a)(`${e.apiUrl}/api/report`),
					data: f(t, o)
				}),
				f = (e, t) => {
					const o = {
						...Object(a.b)(e),
						api_type: "json"
					};
					return t && (o.from_help_desk = !0), o
				}
		},
		"./src/reddit/endpoints/talk/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return l
			})), o.d(t, "b", (function() {
				return p
			})), o.d(t, "a", (function() {
				return u
			}));
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = (o("./node_modules/uuid/dist/esm-browser/v4.js"), o("./src/lib/makeGqlRequest/index.ts")),
				n = o("./src/lib/makeRequest/index.ts"),
				i = (o("./src/reddit/models/Subreddit/index.ts"), o("./src/redditGQL/operations/CreateLiveAudioRoomOnProfile.json"), o("./src/redditGQL/operations/CreateLiveAudioRoomOrError.json"), o("./src/redditGQL/operations/GetAvailableAudioRoomTopics.json"), o("./src/redditGQL/operations/GetSubredditAllowedPostTypes.json")),
				d = o("./src/redditGQL/operations/GetUserProfileAllowedPostTypes.json"),
				c = (o("./src/redditGQL/operations/PrepareLiveAudioRoom.json"), o("./src/redditGQL/operations/PrepareLiveAudioRoomOnProfile.json"), o("./src/redditGQL/operations/ReportTalk.json")),
				a = (o("./src/redditGQL/operations/StartLiveAudioRoom.json"), o("./src/redditGQL/types.ts"));
			const l = (e, t) => Object(r.a)(e, {
					...c,
					variables: t
				}),
				p = async (e, t) => {
					const o = await Object(r.a)(e, {
						...i,
						variables: t
					});
					return !!Object(n.c)(o) && (o.body.data.subredditInfoById.allowedPostTypes || []).includes(a.P.Talk)
				}, u = async (e, t) => {
					var o, s;
					const i = await Object(r.a)(e, {
						...d,
						variables: t
					});
					return !!Object(n.c)(i) && (null !== (s = null === (o = i.body.data.profileByName) || void 0 === o ? void 0 : o.allowedPostTypes) && void 0 !== s ? s : []).includes(a.P.Talk)
				};
			a.j.ServiceError, s.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
				hk: "3XqPJS"
			}), a.j.UserNotAuthorized, s.fbt._("You don't have permission to start talks in this community.", null, {
				hk: "1XY1Ss"
			}), a.j.RoomLimitExceeded, s.fbt._("You can only create three talks at one time. To continue, close a talk you're not using.", null, {
				hk: "3zPx9X"
			}), a.j.ConcurrentRoomLimitExceeded, s.fbt._("Too many talks are happening right now. Try again later.", null, {
				hk: "2LYXJx"
			}), a.j.SubredditRoomLimitExceeded, s.fbt._("This community can only host two talks at a time. Try again after one has ended.", null, {
				hk: "2mGf21"
			}), a.R.ServiceError, s.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
				hk: "3XqPJS"
			}), a.R.UserNotAuthorized, s.fbt._("You don't have permission to start talks in this community.", null, {
				hk: "1XY1Ss"
			})
		},
		"./src/reddit/helpers/reportPage/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return u
			})), o.d(t, "e", (function() {
				return m
			})), o.d(t, "c", (function() {
				return h
			})), o.d(t, "b", (function() {
				return b
			})), o.d(t, "a", (function() {
				return f
			}));
			var s = o("./src/reddit/models/RulesSequence/index.ts");
			const r = "(?:old\\.reddit\\.(?:com|local)|new\\.reddit\\.(?:com|local)|reddit\\.(?:com|local)|www\\.reddit\\.(?:com|local))",
				n = "(?:https?://)",
				i = `^${n}${r}/(?:(?:r)|(?:user|u))/(?:[^/]+)/comments/(?:\\w+)/(?:[^/]+)/(\\w+)(?:/.*)?`,
				d = `^${n}${r}/(?:(?:r)|(?:user|u))/(?:[^/]+)/comments/(\\w+)(?:/.*)?`,
				c = `^${n}${r}/message/messages/(\\w+)(?:/.*)?`,
				a = `^${n}?(?:mod.reddit.com/mail)/(?:[^/]+)/(\\w+)(?:/)?$`,
				l = `^${n}?(?:mod.reddit.com/mail)/(?:[^/]+)/(\\w+)/(\\w+)(?:/)?$`,
				p = `^${n}${r}/(?:rpan|live)/(?:(?:r)/(?:[^/]+)/)?(\\w+)(?:/.*)?`,
				u = `(?:${d}|${i}|${c}|${a}|${l}|${p})`,
				m = `(?:(?:${n}?${r}/)?(?:user|u)/)?([\\w-]+)(?:/)?`,
				h = `(?:(?:${n}?${r}/)?(?:r)/)?([\\w-]+)(?:/)?`,
				b = e => {
					const t = new RegExp(i),
						o = new RegExp(d),
						s = new RegExp(c),
						r = new RegExp(p),
						n = new RegExp(a),
						u = new RegExp(l);
					let b, f, w;
					if (e.thingUrl) {
						const i = e.thingUrl.trim();
						if (t.test(i)) {
							const e = t.exec(i);
							e && e.length > 1 && (b = "t1_" + e[1])
						} else if (o.test(i) || r.test(i)) {
							const e = o.exec(i) || r.exec(i);
							e && e.length > 1 && (b = "t3_" + e[1])
						} else if (s.test(i)) {
							const e = s.exec(i);
							e && e.length > 1 && (b = "t4_" + e[1])
						} else if (u.test(i)) {
							const e = u.exec(i);
							e && e.length > 2 && (f = e[1], w = e[2])
						} else if (n.test(i)) {
							const e = n.exec(i);
							e && e.length > 1 && (f = e[1])
						}
					}
					const x = new RegExp(m),
						v = new RegExp(h),
						g = [];
					let R;
					if (e.subredditName) {
						const t = e.subredditName.trim();
						if (v.test(t)) {
							const e = v.exec(t);
							e && e.length > 1 && (R = e[1])
						}
					}
					if (e.usernames && e.usernames.length)
						for (let i = 0; i < e.usernames.length; i++) {
							const t = e.usernames[i].trim();
							if (x.test(t)) {
								const e = x.exec(t);
								e && e.length > 1 && g.push(e[1])
							}
						}
					const {
						reason: j
					} = e;
					return {
						reason: "site_reason_selected",
						site_reason: j.reasonText,
						additional_info: e.additionalInfo ? e.additionalInfo.join(",") : void 0,
						custom_text: e.customText,
						modmail_conv_id: f,
						modmail_msg_id: w,
						sr_name: R,
						thing_id: b,
						usernames: g.length ? g.join(",") : void 0
					}
				},
				f = (e, t) => {
					const o = new s.a;
					return w(o, e, t, 0), o
				},
				w = (e, t, o, s) => {
					for (let r = 0; r < t.length; r++) {
						const n = t[r];
						e.update(r, s);
						const i = e.getSequence().length;
						if (n.reasonAsParam === o) return;
						if (n.nextStepReasons && n.nextStepReasons.length && (w(e, n.nextStepReasons, o, s + 1), e.getSequence().length > i)) return;
						e.cut(s - 1)
					}
				}
		},
		"./src/reddit/models/RulesSequence/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return s
			}));
			class s {
				constructor() {
					this.sequence = []
				}
				getSequence() {
					return this.sequence
				}
				update(e, t) {
					const o = this.sequence.slice(0, t);
					o.push(e), this.sequence = o
				}
				cut(e) {
					const t = this.sequence.slice(0, e + 1);
					this.sequence = t
				}
			}
		},
		"./src/reddit/selectors/experiments/reportAd.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return d
			}));
			var s = o("./node_modules/reselect/es/index.js"),
				r = o("./src/reddit/constants/experiments.ts"),
				n = o("./src/reddit/helpers/chooseVariant/index.ts");
			const i = Object(s.a)(e => Object(n.c)(e, {
					experimentName: r.Mc,
					experimentEligibilitySelector: n.a
				}), e => e),
				d = Object(s.a)(i, e => e === r.Rd)
		},
		"./src/redditGQL/operations/CreateLiveAudioRoomOnProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"e35a47c6aa21"}')
		},
		"./src/redditGQL/operations/CreateLiveAudioRoomOrError.json": function(e) {
			e.exports = JSON.parse('{"id":"f1f366237119"}')
		},
		"./src/redditGQL/operations/GetAvailableAudioRoomTopics.json": function(e) {
			e.exports = JSON.parse('{"id":"05271fef4b69"}')
		},
		"./src/redditGQL/operations/GetSubredditAllowedPostTypes.json": function(e) {
			e.exports = JSON.parse('{"id":"f65cf1eba776"}')
		},
		"./src/redditGQL/operations/GetUserProfileAllowedPostTypes.json": function(e) {
			e.exports = JSON.parse('{"id":"34fa0ef8e099"}')
		},
		"./src/redditGQL/operations/PrepareLiveAudioRoom.json": function(e) {
			e.exports = JSON.parse('{"id":"a04297924fc8"}')
		},
		"./src/redditGQL/operations/PrepareLiveAudioRoomOnProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"649e9f8bd6d9"}')
		},
		"./src/redditGQL/operations/ReportComment.json": function(e) {
			e.exports = JSON.parse('{"id":"cec8e7309a27"}')
		},
		"./src/redditGQL/operations/ReportForm.json": function(e) {
			e.exports = JSON.parse('{"id":"404920cc0308"}')
		},
		"./src/redditGQL/operations/ReportPost.json": function(e) {
			e.exports = JSON.parse('{"id":"08c43db238fd"}')
		},
		"./src/redditGQL/operations/ReportTalk.json": function(e) {
			e.exports = JSON.parse('{"id":"139ca5b89cf9"}')
		},
		"./src/redditGQL/operations/StartLiveAudioRoom.json": function(e) {
			e.exports = JSON.parse('{"id":"6e7ab4bd4873"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReportFlowNew.604fdcdf98f76f9942cf.js.map