// https://www.redditstatic.com/desktop2x/PublicAccessNetwork.e7b2082646f46f156832.js
// Retrieved at 1/18/2020, 1:00:22 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PublicAccessNetwork"], {
		"./src/lib/setInterval/index.ts": function(e, t, s) {
			"use strict";
			t.a = function(e, t) {
				for (var s = arguments.length, r = new Array(s > 2 ? s - 2 : 0), n = 2; n < s; n++) r[n - 2] = arguments[n];
				let a, o = !1;
				const i = async () => {
					r && r.length ? await e.call(window, ...r) : await e.call(window), o || (a = window.setTimeout(i, t))
				};
				return a = window.setTimeout(i, t), () => {
					o = !0, window.clearTimeout(a)
				}
			}
		},
		"./src/reddit/actions/publicAccessNetwork/preloads.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts");
			const o = Object(r.a)(n.t),
				i = Object(r.a)(n.y),
				c = (e, t) => async (s, r) => {
					const n = r(),
						o = Date.now(),
						i = e.map(e => Object(a.l)(n, e)).filter(Boolean).map(e => ({
							imageUrl: "".concat(e.stream.thumbnail, "?").concat(o),
							postId: e.post.id
						})).filter(e => !!e.imageUrl);
					return await m(i, t)
				}, d = (e, t) => async (s, r) => {
					const n = await s(c(e, t));
					s(o(n))
				}, l = (e, t) => async (s, r) => {
					const n = await s(c(e, t));
					s(i(n))
				}, m = (e, t) => Promise.all(e.map(e => u(e.imageUrl).then(s => s ? {
					postId: e.postId,
					imageUrl: e.imageUrl
				} : t ? {
					postId: e.postId,
					imageUrl: t
				} : void 0))).then(e => e.filter(e => !!e)), u = e => new Promise((t, s) => {
					const r = new Image;
					r.onload = () => t(), r.onerror = () => s(), r.src = e
				}).then(() => !0, () => !1)
		},
		"./src/reddit/actions/publicAccessNetwork/rpanWorker.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/setInterval/index.ts"),
				n = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				i = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const c = new class {
				constructor() {
					this.isInitialized = !1, this.configRateSec = a.d, this.batchFetchRateSec = a.c, this.heartbeatRateSec = a.f, this.statsRefreshRateSec = a.h, this.MIN_RATE_MS = 1e3, this.subscribeBatchAndConfig = e => async (t, s) => (this.batchSubscribers.includes(e) || (this.batchSubscribers.push(e), this.startBatchAndConfigWork(t, s)), () => this.unsubscribeBatchAndConfig(e)), this.subscribeStats = e => async (t, s) => (this.currentStreamPostId = e, this.startStatsWork(t, s), () => this.unsubscribeStats()), this.subscribeHeartbeat = e => async (t, s) => (this.currentStreamId = e, this.startHeartbeatWork(t, s), () => this.unsubscribeHeartbeat()), this.batchSubscribers = []
				}
				unsubscribeBatchAndConfig(e) {
					this.batchSubscribers = this.batchSubscribers.filter(t => t !== e), this.batchSubscribers.length || (this.clearFetchConfigInterval && this.clearFetchConfigInterval(), window.clearTimeout(this.fetchStreamBatchTimeout))
				}
				unsubscribeStats() {
					this.clearFetchCurrentStreamInterval && this.clearFetchCurrentStreamInterval(), this.currentStreamPostId = void 0
				}
				unsubscribeHeartbeat() {
					this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval(), this.currentStreamId = void 0
				}
				async initializeConfig(e, t) {
					if (this.isInitialized) return;
					await e(Object(n.a)()), Object(i.c)(t()).lastUpdated && (this.isInitialized = !0)
				}
				async startBatchAndConfigWork(e, t) {
					await this.initializeConfig(e, t), e(Object(o.f)()), this.startConfigFetchingWork(e, t), this.startBatchFetchingWork(e, t)
				}
				startConfigFetchingWork(e, t) {
					0 !== this.batchSubscribers.length && (this.clearFetchConfigInterval && this.clearFetchConfigInterval(), this.configRateSec = Object(i.c)(t()).rpan_config_refresh_rate || this.configRateSec, this.clearFetchConfigInterval = Object(r.a)(async () => {
						if (0 === this.batchSubscribers.length) return;
						await e(Object(n.a)());
						const s = Object(i.c)(t()).rpan_config_refresh_rate;
						s && this.configRateSec !== s && this.startConfigFetchingWork(e, t);
						const r = Object(i.c)(t()).viewer_streams_refresh;
						r && this.batchFetchRateSec !== r && this.startBatchFetchingWork(e, t);
						const a = Object(i.c)(t()).viewer_heartbeat_interval;
						a && this.heartbeatRateSec !== a && this.startHeartbeatWork(e, t);
						const o = Object(i.c)(t()).viewer_heartbeat_interval;
						o && this.statsRefreshRateSec !== o && this.startStatsWork(e, t)
					}, Math.max(1e3 * this.configRateSec, this.MIN_RATE_MS)))
				}
				startBatchFetchingWork(e, t) {
					if (0 === this.batchSubscribers.length) return;
					const s = Object(i.c)(t()).viewer_streams_refresh_slop || a.e,
						r = Math.cos(Math.PI * Math.round(Math.random())),
						n = Math.random() * s * r;
					this.batchFetchRateSec = Object(i.c)(t()).viewer_streams_refresh || this.batchFetchRateSec, window.clearTimeout(this.fetchStreamBatchTimeout), this.fetchStreamBatchTimeout = window.setTimeout(() => {
						0 !== this.batchSubscribers.length && (e(Object(o.f)()), this.startBatchFetchingWork(e, t))
					}, Math.max(1e3 * (this.batchFetchRateSec + n), this.MIN_RATE_MS))
				}
				async startStatsWork(e, t) {
					await this.initializeConfig(e, t), this.currentStreamPostId && (this.clearFetchCurrentStreamInterval && this.clearFetchCurrentStreamInterval(), this.statsRefreshRateSec = Object(i.c)(t()).viewer_stream_stats_refresh_rate || this.statsRefreshRateSec, this.clearFetchCurrentStreamInterval = Object(r.a)(() => {
						this.currentStreamPostId && e(Object(o.g)(this.currentStreamPostId))
					}, Math.max(1e3 * this.statsRefreshRateSec, this.MIN_RATE_MS)))
				}
				async startHeartbeatWork(e, t) {
					await this.initializeConfig(e, t), this.currentStreamId && (this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval(), this.heartbeatRateSec = Object(i.c)(t()).viewer_heartbeat_interval || this.heartbeatRateSec, this.clearSendHeartbeatInterval = Object(r.a)(() => {
						this.currentStreamId && e(Object(n.c)(this.currentStreamId))
					}, Math.max(1e3 * this.heartbeatRateSec, this.MIN_RATE_MS)))
				}
			};
			t.a = c
		},
		"./src/reddit/actions/publicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			}));
			var r = s("./node_modules/uuid/v4.js"),
				n = s.n(r),
				a = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(a.a)(o.z),
				c = e => async t => {
					t(i(e))
				}, d = () => async e => {
					e(i({
						lastChatActivityUtcTs: Date.now()
					}))
				}, l = () => async e => {
					e(i({
						correlationId: n()()
					}))
				}
		},
		"./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_2GTMVdV2t3ka_zfkVHHo95",
				wrapper: "_2GTMVdV2t3ka_zfkVHHo95",
				LiveStreamingWrapper: "_2PreAn-l2nVweCX4t-mfuy",
				liveStreamingWrapper: "_2PreAn-l2nVweCX4t-mfuy",
				Copy: "_3xhJYY30L68x0pxk-8uTYD",
				copy: "_3xhJYY30L68x0pxk-8uTYD",
				LiveStreamingCopy: "_11HjWCkxXrGJ_6388VQT0L",
				liveStreamingCopy: "_11HjWCkxXrGJ_6388VQT0L",
				SignupLink: "_1k97Y32qzGNtuVGyt73TpR",
				signupLink: "_1k97Y32qzGNtuVGyt73TpR",
				LiveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ",
				liveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ",
				LoginLink: "_3fM1M9rFBqKwfG-KJLnxPY",
				loginLink: "_3fM1M9rFBqKwfG-KJLnxPY"
			}
		},
		"./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/isSimpleClick/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/lib/loginHref/index.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/trackers/authControls.ts"),
				u = s("./src/reddit/i18n/components.tsx"),
				h = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less"),
				p = s.n(h);
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), v = i.a.div("Wrapper", p.a), g = i.a.span("Copy", p.a), S = i.a.wrapped(l.g, "SignupLink", p.a), C = i.a.wrapped(l.j, "LoginLink", p.a);
			t.a = Object(d.b)(e => {
				let {
					className: t,
					isLiveStreaming: s,
					location: r,
					openLoginModal: i,
					openRegisterModal: d,
					origin: l,
					sendEvent: h
				} = e;
				return n.a.createElement(v, {
					className: Object(a.a)(t, {
						[p.a.LiveStreamingWrapper]: s
					})
				}, n.a.createElement(g, {
					className: Object(a.a)({
						[p.a.LiveStreamingCopy]: s
					})
				}, b._("Log in or sign up to leave a comment", null, {
					hk: "1KD7Eh"
				})), n.a.createElement(C, {
					href: Object(c.a)(r, l, "/login"),
					onClick: e => {
						Object(o.a)(e) && (e.preventDefault(), e.stopPropagation(), i(), h(Object(m.a)("user_convert")))
					},
					"data-redditstyle": !0
				}, n.a.createElement(u.c, null, "log in")), n.a.createElement(S, {
					className: Object(a.a)({
						[p.a.LiveStreamingSignupLink]: s
					}),
					href: Object(c.a)(r, l, "/register"),
					onClick: e => {
						Object(o.a)(e) && (e.preventDefault(), e.stopPropagation(), d(), h(Object(m.c)("user_convert")))
					},
					"data-redditstyle": !0
				}, n.a.createElement(u.c, null, "sign up")))
			})
		},
		"./src/reddit/components/CommentsChat/MessageInput/Loader.m.less": function(e, t, s) {
			e.exports = {
				LoaderWrapper: "_3k8JPc9w-DJrYLoer3GicH",
				loaderWrapper: "_3k8JPc9w-DJrYLoer3GicH",
				Icon: "_1nrdmuhkCLXh8N_46gKAyn",
				icon: "_1nrdmuhkCLXh8N_46gKAyn",
				gradientAnimation: "_3kGJh7EpOUlhrvN051jlhD",
				Byline: "eI85Q_-1x9VERN15oDr3X",
				byline: "eI85Q_-1x9VERN15oDr3X"
			}
		},
		"./src/reddit/components/CommentsChat/MessageInput/Loader.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/loadWithRetries/index.ts"),
				c = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				d = s.n(c);
			const l = o.a.div("LoaderWrapper", d.a),
				m = o.a.div("Icon", d.a),
				u = o.a.div("Byline", d.a),
				h = Object(a.a)({
					ErrorComponent: () => n.a.createElement(l, null, n.a.createElement(m, null), n.a.createElement(u, null)),
					getComponent: () => Object(i.a)(() => Promise.all([s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNot~7e52de2e"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							isLivestreaming: t
						} = e;
						return t ? null : n.a.createElement(l, null, n.a.createElement(m, null), n.a.createElement(u, null))
					}
				});
			t.a = e => n.a.createElement(h, e)
		},
		"./src/reddit/components/GildModal/Loader.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const a = Object(r.a)({
				getComponent: () => Object(n.a)(() => Promise.all([s.e("FramedGild~GildModal"), s.e("GildModal")]).then(s.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = a
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/i18n/utils.ts"),
				m = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/Row.tsx"),
				p = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				b = s("./src/reddit/selectors/tooltip.ts"),
				v = s("./src/reddit/components/OverflowMenu/index.m.less"),
				g = s.n(v);
			const S = c.a.wrapped(u.a, "_Dropdown", g.a),
				C = Object(m.a)(S),
				w = c.a.button("MenuButton", g.a),
				E = c.a.wrapped(p.a, "MenuIcon", g.a),
				O = c.a.wrapped(h.b, "DropdownRow", g.a),
				x = Object(o.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(b.b)(s)(e)
					}
				}),
				f = Object(a.b)(x, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(d.g)({
							tooltipId: s
						}))
					}
				}),
				I = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = f(e => n.a.createElement(w, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": Object(l.c)("more options"),
				className: Object(i.a)(e.className, {
					[g.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: I(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : n.a.createElement(E, null), n.a.createElement(C, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition
			}, e.children)))
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/Overlay/index.m.less": function(e, t, s) {
			e.exports = {
				overlay: "_3w_dLAoZ36_fPFvFr73Twc",
				visible: "_3xefvVa9iQxtBKfDrIQHK5",
				overlayTop: "t59TT9rQbiEQkmrsaaYfs",
				overlayCenter: "_38XOKvg5Aum-pHj1zsk3Gh",
				muteButton: "_1loeDj0ZNN1lkR8TbCnX5L",
				titleContainer: "S05_Ivx6gzKZmSRXiZa2g",
				videoTitle: "_17PXlsAvhmFm8yKmnpboBI",
				RecordedLabel: "_1YoUYS0LQtaRkt6Je2wbSW",
				recordedLabel: "_1YoUYS0LQtaRkt6Je2wbSW",
				menuButton: "s36uqi4axSXHQMgaoux_n",
				shareButton: "_5sKR5rHQgiTK5_-gvLzJ9",
				reportIcon: "_3xY0AQnECn_6gvYN_s0gcK",
				menuIcon: "_1xrQmhCkwYzatHLEBV1tG-",
				volumeIcon: "_39-jgt3SIm_nk5n7j3QEfp",
				overlayBottom: "_1ZAJ7W6IsblPMAseqf_W_1",
				scrubberBar: "_3i-PRgw3NW9Db-1qAmdcMh",
				intro: "_1CsY8N-fPRu-iQN8ocPZCD",
				prompt: "_1KVVoPIOqNFBVgfKKhI6IJ",
				overflowItemIconWrapper: "_1B5cn8nAxfnEGrx_5yO_Pn",
				overflowItemIcon: "_2rs0m2DYBYodAJnsjGNR1r",
				promptButtonSet: "_1Iw3svNrJVGVZG8lv_0RkZ",
				promptButton: "_2k4XxsTat5YM_3MLe7Qvlr"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/ScrubberPanel/index.m.less": function(e, t, s) {
			e.exports = {
				scrubberBar: "_1qNcdQne5zCPqYhbbuj8dy",
				visible: "_2xzC2ncShLK6L1PpLtMNsg"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/StaticScreen/index.m.less": function(e, t, s) {
			e.exports = {
				staticContainer: "_1BdKib9dGcRah76SjYaMWn",
				tvNoise: "_3WT4xZSU6Wk4iRsCuHBExL",
				noise: "_3YjFa-j3NP6SmWvtbFZf__",
				previewContainer: "_1TRPx0NrRAAzDhUNaG6uLe"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/StreamingChat/index.m.less": function(e, t, s) {
			e.exports = {
				streamingChat: "_3ZcCOjXXSQTxyjfVz91MYT",
				prompt: "_72hwd-RmhciQJPjpTun-m",
				chatScroller: "_1VA8Leq8VgzE0tcCf0nnmc",
				emptyState: "_13PmNeNdYYYFh3BVc79an"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/SwitchButtons/index.m.less": function(e, t, s) {
			e.exports = {
				switchContainer: "CWoSjbtB167AZNKroCaZ_",
				switchButton: "mT9ZmVLUVuh9vAJ7zwJTF",
				streamThumbnail: "_2dFEpiLjl4l_V34KjcBiPT",
				arrowIcon: "_2rr0-UWx_dcJs5qJxx7zb6",
				switchContainerNext: "_1madTdUxB7YHTPcikPseyX",
				switchContainerPrevious: "_1uaoOY-tle0b_MqSTJ5byL"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/VotePanel/index.m.less": function(e, t, s) {
			e.exports = {
				statsPanel: "mZiwRB3IyMA2ciE9VYmM5",
				watchingContainer: "_1S1XpTfxiVE_qLOIr_7Q4T",
				watchingCounter: "_1oJlp6NNid7Mc4MQyILB-s",
				watchingCaption: "_2STAcvaW1vo-sELvkodWFV",
				voteContainer: "_1kPiN_EqJH2A8zcFqmXTsV",
				voteIcon: "mCEKjumIA4fAYzXycHXp7",
				upButton: "_1-ZeaCDlEjCCKHOO_UhElo",
				activeVote: "zgEolbsvkXlLlrgJSpWkL",
				downButton: "_3txlAk8zXSeqIrpIHIsZtK",
				votesCounter: "_1Hc9ts_bYKSv1OZS0zBGOo"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/index.m.less": function(e, t, s) {
			e.exports = {
				theaterContainer: "_2GRKD-vc7V1Y_N8mf81C73",
				panesWrapper: "_8aA-2ZrheEy6k2e1iShKQ",
				pane: "_1J9WuBbLemYVOo8ibJDljN",
				leftPane: "_1YLn-G2I6GbQpuf-DZ4fOX",
				videoContainer: "_1LWq4WiRex5umy4-L1eStm",
				rightPane: "p02A8ZUESZF7fQy6pu1WF",
				closeButton: "_34dJmQNu3gi0aCIS1PD5uw",
				closeIcon: "UP3tR535P7cIknrcrCxQ3"
			}
		},
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			}));
			var r = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const a = {
					backgroundColor: s("./src/reddit/constants/colors.ts").a.overlayReportFlow
				},
				o = () => null;
			t.a = Object(r.a)({
				ErrorComponent: o,
				getComponent: () => Object(n.a)(() => Promise.all([s.e("ReportFlow~ReportPage"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/lodash/throttle.js"),
				n = s.n(r),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.m.less"),
				u = s.n(m),
				h = s("./src/reddit/controls/Dropdown/row.m.less"),
				p = s.n(h);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var v = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			class g extends o.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = n()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, s = Object(i.a)(p.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? o.a.createElement(c.a, b({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && o.a.createElement("span", {
						className: s
					}, e.children), o.a.createElement("span", {
						className: Object(i.a)(p.a.text, e.textClassName)
					}, e.displayText)) : o.a.createElement(l.a, b({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: n()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? o.a.createElement("div", null, e.children) : o.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && o.a.createElement("span", {
						className: Object(i.a)(p.a.text, e.textClassName)
					}, e.displayText), e.showDropdownTriangle && o.a.createElement(d.a, {
						className: u.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				var {
					className: t
				} = e, s = v(e, ["className"]);
				const r = Object(i.a)(p.a.row, t, {
					[p.a.mIsInteractive]: !s.noHover,
					[p.a.mIsSelected]: s.isSelected
				});
				return o.a.createElement(g, b({
					className: r
				}, s))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, s) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				iconStyles: "_2XOVBjNLHjJIznEsn35vs2",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, s) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/controls/InternalLink/index.tsx"),
				a = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				o = s.n(a);
			t.a = r.a.wrapped(n.a, "unstyledInternalLink", o.a)
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "i", (function() {
				return l
			})), s.d(t, "j", (function() {
				return m
			})), s.d(t, "h", (function() {
				return u
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "g", (function() {
				return S
			}));
			var r = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
			const a = e => {
					switch (e) {
						case r.a.LIVE:
							return "stream_live";
						case r.a.VOD:
							return "stream_vod";
						case r.a.UNAVAILABLE:
							return "stream_unavailable";
						default:
							return
					}
				},
				o = (e, t) => {
					if (t) {
						const s = Object(r.i)(e, {
							streamIdFromPath: t.post.id
						});
						return {
							post: n.post(e, t.post.id),
							media: Object.assign({}, n.media(e, t.post.id, void 0, t), {
								type: a(s)
							})
						}
					}
				},
				i = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				c = () => e => ({
					source: "stream_du",
					action: "view",
					noun: "stream_du"
				}),
				d = (e, t) => s => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "enlarge",
					actionInfo: {
						position: t || 0
					}
				}, o(s, e)),
				l = e => t => Object.assign({
					source: "stream_player",
					action: "fail",
					noun: "stream"
				}, i(t), e && Object.assign({}, o(t, e))),
				m = e => t => Object.assign({
					source: "stream_player",
					action: "play",
					noun: "stream"
				}, i(t), o(t, e)),
				u = e => t => Object.assign({
					source: "stream_player",
					action: "complete",
					noun: "stream"
				}, i(t), o(t, e)),
				h = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "share"
				}, i(t), o(t, e)),
				p = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "upvote"
				}, i(t), o(t, e)),
				b = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "downvote"
				}, i(t), o(t, e)),
				v = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "report"
				}, i(t), o(t, e)),
				g = e => t => {
					const s = Object(r.l)(t, e);
					return Object.assign({
						source: "stream_player",
						action: "click",
						noun: "chat"
					}, o(t, s))
				},
				S = e => t => {
					const s = Object(r.l)(t, e);
					return Object.assign({
						source: "stream_player",
						action: "click",
						noun: "send_chat"
					}, o(t, s))
				}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				i = s.n(o);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(a.b)("dropdownTriangle"), " ").concat(e.className)
			}), "DropdownTriangle", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, s) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Menu/index.m.less"),
				i = s.n(o);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(a.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(a.a)(Object(o.b)("share"), c.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Report/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M14.7861,8.4019 L16.8831,4.4709 C17.0481,4.1609 17.0381,3.7869 16.8571,3.4849 C16.6771,3.1839 16.3511,2.9999 16.0001,2.9999 L4.0001,2.9999 C3.4471,2.9999 3.0001,3.4479 3.0001,3.9999 L3.0001,8.5869 L3.0001,12.8039 L3.0001,16.8039 C3.0001,17.3569 3.4471,17.8039 4.0001,17.8039 C4.5531,17.8039 5.0001,17.3569 5.0001,16.8039 L5.0001,13.8039 L16.0001,13.8039 C16.3511,13.8039 16.6771,13.6199 16.8571,13.3189 C17.0381,13.0179 17.0481,12.6439 16.8831,12.3339 L14.7861,8.4019 Z"
			})))
		},
		"./src/reddit/icons/svgs/Rules/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 30 30",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M20.7094669,9.4275 L9.29053307,9.4275 C8.86319398,9.4275 8.51636806,9.0915 8.51636806,8.6775 C8.51636806,8.2635 8.86319398,7.9275 9.29053307,7.9275 L20.7094669,7.9275 C21.136806,7.9275 21.4836319,8.2635 21.4836319,8.6775 C21.4836319,9.0915 21.136806,9.4275 20.7094669,9.4275 M20.7094669,14.142 L9.29053307,14.142 C8.86319398,14.142 8.51636806,13.806 8.51636806,13.392 C8.51636806,12.978 8.86319398,12.642 9.29053307,12.642 L20.7094669,12.642 C21.136806,12.642 21.4836319,12.978 21.4836319,13.392 C21.4836319,13.806 21.136806,14.142 20.7094669,14.142 M20.7094669,18.858 L9.29053307,18.858 C8.86319398,18.858 8.51636806,18.522 8.51636806,18.108 C8.51636806,17.6925 8.86319398,17.358 9.29053307,17.358 L20.7094669,17.358 C21.136806,17.358 21.4836319,17.6925 21.4836319,18.108 C21.4836319,18.522 21.136806,18.858 20.7094669,18.858 M20.7094669,23.5725 L9.29053307,23.5725 C8.86319398,23.5725 8.51636806,23.2365 8.51636806,22.8225 C8.51636806,22.407 8.86319398,22.0725 9.29053307,22.0725 L20.7094669,22.0725 C21.136806,22.0725 21.4836319,22.407 21.4836319,22.8225 C21.4836319,23.2365 21.136806,23.5725 20.7094669,23.5725 M23.95167,4.5 L20.4570891,4.5 C19.9198186,3.6075 18.9335324,3 17.7893165,3 L12.2106835,3 C11.0664676,3 10.0801814,3.6075 9.54291086,4.5 L6.04833002,4.5 C5.19365185,4.5 4.5,5.172 4.5,6 L4.5,25.5 C4.5,26.328 5.19365185,27 6.04833002,27 L23.95167,27 C24.8063482,27 25.5,26.328 25.5,25.5 L25.5,6 C25.5,5.172 24.8063482,4.5 23.95167,4.5"
			})))
		},
		"./src/reddit/icons/svgs/VideoShare/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "fpaVW-I8iox1soX0hTuwb"
			}
		},
		"./src/reddit/pages/PublicAccessNetwork/index.m.less": function(e, t, s) {
			e.exports = {
				rpanContainer: "e00nEFei4dIvTqPPuw5rE",
				overlay: "KiogDzsSRwmKjlSPDsTQv",
				forbiddenScreen: "_1Ew8OVeA6sJ108GaDUqjQf"
			}
		},
		"./src/reddit/pages/PublicAccessNetwork/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.match.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/login.ts"),
				l = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				m = s("./src/higherOrderComponents/makeAsync.tsx"),
				u = s("./src/lib/loadWithRetries/index.ts");
			var h = Object(m.a)({
					getComponent: () => Object(u.a)(() => s.e("RpanOnboardingModal").then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/Modals/Onboarding/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				p = s("./node_modules/fbt/lib/FbtPublic.js"),
				b = s("./node_modules/lodash/throttle.js"),
				v = s.n(b),
				g = s("./src/reddit/actions/media.ts"),
				S = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				C = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				w = s("./src/lib/makeActionCreator/index.ts");
			const E = Object(w.a)(C.C),
				O = Object(w.a)(C.S),
				x = e => async t => {
					t(E(e))
				}, f = Object(w.a)(C.O);
			var I = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				y = s("./src/reddit/actions/publicAccessNetwork/theaterSettings.ts"),
				j = s("./src/reddit/actions/publicAccessNetwork/userSettings.ts"),
				P = s("./src/reddit/actions/reportFlow.ts"),
				N = s("./node_modules/hls.js/dist/hls.js"),
				L = s.n(N),
				k = s("./src/lib/env/index.ts");
			const _ = 3,
				M = 5e3,
				V = 1e3;
			class T extends r.Component {
				constructor(e) {
					super(e), this.mediaRecoveryAttemptsCount = 0, this.mediaRecoveryLastAttemptUtc = 0, this.fragmentRecoveryLastAttemptUtc = 0, this.fragmentRecoveryAttemptsCount = 0, this.videoElement = n.a.createRef(), this.onPlayError = e => t => {
						if ("AbortError" === t.name) return;
						const {
							onAutoPlayPrevented: s,
							playMutedOnPrevented: r
						} = this.props;
						if ("NotAllowedError" === t.name) return s && s(), void(r && this.setState(Object.assign({}, this.state, {
							isMuteForced: !0
						})));
						Object(k.a)() && console.error(t), e && this.onIrrecoverableError(e)
					}, this.state = {
						isInitialized: !1,
						isMuteForced: !1
					}, this.hls = void 0, this.onVideoPlay = this.onVideoPlay.bind(this), this.onTimeUpdated = this.onTimeUpdated.bind(this)
				}
				componentDidUpdate(e, t) {
					e.url === this.props.url ? (e.isPaused !== this.props.isPaused && this.state.isInitialized && this.videoElement.current && (this.props.isPaused ? this.videoElement.current.pause() : this.videoElement.current.play().catch(this.onPlayError(this.hls))), !t.isMuteForced && this.state.isMuteForced && this.state.isInitialized && this.videoElement.current && this.videoElement.current.play().catch(this.onPlayError(this.hls))) : this.initialize()
				}
				componentDidMount() {
					this.initialize()
				}
				componentWillUnmount() {
					this.hls && this.hls.destroy()
				}
				render() {
					const {
						controls: e,
						muted: t,
						onEnded: s,
						onLoadedData: r
					} = this.props;
					return n.a.createElement("video", {
						controls: e,
						muted: t || this.state.isMuteForced,
						onEnded: s,
						onLoadedData: r,
						onPlay: this.onVideoPlay,
						onTimeUpdate: this.onTimeUpdated,
						ref: this.videoElement
					})
				}
				initialize() {
					const {
						autoplay: e,
						startTime: t,
						isPaused: s,
						onLevelLoaded: r,
						onLoadingData: n,
						url: a
					} = this.props;
					if (!a || !this.videoElement.current) return;
					this.hls && this.hls.destroy();
					const o = new L.a({
						enableWorker: !1,
						fragLoadingMaxRetry: 2,
						levelLoadingMaxRetry: 4,
						manifestLoadingMaxRetry: 1,
						startFragPrefetch: !0,
						liveSyncDurationCount: 2,
						maxMaxBufferLength: 10
					});
					this.subscribeErrorHandlers(o), o.on(L.a.Events.MANIFEST_LOADING, () => {
						n && n()
					}), o.on(L.a.Events.MANIFEST_PARSED, (r, n) => {
						e && !s && this.videoElement.current && (this.videoElement.current.currentTime = t, this.videoElement.current.play().catch(this.onPlayError(o))), this.setState(Object.assign({}, this.state, {
							isInitialized: !0
						}))
					}), o.on(L.a.Events.LEVEL_LOADED, (e, t) => {
						r && r(t.details)
					}), o.loadSource(a), o.attachMedia(this.videoElement.current), this.hls = o
				}
				subscribeErrorHandlers(e) {
					e.on(L.a.Events.ERROR, (t, s) => {
						if (s.type === L.a.ErrorTypes.NETWORK_ERROR && s.response && 410 === s.response.code) this.onResourceRemoved(e);
						else if (s.fatal) switch (s.type) {
							case L.a.ErrorTypes.MEDIA_ERROR:
								return void this.handleFatalMediaError(e);
							case L.a.ErrorTypes.NETWORK_ERROR:
								return void this.handleFatalNetworkError(e, s);
							default:
								return void this.onIrrecoverableError(e)
						}
					})
				}
				onResourceRemoved(e) {
					e.stopLoad(), this.props.onResourceRemoved && this.props.onResourceRemoved()
				}
				onIrrecoverableError(e) {
					e.destroy(), this.props.onError && this.props.onError()
				}
				handleFatalMediaError(e) {
					return Date.now() - this.mediaRecoveryLastAttemptUtc > V && (this.mediaRecoveryAttemptsCount = 0), 0 === this.mediaRecoveryAttemptsCount ? (this.mediaRecoveryAttemptsCount++, this.mediaRecoveryLastAttemptUtc = Date.now(), void e.recoverMediaError()) : 1 === this.mediaRecoveryAttemptsCount ? (this.mediaRecoveryAttemptsCount++, this.mediaRecoveryLastAttemptUtc = Date.now(), e.swapAudioCodec(), void e.recoverMediaError()) : void this.onIrrecoverableError(e)
				}
				handleFatalNetworkError(e, t) {
					t.details !== L.a.ErrorDetails.FRAG_LOAD_ERROR && t.details !== L.a.ErrorDetails.FRAG_LOAD_TIMEOUT ? this.onIrrecoverableError(e) : this.handleBadFragment(e, t.frag)
				}
				handleBadFragment(e, t) {
					this.resetBadFragmentsCountIfCooldownPassed(), this.fragmentRecoveryAttemptsCount > _ || !t ? this.onIrrecoverableError(e) : (this.fragmentRecoveryAttemptsCount++, this.fragmentRecoveryLastAttemptUtc = Date.now(), e.startLoad())
				}
				resetBadFragmentsCountIfCooldownPassed() {
					this.fragmentRecoveryLastAttemptUtc + M < Date.now() && (this.fragmentRecoveryAttemptsCount = 0)
				}
				onTimeUpdated() {
					this.videoElement.current && this.props.onTimeUpdate && this.props.onTimeUpdate(this.videoElement.current.currentTime)
				}
				onVideoPlay() {
					const {
						onPlay: e
					} = this.props;
					e && e(), this.state.isMuteForced && this.setState(Object.assign({}, this.state, {
						isMuteForced: !1
					}))
				}
				setCurrentTime(e) {
					const t = this.videoElement.current;
					t && (t.currentTime = e)
				}
				setVolume(e) {
					const t = this.videoElement.current;
					t && t.volume !== e && (t.volume = e)
				}
			}
			var A = s("./src/reddit/components/ReportFlow/index.tsx"),
				R = s("./src/reddit/components/TrackingHelper/index.tsx"),
				D = s("./src/reddit/constants/history.ts"),
				B = s("./src/reddit/constants/keycodes.ts"),
				F = s("./src/reddit/helpers/dom/index.ts"),
				U = s("./src/reddit/helpers/trackers/rpan.ts"),
				W = s("./src/reddit/helpers/trackers/screenview.ts"),
				H = s("./src/reddit/icons/svgs/Close/index.tsx"),
				K = s("./src/reddit/selectors/media.ts"),
				J = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				G = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts"),
				z = s("./src/config.ts"),
				Y = s("./src/reddit/actions/post.ts"),
				X = s("./src/reddit/i18n/components.tsx"),
				q = s("./src/reddit/i18n/utils.ts"),
				Z = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				Q = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				$ = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				ee = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.tsx"),
				te = s("./src/reddit/components/PublicAccessNetwork/Theater/ScrubberPanel/index.m.less"),
				se = s.n(te);
			class re extends r.Component {
				constructor(e) {
					super(e), this.setControlBarRef = e => {
						this.controlBarApi = e
					}, this.onToggleMute = e => {
						e.stopPropagation(), this.props.toggleMute()
					}, this.state = {
						settingChange: void 0
					}
				}
				componentDidUpdate(e) {
					const {
						videoCurrentTime: t,
						videoTotalTime: s
					} = this.props;
					this.controlBarApi && (t !== e.videoCurrentTime && this.controlBarApi.setCurrentTime(t), s !== e.videoTotalTime && this.controlBarApi.setTotalTime(s))
				}
				render() {
					const {
						className: e,
						isLive: t,
						isMuted: s,
						isPaused: r,
						isVisible: a,
						onPlayPauseToggle: o,
						onVideoPositionUpdate: i,
						seekBarRef: d,
						settingChange: l,
						setVolume: m,
						videoCurrentTime: u,
						videoTotalTime: h,
						volume: p,
						volumeRef: b
					} = this.props;
					return n.a.createElement(ee.a, {
						className: Object(c.a)(e, se.a.scrubberBar, {
							[se.a.visible]: a
						}),
						currentTime: u || 0,
						hasAudio: !0,
						hideControlBar: !1,
						hideFullScreenButton: !0,
						hideGradient: !0,
						isFullScreen: !1,
						isListing: !1,
						isLive: t,
						isMuted: s,
						isPaused: r,
						playPauseVideo: o,
						ref: this.setControlBarRef,
						seekBarRef: d,
						settingChange: l,
						setVideoPosition: i,
						setVolume: m,
						showSettingsIcon: !1,
						showVolumeIcon: !0,
						toggleMute: this.onToggleMute,
						totalTime: h || 0,
						volume: p,
						volumeRef: b
					})
				}
			}
			var ne = re,
				ae = s("./node_modules/lodash/debounce.js"),
				oe = s.n(ae),
				ie = s("./src/lib/prettyPrintNumber/index.ts"),
				ce = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				de = s("./src/reddit/models/Vote/index.ts"),
				le = s("./src/reddit/selectors/user.ts");
			Object(w.a)(C.B);
			var me = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				ue = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				he = s("./src/reddit/components/PublicAccessNetwork/Theater/VotePanel/index.m.less"),
				pe = s.n(he);
			const be = Object(i.c)({
				currentStream: (e, t) => {
					let {
						currentStreamId: s
					} = t;
					return Object(J.l)(e, s)
				}
			});
			class ve extends n.a.Component {
				constructor(e) {
					super(e), this.isVoteActive = e => this.state.displayedVoteState === e, this.upVotes = () => this.calculateVotes(de.a.upvoted), this.downVotes = () => this.calculateVotes(de.a.downvoted), this.calculateVotes = e => {
						const t = this.props.currentStream;
						if (!t) return 0;
						const s = e === de.a.upvoted ? t.upvotes : t.downvotes;
						return null === t.post.voteState && this.state.displayedVoteState === e || this.state.displayedVoteState === e && null !== t.post.voteState && Object(de.e)(t.post.voteState) !== e ? s + 1 : s
					}, this.onVoteUp = oe()(() => this.vote(de.a.upvoted), C.T, {
						leading: !0,
						trailing: !1
					}), this.onVoteDown = oe()(() => this.vote(de.a.downvoted), C.T, {
						leading: !0,
						trailing: !1
					}), this.state = {
						displayedVoteState: de.a.notVoted
					}, this.onVoteDown = this.onVoteDown.bind(this), this.onVoteUp = this.onVoteUp.bind(this)
				}
				componentDidMount() {
					const e = this.props.currentStream;
					e && e.post.voteState && this.setState(Object.assign({}, this.state, {
						displayedVoteState: Object(de.e)(e.post.voteState)
					}))
				}
				componentDidUpdate(e) {
					const t = this.props.currentStream,
						s = e.currentStream;
					t && (s && s.post.id === t.post.id || this.setState(Object.assign({}, this.state, {
						displayedVoteState: null !== t.post.voteState ? Object(de.e)(t.post.voteState) : de.a.notVoted
					})))
				}
				render() {
					const e = this.props.currentStream;
					if (!e) return null;
					const t = this.props.isLive ? e.continuous_watchers : e.unique_watchers;
					return n.a.createElement("div", {
						className: pe.a.statsPanel
					}, n.a.createElement("div", {
						className: pe.a.voteContainer
					}, n.a.createElement("button", {
						className: Object(c.a)(pe.a.upButton, {
							[pe.a.activeVote]: this.isVoteActive(de.a.upvoted)
						}),
						onClick: this.onVoteUp,
						value: "upvote",
						"aria-label": Object(q.c)("upvote")
					}, n.a.createElement(ue.a, {
						className: pe.a.voteIcon
					})), n.a.createElement("p", {
						className: pe.a.votesCounter
					}, Object(ie.b)(this.upVotes()))), n.a.createElement("div", {
						className: pe.a.watchingContainer
					}, n.a.createElement("div", {
						className: pe.a.watchingCounter
					}, Object(ie.b)(t)), n.a.createElement("p", {
						className: pe.a.watchingCaption
					}, this.props.isLive ? n.a.createElement(X.c, null, "Watching") : n.a.createElement(X.c, null, "Views"))), n.a.createElement("div", {
						className: pe.a.voteContainer
					}, n.a.createElement("button", {
						className: Object(c.a)(pe.a.downButton, {
							[pe.a.activeVote]: this.isVoteActive(de.a.downvoted)
						}),
						onClick: this.onVoteDown,
						value: "downvote",
						"aria-label": Object(q.c)("downvote")
					}, n.a.createElement(me.a, {
						className: pe.a.voteIcon
					})), n.a.createElement("p", {
						className: pe.a.votesCounter
					}, Object(ie.b)(this.downVotes()))))
				}
				vote(e) {
					const t = this.props.currentStream;
					if (t) {
						if (e === this.state.displayedVoteState) return this.props.vote(t.post.id, de.a.notVoted), void this.setState(Object.assign({}, this.state, {
							displayedVoteState: de.a.notVoted
						}));
						this.props.vote(t.post.id, e), this.setState(Object.assign({}, this.state, {
							displayedVoteState: e
						})), e === de.a.upvoted ? this.props.sendEvent(Object(U.f)(t)) : this.props.sendEvent(Object(U.c)(t))
					}
				}
			}
			var ge = Object(a.b)(be, (e, t) => ({
					vote: (t, s) => e(((e, t) => async (s, r, n) => {
						let {
							apiContext: a
						} = n;
						if (!Object(le.J)(r())) return void s(Object(d.e)());
						await Object(l.g)(e);
						const o = Object(J.l)(r(), e);
						null !== o.post.voteState && Object(de.e)(o.post.voteState) === t || await Object(ce.d)(a(), e, t)
					})(t, s))
				}))(ve),
				Se = s("./src/lib/lessComponent.tsx"),
				Ce = s("./src/lib/opener/index.ts"),
				we = s("./src/reddit/components/OverflowMenu/index.tsx"),
				Ee = s("./src/reddit/controls/Dropdown/Row.tsx"),
				Oe = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				xe = s("./src/reddit/icons/fonts/Share/index.tsx"),
				fe = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				Ie = s("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				ye = s("./src/reddit/icons/svgs/Report/index.tsx"),
				je = s("./src/reddit/icons/svgs/Rules/index.tsx"),
				Pe = s("./src/reddit/icons/svgs/VideoMute/index.tsx"),
				Ne = s("./src/reddit/icons/svgs/VideoReplay/index.tsx"),
				Le = s("./src/reddit/icons/svgs/VideoShare/index.m.less"),
				ke = s.n(Le);
			var _e = e => n.a.createElement("svg", {
					className: Object(c.a)(ke.a.icon, e.className),
					viewBox: "0 0 64 64",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("g", null, n.a.createElement("circle", {
					cx: "32",
					cy: "32",
					r: "30.72",
					fill: "none",
					stroke: "#fff",
					strokeWidth: "2.4576"
				}), n.a.createElement("path", {
					fill: "#fff",
					d: "M42.59 27.9447L35.18 21.5931C34.8212 21.2847 34.3292 21.2175 33.8984 21.4143C33.4676 21.6123 33.2 22.0299 33.2 22.5039V24.7995C29.5004 24.7995 26.5472 26.0031 24.4232 28.3755C21.6128 31.5159 20.4992 36.5271 21.2036 42.8667C21.2372 43.1715 21.4952 43.3995 21.7988 43.3995C21.8108 43.3995 21.8216 43.3995 21.8336 43.3983C22.1504 43.3815 22.4 43.1187 22.4 42.7995C22.4 39.3039 23.5508 36.4155 25.7276 34.4451C27.7148 32.6475 30.4868 31.7307 33.14 31.9971C33.1604 31.9983 33.1796 31.9911 33.2 31.9911V34.2951C33.2 34.7691 33.4676 35.1879 33.8984 35.3859C34.0616 35.4603 34.2332 35.4975 34.4036 35.4975C34.682 35.4975 34.9568 35.3979 35.18 35.2071L42.59 28.8555C42.7232 28.7415 42.8 28.5747 42.8 28.3995C42.8 28.2243 42.7232 28.0587 42.59 27.9447Z"
				}))),
				Me = s("./src/reddit/icons/svgs/VideoVolume/index.tsx"),
				Ve = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/index.m.less"),
				Te = s.n(Ve);
			const Ae = e => {
					let {
						onClick: t
					} = e;
					return n.a.createElement("button", {
						className: Te.a.shareButton,
						onClick: t,
						"aria-label": Object(q.c)("share video"),
						value: "share"
					}, n.a.createElement(xe.a, {
						className: Te.a.menuIcon
					}))
				},
				Re = e => {
					let {
						isMuted: t,
						onToggle: s
					} = e;
					return n.a.createElement("button", {
						className: Te.a.muteButton,
						onClick: s,
						"aria-label": Object(q.c)("mute video"),
						value: "mute"
					}, t ? n.a.createElement(Pe.a, {
						className: Te.a.volumeIcon
					}) : n.a.createElement(Me.a, {
						className: Te.a.volumeIcon
					}))
				},
				De = Se.a.wrapped(Oe.a, "menuIcon", Te.a),
				Be = e => {
					let {
						isReportable: t,
						onClick: s,
						onHideClick: r,
						onReportClick: a
					} = e;
					return n.a.createElement(we.b, {
						className: Te.a.menuButton,
						defaultButtonOutline: !0,
						dropdownId: "rpan-overlay-menu",
						icon: n.a.createElement(De, null),
						onClick: s
					}, n.a.createElement(Ee.b, {
						className: Te.a.overflowItem,
						displayText: Object(q.c)("View rules"),
						iconWrapperClassName: Te.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-rules"),
						onClick: () => Object(Ce.c)(C.M, Ce.b.BLANK)
					}, n.a.createElement(je.a, {
						className: Te.a.overflowItemIcon
					})), n.a.createElement(Ee.b, {
						className: Te.a.overflowItem,
						displayText: Object(q.c)("Visit RPAN community"),
						iconWrapperClassName: Te.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-community"),
						onClick: () => Object(Ce.c)(C.K, Ce.b.BLANK)
					}, n.a.createElement(Ie.a, {
						className: Te.a.overflowItemIcon
					})), t && n.a.createElement(Ee.b, {
						className: Te.a.overflowItem,
						displayText: Object(q.c)("Report"),
						iconWrapperClassName: Te.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-report"),
						onClick: a
					}, n.a.createElement(ye.a, {
						className: Te.a.overflowItemIcon
					})), n.a.createElement(Ee.b, {
						className: Te.a.overflowItem,
						displayText: Object(q.c)("Hide"),
						iconWrapperClassName: Te.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-hide"),
						onClick: r
					}, n.a.createElement(fe.a, {
						className: Te.a.overflowItemIcon
					})))
				},
				Fe = e => {
					let {
						onClick: t
					} = e;
					return n.a.createElement("button", {
						className: Te.a.promptButton,
						onClick: t
					}, n.a.createElement(Ne.a, null), n.a.createElement("span", null, n.a.createElement(X.c, null, "Replay Video")))
				},
				Ue = e => {
					let {
						onClick: t
					} = e;
					return n.a.createElement("button", {
						className: Te.a.promptButton,
						onClick: t
					}, n.a.createElement(_e, null), n.a.createElement("span", null, n.a.createElement(X.c, null, "Share Video")))
				},
				We = Object(i.c)({
					currentStream: (e, t) => {
						let {
							currentStreamId: s
						} = t;
						return s ? Object(J.l)(e, s) : void 0
					},
					isApiError: (e, t) => {
						let {
							currentStreamId: s
						} = t;
						return Object($.e)(e, s)
					},
					isBatchApiError: $.g,
					isBatchPending: $.h,
					isConfigError: $.i,
					isIntroInProgress: G.b,
					isMenuOpened: e => "rpan-overlay-menu" === e.tooltipId,
					lastBatchApiRequestTs: $.j
				});
			class He extends r.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.hoverTimeout = window.setTimeout(() => this.setState({
							isHovered: !0
						}), C.p)
					}, this.onMouseLeave = () => {
						window.clearTimeout(this.hoverTimeout), this.setState({
							isHovered: !1,
							settingChange: void 0
						})
					}, this.onMouseDown = e => {
						e.stopPropagation();
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						s && s.container && s.container.contains(e.target) && (this.setState({
							settingChange: Z.a.Volume
						}), s.handleMouseDown(e)), t && t.parentRect && t.parentRect.contains(e.target) && (this.setState({
							settingChange: Z.a.SeekBar
						}), t.handleMouseDown(e))
					}, this.onMouseMove = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						this.state.settingChange === Z.a.SeekBar && t && t.handleMouseMove(e), this.state.settingChange === Z.a.Volume && s && s.handleMouseMove(e)
					}, this.onMouseUp = e => {
						e.stopPropagation();
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						this.state.settingChange === Z.a.SeekBar && t && (t.handleMouseUp(e), this.props.onScrubbing()), this.state.settingChange === Z.a.Volume && s && s.handleMouseUp(e), this.setState({
							settingChange: void 0
						})
					}, this.isVisible = () => this.state.isHovered || this.props.isVisible || this.props.isMenuOpened, this.onCopyLink = () => {
						const {
							copyLink: e,
							currentStream: t,
							onShareVideo: s,
							sendEvent: r
						} = this.props;
						t && (e("".concat(z.a.redditUrl).concat(t.share_link)), s(), r(Object(U.e)(t)))
					}, this.state = {
						isHovered: !1,
						settingChange: void 0
					}
				}
				componentWillUnmount() {
					window.clearTimeout(this.hoverTimeout)
				}
				render() {
					const {
						currentStream: e,
						isIntroInProgress: t,
						isLive: s,
						isMuted: r,
						isPaused: a,
						isUnavailable: o,
						onHide: i,
						onReport: d,
						onPlayPauseToggle: l,
						onToggleMenu: m,
						onVideoPositionUpdate: u,
						sendEvent: h,
						setVolume: p,
						toggleMute: b,
						videoCurrentTime: v,
						videoTotalTime: g,
						volume: S
					} = this.props;
					return n.a.createElement("div", {
						className: Object(c.a)(Te.a.overlay, {
							[Te.a.visible]: this.isVisible()
						}),
						onMouseDown: this.onMouseDown,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseMove,
						onMouseUp: this.onMouseUp
					}, e && !t && !o && n.a.createElement("div", {
						className: Te.a.overlayTop
					}, n.a.createElement("div", {
						className: Te.a.titleContainer
					}, n.a.createElement("h1", {
						"aria-label": Object(q.c)("video title"),
						className: Te.a.videoTitle
					}, e.post.title), !s && n.a.createElement("div", {
						className: Te.a.RecordedLabel
					}, n.a.createElement(X.c, null, "Recorded Live"))), n.a.createElement(Ae, {
						onClick: this.onCopyLink
					}), n.a.createElement(Be, {
						isReportable: !t && !o,
						onClick: m,
						onHideClick: i,
						onReportClick: d
					})), n.a.createElement("div", {
						className: Te.a.overlayCenter
					}, this.getContent()), e && !t && !o && n.a.createElement("div", {
						className: Te.a.overlayBottom
					}, n.a.createElement(ge, {
						currentStreamId: e.post.id,
						isLive: s,
						sendEvent: h
					}), n.a.createElement(ne, {
						isLive: s,
						isMuted: r,
						isPaused: a,
						isVisible: this.isVisible(),
						onPlayPauseToggle: l,
						onVideoPositionUpdate: u,
						seekBarRef: e => this.seekBar = e,
						settingChange: this.state.settingChange,
						setVolume: p,
						toggleMute: b,
						videoCurrentTime: v,
						videoTotalTime: g,
						volume: S,
						volumeRef: e => this.volumeControl = e
					})))
				}
				getContent() {
					const {
						currentStream: e,
						currentStreamId: t,
						isApiError: s,
						isBatchApiError: r,
						isBatchPending: a,
						isConfigError: o,
						isIntroInProgress: i,
						isLoading: c,
						isMuted: d,
						isUnavailable: l,
						lastBatchApiRequestTs: m,
						onReplayVideo: u,
						showErrorPrompt: h,
						showStreamEndedPrompt: p,
						toggleMute: b
					} = this.props;
					return h || i && o || t && s || !t && r || !t && !r && !a && m ? n.a.createElement("div", {
						className: Te.a.prompt
					}, n.a.createElement(X.c, null, "Connection issues")) : l ? null : i ? n.a.createElement("div", {
						className: Te.a.intro
					}, n.a.createElement(Re, {
						isMuted: d,
						onToggle: b
					}), n.a.createElement("div", {
						className: Te.a.prompt
					}, n.a.createElement(X.c, null, "Tuning..."))) : c ? n.a.createElement("div", {
						className: Te.a.prompt
					}, n.a.createElement(X.c, null, "Tuning...")) : e && e.stream.state === Q.b.DISCONNECTED ? n.a.createElement("div", {
						className: Te.a.prompt
					}, n.a.createElement(X.c, null, "Broadcast paused")) : p ? n.a.createElement("div", {
						className: Te.a.prompt
					}, n.a.createElement("div", {
						className: Te.a.promptButtonSet
					}, n.a.createElement(Fe, {
						onClick: u
					}), n.a.createElement(Ue, {
						onClick: this.onCopyLink
					}))) : null
				}
			}
			var Ke = Object(a.b)(We, (e, t) => ({
					copyLink: t => e(Object(Y.t)(t)),
					onHide: () => {
						t.currentStreamId && (e(Object(Y.K)(t.currentStreamId, !0, !0, !0)), e(x(t.currentStreamId)))
					}
				}))(He),
				Je = s("./src/reddit/actions/publicAccessNetwork/preloads.ts"),
				Ge = s("./src/reddit/components/PublicAccessNetwork/Theater/StaticScreen/index.m.less"),
				ze = s.n(Ge);
			const Ye = Object(i.c)({
				isIntroInProgress: G.b,
				previewUrl: (e, t) => {
					let {
						currentStream: s
					} = t;
					return s ? Object(J.j)(e, {
						streamId: s.post.id
					}) : void 0
				}
			});
			class Xe extends r.Component {
				constructor(e) {
					super(e)
				}
				componentDidMount() {
					const {
						currentStream: e,
						preloadImages: t,
						previousStream: s,
						nextStream: r
					} = this.props, n = [];
					e && n.push(e.post.id), s && n.push(s.post.id), r && n.push(r.post.id), n.length > 0 && t(n)
				}
				componentDidUpdate(e) {
					const {
						currentStream: t,
						nextStream: s,
						preloadImages: r,
						previousStream: n
					} = this.props, a = [];
					t && this.isStreamChanged(t, e.currentStream) && a.push(t.post.id), n && this.isStreamChanged(n, e.previousStream) && a.push(n.post.id), s && this.isStreamChanged(s, e.nextStream) && a.push(s.post.id), a.length > 0 && r(a)
				}
				render() {
					const {
						isIntroInProgress: e,
						previewUrl: t
					} = this.props;
					return n.a.createElement("div", {
						className: ze.a.staticContainer
					}, n.a.createElement("div", {
						className: ze.a.tvNoise,
						"aria-label": Object(q.c)("video static")
					}), t && !e && n.a.createElement("div", {
						className: ze.a.previewContainer,
						"aria-label": Object(q.c)("preview of video"),
						style: {
							backgroundImage: "url(".concat(t, ")")
						}
					}))
				}
				isStreamChanged(e, t) {
					return !!e && (t && e.post.id !== t.post.id || !t)
				}
			}
			var qe = Object(a.b)(Ye, (e, t) => ({
					preloadImages: t => e(Object(Je.a)(t))
				}))(Xe),
				Ze = s("./src/lib/constants/index.ts"),
				Qe = s("./src/lib/makeCommentsPageKey/index.ts"),
				$e = s("./src/lib/makeDraftKey/index.ts"),
				et = s("./src/reddit/actions/page.ts"),
				tt = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx");
			var st = Object(m.a)({
					getComponent: () => Object(u.a)(() => Promise.all([s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNot~7e52de2e"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Mult~12812a0e"), s.e("ChatPost")]).then(s.bind(null, "./src/reddit/components/CommentsChat/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				rt = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				nt = s("./src/reddit/components/GildModal/getGildModalId.ts"),
				at = s("./src/reddit/components/GildModal/Loader.tsx"),
				ot = s("./src/reddit/models/PostDraft/index.ts"),
				it = s("./src/reddit/selectors/gild.ts"),
				ct = s("./src/reddit/selectors/posts.ts"),
				dt = s("./src/reddit/components/PublicAccessNetwork/Theater/StreamingChat/index.m.less"),
				lt = s.n(dt);
			const mt = Object(i.c)({
				gildModalIsOpen: (e, t) => {
					let {
						postId: s
					} = t;
					const r = Object(nt.b)(s);
					return Object(it.c)(e, r)
				},
				isDisabled: (e, t) => Object(J.e)(e, {
					streamIdFromPath: t.postId
				}),
				isLoggedIn: le.J,
				isPostDataLoaded: (e, t) => {
					let {
						postId: s
					} = t;
					return !!Object(ct.J)(e, {
						postId: s
					})
				},
				language: le.S
			});
			class ut extends r.Component {
				constructor(e) {
					super(e), this.onChatClick = () => {
						this.props.sendEvent(Object(U.b)(this.props.postId))
					}
				}
				componentDidMount() {
					this.props.postId && this.props.loadComments()
				}
				componentDidUpdate(e) {
					this.props.postId !== e.postId && this.props.loadComments()
				}
				render() {
					const {
						postId: e,
						gildModalIsOpen: t,
						isDisabled: s,
						isLoggedIn: r,
						isPostDataLoaded: a,
						language: o,
						location: i,
						openLoginModal: d,
						openRegisterModal: l,
						sendEvent: m,
						subredditId: u
					} = this.props, h = Object(Qe.a)(e), p = Object($e.a)(ot.c.replyToPost, e);
					return s ? n.a.createElement("div", {
						className: Object(c.a)(lt.a.streamingChat, lt.a.prompt)
					}, n.a.createElement(X.c, null, "Chat has been disabled")) : a ? n.a.createElement("div", {
						"aria-label": Object(q.c)("chat window"),
						className: lt.a.streamingChat,
						onClick: this.onChatClick
					}, n.a.createElement(st, {
						className: lt.a.chatScroller,
						emptyStateClassName: lt.a.emptyState,
						isLivestreaming: !0,
						isLoading: !1,
						key: "commentsChat",
						postId: e,
						subredditId: u,
						commentsPageKey: h
					}), r ? n.a.createElement(rt.a, {
						key: "chatCommentsForm",
						language: o,
						postId: e,
						draftKey: p,
						commentsPageKey: h,
						isEditing: !1,
						sendEvent: m,
						isLivestreaming: !0
					}) : n.a.createElement(tt.a, {
						isLiveStreaming: !0,
						key: "chatLoggedOutForm",
						language: o,
						location: i,
						openLoginModal: d,
						openRegisterModal: l,
						origin
					}), t && n.a.createElement(at.a, {
						forcePublic: !0
					})) : n.a.createElement("div", {
						className: Object(c.a)(lt.a.streamingChat, lt.a.prompt)
					}, n.a.createElement(X.c, null, "Loading..."))
				}
			}
			var ht = Object(a.b)(mt, (e, t) => {
					let {
						postId: s
					} = t;
					return {
						loadComments: () => e(Object(et.r)(s, void 0, {
							sort: Ze.q.CHAT
						}, Ze.q.CHAT)),
						openLoginModal: () => e(Object(d.e)()),
						openRegisterModal: () => e(Object(d.f)())
					}
				})(ut),
				pt = e => n.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "M16,9H6.41l4.29-4.29A1,1,0,0,0,9.29,3.29l-6,6a1,1,0,0,0,0,1.41l6,6a1,1,0,0,0,1.41-1.41L6.41,11H16a1,1,0,0,0,0-2Z"
				})),
				bt = e => n.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "M16.92,9.62a1,1,0,0,0-.22-.33l-6-6A1,1,0,0,0,9.29,4.71L13.59,9H4a1,1,0,0,0,0,2h9.59L9.29,15.29a1,1,0,1,0,1.41,1.41l6-6a1,1,0,0,0,.22-1.09Z"
				})),
				vt = s("./src/reddit/components/PublicAccessNetwork/Theater/SwitchButtons/index.m.less"),
				gt = s.n(vt);
			const St = e => {
				let {
					isNext: t,
					onClick: s,
					stream: r
				} = e;
				return n.a.createElement("div", {
					className: Object(c.a)(gt.a.switchContainer, t ? gt.a.switchContainerNext : gt.a.switchContainerPrevious)
				}, n.a.createElement("button", {
					className: gt.a.switchButton,
					disabled: !r,
					onClick: s,
					"aria-label": t ? Object(q.c)("forward arrow") : Object(q.c)("back arrow"),
					value: t ? "forward" : "back"
				}, n.a.createElement("div", {
					className: gt.a.streamThumbnail,
					style: r ? {
						backgroundImage: "url(".concat(r.stream.thumbnail, ")")
					} : {}
				}), t ? n.a.createElement(bt, {
					className: gt.a.arrowIcon
				}) : n.a.createElement(pt, {
					className: gt.a.arrowIcon
				})))
			};
			var Ct = e => n.a.createElement(n.a.Fragment, null, n.a.createElement(St, {
					isNext: !1,
					onClick: e.onPrevious,
					stream: e.previousStream
				}), n.a.createElement(St, {
					isNext: !0,
					onClick: e.onNext,
					stream: e.nextStream
				})),
				wt = s("./src/reddit/components/PublicAccessNetwork/Theater/index.m.less"),
				Et = s.n(wt);
			const Ot = Object(i.c)({
					currentStream: J.c,
					currentStreamStartTime: J.d,
					currentHlsUrl: J.b,
					isIntroInProgress: G.b,
					isMuted: e => e.publicAccessNetwork.userSettings.isMuted,
					isReportFlowOpen: (e, t) => {
						let {
							streamIdFromPath: s
						} = t;
						return e.reportFlow.postOrCommentId === Object(l.e)(s || "")
					},
					lastChatActivityUtcTs: G.c,
					nextStream: J.f,
					nextTopStreamId: J.g,
					playbackState: J.i,
					previousStream: J.k,
					volume: K.b
				}),
				xt = Object(a.b)(Ot, (e, t) => ({
					closeLocation: () => e(Object(o.b)(t.location.state[D.a.CloseLocation])),
					fetchPostForStream: t => e(Object(S.b)(t)),
					onBatchAndConfigSubscribe: t => e(I.a.subscribeBatchAndConfig(t)),
					onReportModalRequested: t => e(Object(P.j)(t, void 0, !0)),
					onStatsSubscribe: t => e(I.a.subscribeStats(t)),
					onHeartbeatSubscribe: t => e(I.a.subscribeHeartbeat(t)),
					receiveHlsStreamEnded: t => e(Object(l.b)(t)),
					receiveHlsStreamRemoved: t => e(Object(l.c)(t)),
					removeStreamFromHistory: t => e(x(t)),
					setNewCorrelationId: () => e(Object(y.b)()),
					setIntroFinishedStatus: t => e(Object(y.c)({
						isIntroFinished: t
					})),
					setMuteSettings: t => e(Object(j.b)({
						isMuted: t
					})),
					setVideoVolume: t => e(g.e(t)),
					updateVideoTimestamp: (t, s) => e(f({
						streamId: t,
						timestamp: s
					})),
					visitStream: t => e((e => async t => {
						t(O(e))
					})(t))
				}));
			class ft extends r.Component {
				constructor(e) {
					super(e), this.onCurrentTimeChanged = e => {
						this.onCurrentTimeChangedThrottled(e), this.state.videoCurrentTime !== e && this.setState({
							videoCurrentTime: e
						})
					}, this.onCurrentTimeChangedThrottled = v()(e => {
						const {
							currentStream: t,
							isIntroInProgress: s,
							updateVideoTimestamp: r
						} = this.props;
						!s && t && this.isCurrentStreamWatchable() && r(t.post.id, e)
					}, C.q), this.onVideoPlayerPositionUpdate = e => {
						this.state.videoCurrentTime !== e && (this.setState({
							videoCurrentTime: e
						}), this.hlsVideoApi && this.hlsVideoApi.setCurrentTime(e))
					}, this.onNextStream = v()(() => {
						const {
							nextStream: e
						} = this.props;
						e && this.goToStream(e.post.id)
					}, C.r, {
						leading: !0,
						trailing: !1
					}), this.onPreviousStream = v()(() => {
						const {
							previousStream: e
						} = this.props;
						e && this.goToStream(e.post.id)
					}, C.r, {
						leading: !0,
						trailing: !1
					}), this.onNextStreamKeyHandler = e => {
						Object(F.g)(e.target) ? e.stopPropagation() : e.keyCode === B.a.ArrowRight ? this.onNextStream() : e.keyCode === B.a.ArrowLeft && this.onPreviousStream()
					}, this.onPlayPauseToggle = () => {
						this.cancelSwitchingOnStreamEnded(), this.state.isVideoPaused ? this.playVideo() : this.pauseVideo()
					}, this.onToggleMuteVideo = () => {
						this.setVideoMute(!this.props.isMuted)
					}, this.onSetVolume = (e, t) => {
						const s = this.hlsVideoApi;
						s && (t ? 0 !== e ? this.props.setVideoVolume(e) : this.props.setMuteSettings(!0) : (s.setVolume(e), e || this.props.isMuted ? e && this.props.isMuted && this.setVideoMute(!1) : this.setVideoMute(!0)))
					}, this.onReplayVideo = () => {
						this.cancelSwitchingOnStreamEnded(), this.replayVideo()
					}, this.onScrubbing = () => {
						this.cancelSwitchingOnStreamEnded()
					}, this.onShareVideo = () => {
						this.cancelSwitchingOnStreamEnded()
					}, this.onToggleMenu = () => {
						this.cancelSwitchingOnStreamEnded()
					}, this.setVideoMute = e => {
						this.props.setMuteSettings(e);
						const t = this.hlsVideoApi;
						t && (e || t.setVolume(this.props.volume))
					}, this.isCurrentStreamWatchable = () => this.props.playbackState === J.a.LIVE || this.props.playbackState === J.a.VOD, this.state = {
						isUnavailableVideoJustFinished: !1,
						isVodStreamJustFinished: !1,
						isError: !1,
						isLoading: !0,
						isOverlayVisible: !1,
						isSwitchingOnStreamEndedScheduled: !1,
						isVideoPaused: !1,
						showStreamEndedPrompt: !1,
						videoCurrentTime: 0,
						videoTotalTime: 0
					}, this.onAutoPlayPrevented = this.onAutoPlayPrevented.bind(this), this.onClose = this.onClose.bind(this), this.onEnded = this.onEnded.bind(this), this.onNextStream = this.onNextStream.bind(this), this.onPlayerError = this.onPlayerError.bind(this), this.onPreviousStream = this.onPreviousStream.bind(this), this.onReport = this.onReport.bind(this), this.onVideoPlayerLevelLoaded = this.onVideoPlayerLevelLoaded.bind(this), this.onVideoPlayerLoadedData = this.onVideoPlayerLoadedData.bind(this), this.onVideoPlayerLoadingData = this.onVideoPlayerLoadingData.bind(this), this.onVideoPlayerResourceRemoved = this.onVideoPlayerResourceRemoved.bind(this), this.scheduleSwitchingOnStreamEnded = this.scheduleSwitchingOnStreamEnded.bind(this)
				}
				componentDidMount() {
					this.props.onBatchAndConfigSubscribe(ft.name).then(e => this.unsubscribeBatchAndConfig = e), this.props.setNewCorrelationId(), this.props.sendEvent(Object(W.n)()), document.addEventListener("keydown", this.onNextStreamKeyHandler), this.props.isIntroInProgress || this.handleNewStream()
				}
				componentDidUpdate(e) {
					const {
						currentStream: t,
						isIntroInProgress: s,
						isReportFlowOpen: r,
						playbackState: n
					} = this.props;
					!s && e.isIntroInProgress && this.handleNewStream(), s || e.isIntroInProgress || !yt(t, e.currentStream) || this.handleNewStream(), this.state.isSwitchingOnStreamEndedScheduled || s || !(!t || n === J.a.VOD && this.state.isVodStreamJustFinished || !this.isCurrentStreamWatchable() && this.state.isUnavailableVideoJustFinished) || (this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.scheduleSwitchingOnStreamEnded()), this.state.isVodStreamJustFinished && (this.setState({
						isVodStreamJustFinished: !1
					}), this.showStreamEndedPrompt()), s || t || this.state.isError || this.setState(Object.assign({}, this.state, {
						isError: !0
					})), r && this.state.isVideoPaused && this.setState({
						isVideoPaused: !0
					})
				}
				componentWillUnmount() {
					window.clearTimeout(this.overlayVisibilityTimeout), window.clearTimeout(this.switchingOnStreamEndedTimeout), this.onCurrentTimeChangedThrottled.cancel(), document.removeEventListener("keydown", this.onNextStreamKeyHandler), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.unsubscribeBatchAndConfig && this.unsubscribeBatchAndConfig()
				}
				render() {
					const {
						currentStream: e,
						currentStreamStartTime: t,
						currentHlsUrl: s,
						isIntroInProgress: r,
						isMuted: a,
						isOverlay: o,
						isReportFlowOpen: i,
						location: d,
						nextStream: l,
						playbackState: m,
						previousStream: u,
						sendEvent: h,
						volume: p
					} = this.props, {
						videoCurrentTime: b,
						videoTotalTime: v
					} = this.state, g = e && !e.post.subreddit;
					return n.a.createElement("div", {
						className: Object(c.a)(Et.a.theaterContainer, {
							[Et.a.overlay]: o
						})
					}, n.a.createElement("div", {
						className: Et.a.panesWrapper
					}, n.a.createElement("div", {
						className: Object(c.a)(Et.a.pane, Et.a.leftPane)
					}, n.a.createElement("div", {
						className: Et.a.videoContainer
					}, (this.state.isLoading || this.state.isError) && n.a.createElement(qe, {
						previousStream: u,
						currentStream: e,
						nextStream: l
					}), s && n.a.createElement(T, {
						autoplay: !0,
						controls: !1,
						startTime: t,
						isPaused: this.state.isVideoPaused,
						muted: a,
						onAutoPlayPrevented: this.onAutoPlayPrevented,
						onEnded: this.onEnded,
						onError: this.onPlayerError,
						onLevelLoaded: this.onVideoPlayerLevelLoaded,
						onLoadedData: this.onVideoPlayerLoadedData,
						onLoadingData: this.onVideoPlayerLoadingData,
						onResourceRemoved: this.onVideoPlayerResourceRemoved,
						onTimeUpdate: this.onCurrentTimeChanged,
						playMutedOnPrevented: !0,
						ref: e => this.hlsVideoApi = e,
						url: s
					}), n.a.createElement(Ke, {
						currentStreamId: e && e.post.id,
						isLoading: this.state.isLoading,
						isLive: m === J.a.LIVE,
						isMuted: a,
						isPaused: this.state.isVideoPaused,
						isUnavailable: m === J.a.UNAVAILABLE,
						isVisible: this.state.isOverlayVisible,
						onReplayVideo: this.onReplayVideo,
						onShareVideo: this.onShareVideo,
						onPlayPauseToggle: this.onPlayPauseToggle,
						onReport: this.onReport,
						onScrubbing: this.onScrubbing,
						onToggleMenu: this.onToggleMenu,
						onVideoPositionUpdate: this.onVideoPlayerPositionUpdate,
						sendEvent: this.props.sendEvent,
						setVolume: this.onSetVolume,
						showErrorPrompt: this.state.isError,
						showStreamEndedPrompt: this.state.showStreamEndedPrompt,
						toggleMute: this.onToggleMuteVideo,
						videoCurrentTime: b,
						videoTotalTime: v,
						volume: p
					}))), e && !g && !r && n.a.createElement("div", {
						className: Object(c.a)(Et.a.pane, Et.a.rightPane)
					}, n.a.createElement(ht, {
						location: d,
						postId: e.post.id,
						sendEvent: h,
						subredditId: e.post.subreddit.id
					}))), e && !r && n.a.createElement(Ct, {
						nextStream: l,
						onNext: this.onNextStream,
						onPrevious: this.onPreviousStream,
						previousStream: u
					}), e && !r && o && n.a.createElement(It, {
						onClick: this.onClose
					}), e && !r && i && n.a.createElement(A.a, {
						useLiveStreamingFlow: !0,
						overlayCustomStyles: A.b,
						postId: e.post.id,
						timestamp: Math.trunc(b),
						withOverlay: !0
					}))
				}
				onVideoPlayerLevelLoaded(e) {
					const {
						currentStream: t,
						playbackState: s,
						receiveHlsStreamEnded: r
					} = this.props;
					this.state.videoTotalTime !== e.totalduration && this.setState({
						videoTotalTime: e.totalduration
					}), t && !e.live && 0 !== e.endSN && s === J.a.LIVE && r(t.post.id)
				}
				onVideoPlayerLoadingData() {
					this.setState(Object.assign({}, this.state, {
						isLoading: !0,
						isError: !1
					}))
				}
				onVideoPlayerLoadedData() {
					this.setState(Object.assign({}, this.state, {
						isLoading: !1,
						isError: !1
					}))
				}
				onVideoPlayerResourceRemoved() {
					const {
						currentStream: e,
						receiveHlsStreamRemoved: t
					} = this.props;
					e && this.isCurrentStreamWatchable() && t(e.post.id)
				}
				onEnded() {
					const {
						currentStream: e,
						isIntroInProgress: t,
						playbackState: s,
						sendEvent: r,
						setIntroFinishedStatus: n
					} = this.props;
					if (this.setState({
							isVideoPaused: !0
						}), t) return n(!0), void this.setState(Object.assign({}, this.state, {
						isLoading: !0
					}));
					e && r(Object(U.h)(e)), s !== J.a.VOD || this.state.isVodStreamJustFinished || this.setState({
						isVodStreamJustFinished: !0
					}), this.isCurrentStreamWatchable() || this.state.isUnavailableVideoJustFinished || this.setState({
						isUnavailableVideoJustFinished: !0
					})
				}
				onPlayerError() {
					this.props.sendEvent(Object(U.i)(this.props.currentStream)), this.setState(Object.assign({}, this.state, {
						isError: !0
					}))
				}
				onAutoPlayPrevented() {
					this.props.setMuteSettings(!0)
				}
				onClose() {
					this.props.isOverlay && this.props.closeLocation()
				}
				onReport() {
					this.props.currentStream && (this.props.onReportModalRequested(this.props.currentStream.post.id), this.props.sendEvent(Object(U.d)(this.props.currentStream)))
				}
				hideStreamEndedPrompt() {
					this.state.showStreamEndedPrompt && this.setState({
						isOverlayVisible: !1,
						showStreamEndedPrompt: !1
					})
				}
				showStreamEndedPrompt() {
					this.state.showStreamEndedPrompt || this.setState({
						isOverlayVisible: !0,
						showStreamEndedPrompt: !0
					})
				}
				pauseVideo() {
					this.state.isVideoPaused || this.setState({
						isVideoPaused: !0
					})
				}
				playVideo() {
					this.state.isVideoPaused && (this.hideStreamEndedPrompt(), this.setState({
						isVideoPaused: !1
					}))
				}
				replayVideo() {
					this.onVideoPlayerPositionUpdate(0), this.playVideo()
				}
				scheduleSwitchingOnStreamEnded() {
					this.cancelSwitchingOnStreamEnded(), this.switchingOnStreamEndedTimeout = window.setTimeout(() => {
						const {
							isReportFlowOpen: e,
							lastChatActivityUtcTs: t,
							nextTopStreamId: s
						} = this.props;
						s && !e && !Object(G.a)(t) && this.state.isSwitchingOnStreamEndedScheduled ? this.goToStream(s) : this.cancelSwitchingOnStreamEnded()
					}, C.k), this.setState(Object.assign({}, this.state, {
						isSwitchingOnStreamEndedScheduled: !0
					}))
				}
				cancelSwitchingOnStreamEnded() {
					window.clearTimeout(this.switchingOnStreamEndedTimeout), this.state.isSwitchingOnStreamEndedScheduled && this.setState({
						isSwitchingOnStreamEndedScheduled: !1
					})
				}
				goToStream(e) {
					const {
						onNavigation: t,
						visitStream: s
					} = this.props;
					this.cancelSwitchingOnStreamEnded(), this.hideStreamEndedPrompt(), s(e), this.setState({
						isLoading: !0,
						isUnavailableVideoJustFinished: !1,
						isVideoPaused: !1
					}), t(e)
				}
				async handleNewStream() {
					const {
						currentStream: e,
						fetchPostForStream: t,
						sendEvent: s,
						visitStream: r
					} = this.props;
					e && (this.setState({
						videoCurrentTime: 0,
						videoTotalTime: 0
					}), r(e.post.id), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.startJobIfLiveOrPaused(), t(e.post.id), this.syncLocationWithCurrentStreamId(), s(Object(U.j)(e)), this.showOverlayAfterStreamSwitching())
				}
				showOverlayAfterStreamSwitching() {
					window.clearTimeout(this.overlayVisibilityTimeout), this.overlayVisibilityTimeout = window.setTimeout(() => this.setState({
						isOverlayVisible: !1
					}), C.o), this.setState({
						isOverlayVisible: !0
					})
				}
				syncLocationWithCurrentStreamId() {
					const {
						currentStream: e,
						isIntroInProgress: t,
						onNavigation: s,
						streamIdFromPath: r
					} = this.props;
					e && !t && Object(l.a)(e.post.id) !== r && s(e.post.id)
				}
				startJobIfLiveOrPaused() {
					const {
						currentStream: e,
						onStatsSubscribe: t,
						onHeartbeatSubscribe: s
					} = this.props;
					e && this.isCurrentStreamWatchable() && (t(e.post.id).then(e => this.unsubscribeStats = e), s(e.stream.stream_id).then(e => this.unsubscribeHeartbeat = e))
				}
			}
			const It = e => {
					let {
						onClick: t
					} = e;
					return n.a.createElement("button", {
						className: Et.a.closeButton,
						onClick: t,
						"aria-label": p.fbt._("close button", null, {
							hk: "2l5YIS"
						})
					}, n.a.createElement(H.a, {
						className: Et.a.closeIcon
					}))
				},
				yt = (e, t) => (e && e.post.id) !== (t && t.post.id);
			var jt = xt(Object(R.b)(ft)),
				Pt = s("./src/reddit/contexts/InsideOverlay.tsx"),
				Nt = s("./src/reddit/helpers/overlay/index.ts"),
				Lt = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				kt = s("./src/reddit/pages/PublicAccessNetwork/index.m.less"),
				_t = s.n(kt);
			const Mt = Object(i.c)({
					isEnabled: Lt.a,
					isIntroInProgress: G.b,
					isOnboardingModal: e => e.publicAccessNetwork.userSettings.shouldShowOnboardingModal && !0
				}),
				Vt = Object(a.b)(Mt, (e, t) => ({
					onOpenLoginModal: () => e(Object(d.e)()),
					onStreamByIdRequested: t => e(Object(l.g)(t)),
					updateLocation: t => e(Object(o.b)(Object(l.d)(t))),
					updateOverlayLocation: t => e(Object(Nt.a)(Object(l.d)(t)))
				}));
			class Tt extends n.a.Component {
				constructor(e) {
					super(e), this.onNavigation = this.onNavigation.bind(this)
				}
				componentDidMount() {
					const {
						match: e,
						onStreamByIdRequested: t,
						isEnabled: s
					} = this.props;
					s && e.params.streamId && t(e.params.streamId)
				}
				onNavigation(e) {
					this.props.isOverlay ? this.props.updateOverlayLocation(e) : this.props.updateLocation(e)
				}
				render() {
					const {
						isEnabled: e,
						isIntroInProgress: t,
						isOnboardingModal: s,
						isOverlay: r,
						location: a,
						match: o
					} = this.props;
					return e ? n.a.createElement("div", {
						className: Object(c.a)(_t.a.rpanContainer, {
							[_t.a.overlay]: r
						})
					}, n.a.createElement(jt, {
						isOverlay: !!r,
						location: a,
						onNavigation: this.onNavigation,
						streamIdFromPath: o.params.streamId
					}), s && !t && n.a.createElement(h, null)) : n.a.createElement(At, null)
				}
			}
			const At = () => n.a.createElement("div", {
				className: Object(c.a)(_t.a.rpanContainer, _t.a.forbiddenScreen)
			}, n.a.createElement("h2", null, n.a.createElement(X.c, null, "Not Found")));
			t.default = Vt(Object(R.b)(Object(Pt.b)(Tt)))
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "l", (function() {
				return C
			})), s.d(t, "h", (function() {
				return E
			})), s.d(t, "g", (function() {
				return x
			})), s.d(t, "c", (function() {
				return j
			})), s.d(t, "f", (function() {
				return P
			})), s.d(t, "k", (function() {
				return N
			})), s.d(t, "m", (function() {
				return L
			})), s.d(t, "j", (function() {
				return k
			})), s.d(t, "e", (function() {
				return _
			})), s.d(t, "a", (function() {
				return T
			})), s.d(t, "i", (function() {
				return A
			})), s.d(t, "b", (function() {
				return R
			})), s.d(t, "d", (function() {
				return D
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				i = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				l = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const m = e => e.publicAccessNetwork.reports.reported,
				u = e => e.publicAccessNetwork.history,
				h = e => e.publicAccessNetwork.history.cursor,
				p = e => e.publicAccessNetwork.history.visitOrder,
				b = e => e.publicAccessNetwork.hlsStreams,
				v = Object(r.a)(b, e => e.ended),
				g = Object(r.a)(b, e => e.removed),
				S = Object(r.a)(e => e.publicAccessNetwork.models, v, g, (e, t, s) => {
					const r = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							n = M(r, i.b.ENDED) ? i.b.ENDED : r,
							a = s.stream.vod_accessible;
						return n === r && !0 === a ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: n,
									vod_accessible: !0
								})
							})
						})
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							n = M(r, i.b.ENDED) ? i.b.ENDED : r,
							a = s.stream.vod_accessible;
						return n === r && !1 === a ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: n,
									vod_accessible: !1
								})
							})
						})
					}, r)
				}),
				C = (e, t) => {
					return S(e)[Object(o.e)(t)]
				},
				w = Object(r.a)(S, m, c.f, (e, t, s) => {
					const r = new Set([...t, ...s]);
					return Object.keys(e).filter(e => !r.has(e)).map(t => e[t]).filter(e => e.rank !== a.n).filter(e => !e.post.isHidden).filter(e => e.stream.state !== i.b.KILLED && e.stream.state !== i.b.PURGED).map(e => e.post.id)
				}),
				E = Object(r.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, S, w, (e, t, s) => {
					const r = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? r.slice(0, e) : r
				}),
				O = Object(r.a)(p, e => E(e, {}), (e, t) => {
					const s = new Set(e),
						r = t.filter(e => !s.has(e));
					if (r.length) return r[0]
				}),
				x = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, S, e => E(e, {}), u, (e, t, s, r) => {
					if (!s.length) return;
					const n = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						a = n.find(e => e.stream.state === i.b.IS_LIVE);
					if (a) return a.post.id;
					const o = n.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (r.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return o ? o.post.id : void 0
				}),
				f = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(o.e)(s) : void 0
				}, x, m, c.f, e => E(e, {}), (e, t, s, r, n) => !e || s.includes(e) || r.includes(e) ? t || n[0] : e),
				I = Object(r.a)(h, p, O, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				y = Object(r.a)(h, p, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				j = Object(n.a)(Object(r.a)(f, S, (e, t) => e ? t[e] : void 0)),
				P = Object(n.a)(Object(r.a)(I, S, (e, t) => e ? t[e] : void 0)),
				N = Object(n.a)(Object(r.a)(y, S, (e, t) => e ? t[e] : void 0)),
				L = Object(n.a)(Object(r.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, S, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => Object.assign({}, t[s], {
					preloadedPreviewUrl: e[s]
				})))),
				k = Object(r.a)((e, t) => {
					let {
						streamId: s
					} = t;
					return s
				}, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => t[e]),
				_ = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? C(e, s) : void 0
				}, e => !e || e.chat_disabled);

			function M(e, t) {
				const s = {
					[i.b.NOT_STARTED]: 0,
					[i.b.PUBLISHED]: 1,
					[i.b.IS_LIVE]: 2,
					[i.b.DISCONNECTED]: 2,
					[i.b.ENDED]: 3,
					[i.b.KILLED]: 4,
					[i.b.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const V = Object(r.a)(f, u, (e, t) => e && t.timestamps[e] || 0);
			var T;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(T || (T = {}));
			const A = Object(r.a)(f, S, l.b, (e, t, s) => {
					if (s) return T.INTRO;
					const r = e && t[e];
					if (!r) return T.UNAVAILABLE;
					const n = r.stream.state;
					return n === i.b.IS_LIVE || n === i.b.DISCONNECTED ? T.LIVE : n === i.b.ENDED && r.stream.vod_accessible ? T.VOD : T.UNAVAILABLE
				}),
				R = Object(r.a)(j, A, l.b, d.d, d.m, (e, t, s, r, n) => {
					if (e) return s ? r : t === T.LIVE || t === T.VOD ? e.stream.hls_url : n
				}),
				D = Object(r.a)(j, A, V, (e, t, s) => e ? t === T.LIVE ? e.broadcast_time : t === T.VOD && s < e.broadcast_time ? s : 0 : 0)
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const o = e => e.publicAccessNetwork.theaterSettings,
				i = Object(r.a)(o, a.k, (e, t) => t && !e.isIntroFinished),
				c = Object(r.a)(o, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + n.a > Date.now()
		}
	}
]);
//# sourceMappingURL=PublicAccessNetwork.e7b2082646f46f156832.js.map