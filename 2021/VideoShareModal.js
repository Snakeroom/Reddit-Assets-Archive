// https://www.redditstatic.com/desktop2x/VideoShareModal.0002131ad2f6964d17c6.js
// Retrieved at 3/2/2021, 12:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["VideoShareModal"], {
		"./src/reddit/actions/publicAccessNetwork/votes.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var a = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				r = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				o = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				c = s("./src/reddit/models/Vote/index.ts"),
				i = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				d = s("./src/reddit/selectors/user.ts"),
				m = s("./src/reddit/actions/login.ts");
			Object(a.a)(n.D);
			const u = (e, t) => async (s, a, {
				apiContext: n
			}) => {
				const u = a();
				if (Object(d.J)(u))
					if (Object(i.f)(u)) await Object(o.h)(n(), e, t);
					else {
						await Object(r.d)(e);
						const s = Object(l.l)(a(), e);
						null !== s.post.voteState && Object(c.e)(s.post.voteState) === t || await Object(o.h)(n(), e, t)
					}
				else s(Object(m.h)())
			}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx": function(e, t, s) {
			"use strict";
			var a = s("./src/config.ts"),
				n = s("./node_modules/lodash/memoize.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				c = s.n(o),
				i = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				d = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				m = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				u = s.n(m);
			const p = l.a.div("Userpic", u.a);
			t.a = r()(e => {
				const {
					userId: t
				} = e, {
					processingAvatarImageUrl: s
				} = a.a, n = (e => e.replace(i.zb.Account + "_", ""))(t), {
					avatar: r,
					color: o
				} = (e => {
					const t = d.length,
						s = parseInt(e, 36),
						a = s % 20 + 1,
						n = Math.floor(s / 20) % t;
					return {
						avatar: ("0" + a).slice(-2),
						color: d[n]
					}
				})(n), l = `${s}/avatar_default_${r}_${o}.png`;
				return c.a.createElement(p, {
					style: {
						backgroundImage: `url(${l})`,
						backgroundColor: `#${o}`
					}
				})
			})
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3SwKz63oDhqTWK_aG-xnXF",
				Userpic: "_1c_u99Y2cLg7hhjeq50Op6",
				userpic: "_1c_u99Y2cLg7hhjeq50Op6",
				TrashIcon: "_2xUH_6ZFDwVzDXthdBMEyN",
				trashIcon: "_2xUH_6ZFDwVzDXthdBMEyN",
				ProfileIcon: "_2OVsvDCTt2OzgIct4dAykk",
				profileIcon: "_2OVsvDCTt2OzgIct4dAykk"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModal.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				o = s.n(r),
				c = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/lib/addQueryParams/index.ts"),
				l = s("./src/lib/extractQueryParams/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				m = s("./src/lib/mapToObject/index.ts"),
				u = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				h = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.tsx"),
				v = s("./src/reddit/controls/RadioInput/index.tsx"),
				b = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				C = s("./src/reddit/controls/TextButton/index.tsx"),
				x = s("./src/reddit/layout/row/Inline/index.tsx"),
				f = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				w = s("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModalStyles.m.less"),
				E = s.n(w);
			const {
				fbt: N
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _ = d.a.input("TextBox", E.a), k = d.a.wrapped(u.h, "ModalHeader", E.a), I = d.a.wrapped(C.a, "TextButton", E.a), g = d.a.div("FooterRow", E.a), L = e => `${e<10?"0":""}${e}`;
			class O extends n.a.Component {
				constructor(e) {
					super(e), this.componentDidMount = () => {
						const e = Math.trunc((this.context.currentTime || 0) / 60),
							t = Math.trunc((this.context.currentTime || 0) % 60);
						this.setState({
							minutes: e,
							seconds: t,
							displayMinutes: L(e),
							displaySeconds: L(t),
							useTimestamp: !1
						})
					}, this.onTypeChange = e => {
						this.setState({
							useTimestamp: "true" === e
						})
					}, this.onMinutesInputChange = e => {
						const t = parseInt(e.currentTarget.value) || 0,
							s = Math.trunc(this.context.totalTime / 60);
						t >= 0 && t <= s && this.setState({
							minutes: t,
							displayMinutes: 0 === t ? "" : t.toString()
						})
					}, this.onSecondsInputChange = e => {
						const t = parseInt(e.currentTarget.value.substr(-2)) || 0,
							s = Math.trunc(this.context.totalTime % 60),
							a = Math.trunc(this.context.totalTime / 60);
						t >= 0 && t < 60 && !(this.state.minutes === a && t > s) && this.setState({
							seconds: t,
							displaySeconds: 0 === t ? "" : `0${t}`.substr(-2)
						})
					}, this.onSecondsInputBlur = () => {
						this.setState({
							displaySeconds: L(this.state.seconds)
						})
					}, this.onMinutesInputBlur = () => {
						this.setState({
							displayMinutes: L(this.state.minutes)
						})
					}, this.handleClickCopy = () => {
						this.props.onClose(this.url)
					}, this.handleClickClose = () => {
						this.props.onClose()
					}, this.state = {
						minutes: 0,
						seconds: 0,
						displayMinutes: "00",
						displaySeconds: "00",
						useTimestamp: !1
					}
				}
				get baseUrl() {
					const {
						protocol: e,
						host: t,
						pathname: s
					} = o.a.parse(this.props.url);
					return `${e}//${t}${s}`
				}
				get timestamp() {
					return 60 * this.state.minutes + this.state.seconds || 0
				}
				get displayUrl() {
					return this.state.useTimestamp ? Object(i.a)(this.baseUrl, {
						ts: this.timestamp
					}) : this.baseUrl
				}
				get url() {
					return this.state.useTimestamp ? Object(i.a)(this.baseUrl, {
						ts: this.timestamp,
						...Object(m.a)(Object(l.a)(this.props.url))
					}) : this.props.url
				}
				render() {
					return n.a.createElement(u.d, null, n.a.createElement(k, null, n.a.createElement(f.a, null, n.a.createElement(u.p, null, N._("Share", null, {
						hk: "1jIG3I"
					})), n.a.createElement(I, {
						onClick: this.handleClickClose
					}, n.a.createElement(u.b, null)))), n.a.createElement(u.k, null, n.a.createElement(x.a, null, n.a.createElement(_, {
						disabled: !0,
						value: this.displayUrl
					}), n.a.createElement(I, {
						onClick: this.handleClickCopy
					}, N._("Copy", null, {
						hk: "2bETeK"
					})))), n.a.createElement(g, null, n.a.createElement(v.a, {
						name: "share-link",
						onChange: this.onTypeChange,
						value: String(this.state.useTimestamp)
					}, n.a.createElement(b.a, {
						showButton: !0,
						value: "false",
						className: E.a.radioOption
					}, this.context.isLive ? n.a.createElement(n.a.Fragment, null, N._("Share", null, {
						hk: "3LcrOx"
					}), n.a.createElement("span", {
						className: E.a.liveStatus
					}, n.a.createElement(h.g, null))) : N._("Share from beginning", null, {
						hk: "4rKJB"
					})), n.a.createElement(b.a, {
						showButton: !0,
						value: "true",
						className: E.a.radioOption
					}, N._("Start from", null, {
						hk: "4lQjLy"
					}), n.a.createElement("div", {
						className: E.a.timeInputWrapper
					}, n.a.createElement("input", {
						className: E.a.minutesTimeInput,
						onChange: this.onMinutesInputChange,
						onBlur: this.onMinutesInputBlur,
						type: "text",
						maxLength: 4,
						size: 4,
						value: this.state.displayMinutes,
						placeholder: "00"
					}), ":", n.a.createElement("input", {
						className: E.a.secondsTimeInput,
						onChange: this.onSecondsInputChange,
						onBlur: this.onSecondsInputBlur,
						type: "text",
						maxLength: 3,
						size: 2,
						value: this.state.displaySeconds,
						placeholder: "00"
					}))))))
				}
			}
			O.contextType = p.a, t.default = Object(c.a)(O)
		},
		"./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModalStyles.m.less": function(e, t, s) {
			e.exports = {
				TextBox: "NQTi34lXQj3KQwNahM55V",
				textBox: "NQTi34lXQj3KQwNahM55V",
				ModalHeader: "_2nMk_ghAxbCRYxB673TguC",
				modalHeader: "_2nMk_ghAxbCRYxB673TguC",
				TextButton: "qG6sJYgtP-NJ29PHNvf7k",
				textButton: "qG6sJYgtP-NJ29PHNvf7k",
				FooterRow: "_1eio1wCjLYTQcEi05o3Nt-",
				footerRow: "_1eio1wCjLYTQcEi05o3Nt-",
				radioOption: "_3dl19ZqUXki6QvqmOh1Od7",
				radioOn: "_2EUcT-MveSjYAKOpXq5X7g",
				minutesTimeInput: "_2b4MwgRgq8UqepSf5zPM7p",
				timeInput: "_35_c2zmPhyUU9disN4msAN",
				secondsTimeInput: "_3MBOUkWBSmuK-HtMm_cDz7",
				liveStatus: "_178Bx6qfdrWqUuTLwu7OG_",
				timeInputWrapper: "_3KqE5xyPLta2yz3DVzHmar"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/Overlay/Buttons.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return k
			})), s.d(t, "c", (function() {
				return I
			})), s.d(t, "d", (function() {
				return L
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "g", (function() {
				return j
			})), s.d(t, "h", (function() {
				return y
			})), s.d(t, "f", (function() {
				return S
			})), s.d(t, "a", (function() {
				return A
			}));
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				c = s("./src/lib/opener/index.ts"),
				i = s("./src/reddit/components/OverflowMenu/index.tsx"),
				l = s("./src/reddit/controls/Dropdown/Row.tsx"),
				d = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				m = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				u = s("./src/reddit/icons/fonts/Share/index.tsx"),
				p = s("./src/reddit/icons/svgs/Crosspost/index.tsx"),
				h = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				v = s("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				b = s("./src/reddit/icons/svgs/Report/index.tsx"),
				C = s("./src/reddit/icons/svgs/Rules/index.tsx"),
				x = s("./src/reddit/icons/svgs/VideoMute/index.tsx"),
				f = s("./src/reddit/icons/svgs/VideoReplay/index.tsx"),
				w = s("./src/reddit/icons/svgs/VideoShare/index.tsx"),
				E = s("./src/reddit/icons/svgs/VideoVolume/index.tsx"),
				N = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/index.m.less"),
				_ = s.n(N);
			const k = ({
					onClick: e
				}) => r.a.createElement("button", {
					className: _.a.shareButton,
					onClick: e,
					"aria-label": a.fbt._("share video", null, {
						hk: "2e71ai"
					}),
					value: "share"
				}, r.a.createElement(u.a, {
					className: _.a.menuIcon
				})),
				I = ({
					isMuted: e,
					onToggle: t
				}) => r.a.createElement("button", {
					className: _.a.muteButton,
					onClick: t,
					"aria-label": a.fbt._("mute video", null, {
						hk: "Enspe"
					}),
					value: "mute"
				}, e ? r.a.createElement(x.a, {
					className: _.a.volumeIcon
				}) : r.a.createElement(E.a, {
					className: _.a.volumeIcon
				})),
				g = o.a.wrapped(m.a, "menuIcon", _.a),
				L = "rpan-overlay-menu",
				O = ({
					onClick: e,
					onHideClick: t,
					onReportClick: s
				}) => r.a.createElement(i.b, {
					className: _.a.menuButton,
					defaultButtonOutline: !0,
					dropdownId: L,
					icon: r.a.createElement(g, null),
					onClick: e
				}, r.a.createElement(l.b, {
					className: _.a.overflowItem,
					displayText: a.fbt._("View rules", null, {
						hk: "4lTvzy"
					}),
					iconWrapperClassName: _.a.overflowItemIconWrapper,
					key: `${L}-rules`,
					onClick: () => Object(c.d)(d.S, c.c.BLANK)
				}, r.a.createElement(C.a, {
					className: _.a.overflowItemIcon
				})), r.a.createElement(l.b, {
					className: _.a.overflowItem,
					displayText: a.fbt._("Visit RPAN community", null, {
						hk: "3KZliI"
					}),
					iconWrapperClassName: _.a.overflowItemIconWrapper,
					key: `${L}-community`,
					onClick: () => Object(c.d)(d.Q, c.c.BLANK)
				}, r.a.createElement(v.c, {
					className: _.a.overflowItemIcon
				})), r.a.createElement(l.b, {
					className: _.a.overflowItem,
					displayText: a.fbt._("Report", null, {
						hk: "4oVcnd"
					}),
					iconWrapperClassName: _.a.overflowItemIconWrapper,
					key: `${L}-report`,
					onClick: s
				}, r.a.createElement(b.a, {
					className: _.a.overflowItemIcon
				})), r.a.createElement(l.b, {
					className: _.a.overflowItem,
					displayText: a.fbt._("Hide", null, {
						hk: "1qXTIB"
					}),
					iconWrapperClassName: _.a.overflowItemIconWrapper,
					key: `${L}-hide`,
					onClick: t
				}, r.a.createElement(h.a, {
					className: _.a.overflowItemIcon
				}))),
				j = ({
					onClick: e
				}) => r.a.createElement("button", {
					className: _.a.promptButton,
					onClick: e
				}, r.a.createElement(f.a, null), r.a.createElement("span", null, a.fbt._("Replay Video", null, {
					hk: "1iD2Wj"
				}))),
				y = ({
					onClick: e
				}) => r.a.createElement("button", {
					className: _.a.promptButton,
					onClick: e
				}, r.a.createElement(w.a, null), r.a.createElement("span", null, a.fbt._("Share Video", null, {
					hk: "FYgQy"
				}))),
				S = ({
					onClick: e
				}) => r.a.createElement("button", {
					className: _.a.promptButton,
					onClick: e
				}, r.a.createElement(p.a, {
					className: _.a.crosspostIcon
				}), r.a.createElement("span", null, a.fbt._("Crosspost", null, {
					hk: "gORNr"
				}))),
				A = ({
					onClick: e
				}) => r.a.createElement("button", {
					className: `${_.a.promptButton} ${_.a.awardButton}`,
					onClick: e
				}, r.a.createElement("span", null, a.fbt._("Award Now", null, {
					hk: "STk0L"
				})))
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/Overlay/index.m.less": function(e, t, s) {
			e.exports = {
				overlay: "_3w_dLAoZ36_fPFvFr73Twc",
				visible: "_3xefvVa9iQxtBKfDrIQHK5",
				overlayCenter: "_38XOKvg5Aum-pHj1zsk3Gh",
				muteButton: "_1loeDj0ZNN1lkR8TbCnX5L",
				overlayTitle: "_1NnuLtMElnw61J8beBBk1b",
				overlayTop: "t59TT9rQbiEQkmrsaaYfs",
				menuContainer: "_27178MBeTCoso3gtVeQoIp",
				titleContainer: "S05_Ivx6gzKZmSRXiZa2g",
				menuButton: "s36uqi4axSXHQMgaoux_n",
				shareButton: "_5sKR5rHQgiTK5_-gvLzJ9",
				reportIcon: "_3xY0AQnECn_6gvYN_s0gcK",
				menuIcon: "_1xrQmhCkwYzatHLEBV1tG-",
				videoTitle: "_17PXlsAvhmFm8yKmnpboBI",
				RecordedLabel: "_1YoUYS0LQtaRkt6Je2wbSW",
				recordedLabel: "_1YoUYS0LQtaRkt6Je2wbSW",
				volumeIcon: "_39-jgt3SIm_nk5n7j3QEfp",
				overlayBottom: "_1ZAJ7W6IsblPMAseqf_W_1",
				scrubberBar: "_3i-PRgw3NW9Db-1qAmdcMh",
				intro: "_1CsY8N-fPRu-iQN8ocPZCD",
				prompt: "_1KVVoPIOqNFBVgfKKhI6IJ",
				overflowItemIconWrapper: "_1B5cn8nAxfnEGrx_5yO_Pn",
				overflowItemShareIconWrapper: "_1yj1zqZ3kkITELqdJJu_rL",
				overflowItemIcon: "_2rs0m2DYBYodAJnsjGNR1r",
				promptButtonSet: "_1Iw3svNrJVGVZG8lv_0RkZ",
				promptButton: "_2k4XxsTat5YM_3MLe7Qvlr",
				awardButton: "xXntZktZERg_h5_1RbTAJ",
				awardOverlaySpectacle: "_2KvsuLKnVtlqMTrKCouaF8",
				crosspostIcon: "_3K89LyvZmnoHxqieScyV0A"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.m.less": function(e, t, s) {
			e.exports = {
				overlay: "_1EF49Psgos8vYl_v7Tflby",
				prompt: "_3q-CHmWq_WQdcLlNanmTlw",
				overlayTopLeft: "_3_ut3gTYu6aZliMETvG4qO",
				overlayTopRight: "_2adYh4QIiecMkKiax2nLBy",
				overlayTop: "-sfg01vEb_tZ17EEtV_1n",
				overlayBottom: "_2Pa8FxBcwFuR-eB88yFeb5",
				meta: "_37KNxMPFQ_aTyagqFCGM8f",
				visible: "MyDXLhLhWFWpDWQxwob4n",
				broadcastStatus: "RkAyxHZcfmYratKiIe6F1",
				subredditInfo: "hWK-1DjIzUQro_Jl7EuW7",
				endBroadcastItem: "_1ZSrZdjsokjz4UfFGhHFJK",
				endBroadcastIcon: "Nqg4E3olZnnFBq1hDMd1l",
				live: "_2MrLGchkK1FzIihZNcSErL",
				subreddit: "_2HJ6_jH0Qxso0BklDa4MY8",
				dropdownLabel: "_2EdFq4jwAX3s-k2ywmNUdA",
				dropdownRow: "_2TUKPRdgdRLBjd4A65bAv8",
				title: "_2BOjTR_ZfK356j4GUU_uP0",
				watchersCount: "_3qmsTjPgq3yEn2MRAvyKWV",
				controls: "_3Ve6YrAPjNqahWzatg2r-G",
				actionButton: "_3ljeo8vtq9QnPE3mBHJzLA",
				checkmarkIcon: "_1AD2nB9gj2sFeuP9eqLTJm",
				joinButton: "M1wl6M6YPUIzVkVKZ7RMx",
				plusIcon: "vnhfQ_Oj9V7tGTplUaavs",
				joinText: "lNpXHxQlf6Kotiochq5Bn",
				actionIcon: "_1m2Qj2Gr-_ZW8QCWjX1c_-",
				shareButton: "_3aLywHN9oVLU-kDGYrO_9Y",
				shareIcon: "_1FiOf9-VyeRBZ03fpzjZzd",
				menuButton: "_2Da-2PvZbZEChxL9motRgr",
				menuIcon: "_1cP74uG4uBeJE6MSnql_Vl",
				votePanel: "_3ARoHXimg9SEIdTS36iYA7",
				voteButton: "_3zRF3x1PVktfO77yiL70dM",
				voteIcon: "zV_29gkXZ2wlev53b5UKw",
				upVoteButton: "_3JZvxzBdRrDL22bOmPikWG",
				voted: "_2mS9j06DUO6bQJiPNNWTYq",
				downVoteButton: "LCSHLUW784jIQ0h3m1oAH",
				score: "_31PjwlFA4843J48jMG4YzK",
				hidden: "_3SFmtJd2uzRfmIgPvi-Yid",
				promptButtonSet: "_2-JNYG0bcwDm13ZkpVuW99",
				awardPromptWrapper: "_1J2SNfou9P_BKlDY42rZgE",
				awardPromptLabel: "_3EmfXMw_zUNf46UsW8EyGZ",
				overflowItem: "_3fblWdGk58C7B4Z-xzpJvc",
				overflowItemIcon: "_3ewXmdMvnO7M4rmOI_4slp",
				overflowItemIconWrapper: "_2SxcFwxbNeVOto1h-N6Xk8",
				shareMenuOverflowItem: "_2dljfU_juYhFbwLAeZ0ygH",
				headerItem: "_1pvWMzMb_uz-A-2Si3SoIl",
				subscribeToProfileButton: "DkFs_kVT8lE3xhsCfwKM_",
				subscribeToProfileAvatar: "_zREeeCx3pI1sg-PeDRDV",
				snoovatarHeadshot: "_1D275qlcFd5Qai7NjYppWD",
				subscribeToProfileStatus: "ya7YWsKVy6B_6Yq6fJcgc",
				isSubscribed: "FJ0cySrU3DrwLTyKRy-Rk"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return Z
			})), s.d(t, "h", (function() {
				return K
			})), s.d(t, "g", (function() {
				return q
			})), s.d(t, "p", (function() {
				return z
			})), s.d(t, "f", (function() {
				return Y
			})), s.d(t, "l", (function() {
				return Q
			})), s.d(t, "n", (function() {
				return J
			})), s.d(t, "r", (function() {
				return G
			})), s.d(t, "j", (function() {
				return ee
			})), s.d(t, "k", (function() {
				return te
			})), s.d(t, "i", (function() {
				return re
			})), s.d(t, "q", (function() {
				return oe
			})), s.d(t, "d", (function() {
				return me
			})), s.d(t, "o", (function() {
				return ue
			})), s.d(t, "b", (function() {
				return pe
			})), s.d(t, "a", (function() {
				return he
			})), s.d(t, "e", (function() {
				return ve
			})), s.d(t, "s", (function() {
				return be
			})), s.d(t, "m", (function() {
				return Ce
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/opener/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				d = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				m = s("./src/reddit/actions/publicAccessNetwork/votes.ts"),
				u = s("./src/reddit/actions/subscription/index.ts"),
				p = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx"),
				h = s("./src/reddit/components/OverflowMenu/index.tsx"),
				v = s("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				C = s("./src/reddit/controls/Dropdown/Row.tsx"),
				x = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				f = s("./src/reddit/helpers/getSubredditUrl/index.ts"),
				w = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				E = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				N = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Share/index.tsx"),
				k = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				I = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				g = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				L = s("./src/reddit/icons/svgs/Crosspost/index.tsx"),
				O = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				j = s("./src/reddit/icons/svgs/Link/index.tsx"),
				y = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				S = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				A = s("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				B = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				M = s("./src/reddit/icons/svgs/Report/index.tsx"),
				T = s("./src/reddit/icons/svgs/Rules/index.tsx"),
				V = s("./src/reddit/icons/svgs/Unlock/index.tsx"),
				D = s("./src/reddit/models/Vote/index.ts"),
				F = s("./src/reddit/selectors/subreddit.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				R = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/Buttons.tsx"),
				U = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.m.less"),
				W = s.n(U);
			const {
				fbt: H
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Z = ({
				children: e
			}) => n.a.createElement("div", {
				className: W.a.broadcastStatus
			}, e), K = ({
				onClick: e
			}) => n.a.createElement("button", {
				onClick: e
			}, n.a.createElement(q, null)), q = () => H._("{=Live}", [H._param("=Live", n.a.createElement("span", {
				className: W.a.live
			}, H._("Live", null, {
				hk: "8x90I"
			})))], {
				hk: "3ZBbO0"
			}), z = () => H._("Recorded live", null, {
				hk: "2seH5c"
			}), Y = ({
				onSubscribe: e,
				isSubscribed: t
			}) => {
				const [s, r] = Object(a.useState)(!1);
				return Object(a.useEffect)(() => {
					const e = setTimeout(() => {
						r(!1)
					}, 3e3);
					return () => clearTimeout(e)
				}, [s]), t ? s ? n.a.createElement(I.a, {
					className: W.a.checkmarkIcon
				}) : null : n.a.createElement("button", {
					onClick: () => {
						r(!0), e()
					},
					className: W.a.joinButton
				}, n.a.createElement(S.a, {
					className: W.a.plusIcon
				}), n.a.createElement("span", {
					className: W.a.joinText
				}, H._("Join", null, {
					hk: "3n0zBz"
				})))
			}, Q = ({
				onSelect: e,
				related: t,
				subreddit: s,
				subreddits: a
			}) => {
				let r = "";
				r = "home" === t ? "All" : "r/popular" === t ? "r/popular" : s || "All";
				const o = a.filter(e => e.prefixedName !== r),
					c = 30 + 35 * o.length;
				return n.a.createElement(h.b, {
					dropdownId: "rpan-recommended-viewer-subreddits-dropdown",
					icon: n.a.createElement("span", {
						className: W.a.subreddit
					}, s || "RPAN"),
					style: {
						maxHeight: `${c}px`,
						overflowY: "auto",
						bottom: "0px"
					},
					isFixed: !0
				}, n.a.createElement("div", {
					className: W.a.dropdownLabel
				}, H._("Pick a Community", null, {
					hk: "4AfDwd"
				})), o.map(t => n.a.createElement(C.b, {
					className: W.a.dropdownRow,
					displayText: t.prefixedName,
					key: `rpan-recommended-viewer-subreddits-dropdown-${t.prefixedName}`,
					onClick: () => e(t)
				})))
			}, J = ({
				text: e
			}) => n.a.createElement("h1", {
				className: W.a.title
			}, e), G = ({
				broadcast: e,
				live: t
			}) => n.a.createElement("div", {
				className: W.a.watchersCount
			}, t ? n.a.createElement($, {
				count: Math.max(1, e.continuous_watchers)
			}) : n.a.createElement(X, {
				count: Math.max(1, e.unique_watchers)
			})), $ = ({
				count: e
			}) => H._({
				"*": "{number of watchers} watchers",
				_1: "1 watcher"
			}, [H._plural(e, "number of watchers", Object(l.b)(e, {
				displayFull: !0
			}))], {
				hk: "3F0Nj0"
			}), X = ({
				count: e
			}) => H._({
				"*": "{number of views} views",
				_1: "1 view"
			}, [H._plural(e, "number of views", Object(l.b)(e, {
				displayFull: !0
			}))], {
				hk: "tSTjT"
			}), ee = "rpan-overlay-share-menu", te = ({
				onClickCrosspost: e,
				onClickVideoShare: t,
				onClickShare: s
			}) => n.a.createElement(h.b, {
				className: W.a.menuButton,
				defaultButtonOutline: !0,
				dropdownId: ee,
				onClick: s,
				icon: n.a.createElement(_.a, null)
			}, n.a.createElement(C.b, {
				className: W.a.menuOverflowItem,
				displayText: H._("Copy Link", null, {
					hk: "2oo038"
				}),
				iconWrapperClassName: W.a.overflowItemShareIconWrapper,
				key: `${ne}-share`,
				onClick: t
			}, n.a.createElement(j.a, {
				className: W.a.overflowItemIcon
			})), n.a.createElement(C.b, {
				className: W.a.menuOverflowItem,
				displayText: H._("Crosspost", null, {
					hk: "QSd6Z"
				}),
				iconWrapperClassName: W.a.overflowItemShareIconWrapper,
				key: `${ne}-crosspost`,
				onClick: e
			}, n.a.createElement(L.a, {
				className: W.a.overflowItemIcon
			}))), se = c.a.wrapped(N.a, "menuIcon", W.a), ae = e => {
				let t = 186;
				if (e) {
					t += 74 + 39
				}
				return t
			}, ne = "rpan-overlay-menu", re = ({
				onClick: e,
				onHideClick: t,
				onReportClick: s,
				onToggleLockClick: a,
				isCommentsLocked: r,
				hasModeratorPermissions: o,
				onEndBroadcastClick: c,
				onRpanStudioClick: l,
				subreddit: m
			}) => n.a.createElement(h.b, {
				className: W.a.menuButton,
				defaultButtonOutline: !0,
				dropdownId: ne,
				icon: n.a.createElement(se, null),
				onClick: e,
				style: {
					maxHeight: `${ae(o)}px`,
					overflowY: "auto",
					bottom: "0px"
				}
			}, n.a.createElement(C.b, {
				className: W.a.overflowItem,
				displayText: H._("View rules", null, {
					hk: "haY6r"
				}),
				iconWrapperClassName: W.a.overflowItemIconWrapper,
				key: `${ne}-rules`,
				onClick: () => Object(i.d)(d.S, i.c.BLANK)
			}, n.a.createElement(T.a, {
				className: W.a.overflowItemIcon
			})), n.a.createElement(C.b, {
				className: W.a.overflowItem,
				displayText: H._("Stream from desktop", null, {
					hk: "4dOdik"
				}),
				iconWrapperClassName: W.a.overflowItemIconWrapper,
				key: `${ne}-rpanstudio`,
				onClick: l
			}, n.a.createElement(A.b, {
				className: W.a.overflowItemIcon
			})), n.a.createElement(C.b, {
				className: W.a.overflowItem,
				displayText: H._("Visit community", null, {
					hk: "2KViLk"
				}),
				iconWrapperClassName: W.a.overflowItemIconWrapper,
				key: `${ne}-community`,
				onClick: () => {
					Object(i.d)(Object(f.a)(m), i.c.BLANK)
				}
			}, (e => {
				const t = e && Object(x.a)({
					subreddit: e
				});
				return t ? n.a.createElement("img", {
					className: W.a.overflowItemIcon,
					style: {
						borderRadius: "16px",
						height: "16px",
						width: "16px"
					},
					src: t
				}) : n.a.createElement(g.a, {
					className: W.a.overflowItemIcon,
					style: {
						borderRadius: "16px",
						height: "16px",
						width: "16px"
					}
				})
			})(m)), n.a.createElement(C.b, {
				className: W.a.overflowItem,
				displayText: H._("Report", null, {
					hk: "4oVcnd"
				}),
				iconWrapperClassName: W.a.overflowItemIconWrapper,
				key: `${ne}-report`,
				onClick: s
			}, n.a.createElement(M.a, {
				className: W.a.overflowItemIcon
			})), n.a.createElement(C.b, {
				className: W.a.overflowItem,
				displayText: H._("Hide", null, {
					hk: "15vs9C"
				}),
				iconWrapperClassName: W.a.overflowItemIconWrapper,
				key: `${ne}-hide`,
				onClick: t
			}, n.a.createElement(O.a, {
				className: W.a.overflowItemIcon
			})), o && n.a.createElement(n.a.Fragment, null, n.a.createElement(C.b, {
				className: W.a.headerItem,
				displayText: H._("Mod Actions", null, {
					hk: "19zCiw"
				}),
				key: `${ne}-modaction`,
				onClick: () => {}
			}), n.a.createElement(C.b, {
				className: W.a.overflowItem,
				displayText: r ? H._("Unlock comments", null, {
					hk: "Btg6R"
				}) : H._("Lock comments", null, {
					hk: "3Ew6q9"
				}),
				iconWrapperClassName: W.a.overflowItemIconWrapper,
				key: `${ne}-lock`,
				onClick: a
			}, r ? n.a.createElement(V.a, {
				className: W.a.overflowItemIcon
			}) : n.a.createElement(y.a, {
				className: W.a.overflowItemIcon
			})), n.a.createElement(C.b, {
				className: W.a.endBroadcastItem,
				displayText: H._("Remove broadcast", null, {
					hk: "3GaDuI"
				}),
				iconWrapperClassName: W.a.overflowItemIconWrapper,
				key: `${ne}-end`,
				onClick: c
			}, n.a.createElement(B.a, {
				className: W.a.endBroadcastIcon
			})))), oe = Object(r.b)(null, e => ({
				vote: (t, s) => e(Object(m.a)(t, s))
			}))(class extends a.Component {
				constructor(e) {
					super(e), this.handleUpVote = () => {
						const e = this.toggleVoteState(D.a.upvoted);
						this.vote(e)
					}, this.handleDownVote = () => {
						const e = this.toggleVoteState(D.a.downvoted);
						this.vote(e)
					}, this.state = {
						voteStates: new Map
					}
				}
				get voteState() {
					return this.state.voteStates.get(this.props.broadcast.post.id)
				}
				get score() {
					const {
						score: e,
						voteState: t
					} = this.props.broadcast.post;
					return null == e ? null : t && void 0 !== this.voteState ? e - Object(D.e)(t) + this.voteState : e
				}
				componentDidMount() {
					this.setVoteStateFromBroadcastProp()
				}
				componentDidUpdate(e) {
					const {
						id: t
					} = this.props.broadcast.post, s = t !== e.broadcast.post.id, a = this.state.voteStates.has(t);
					s && !a && this.setVoteStateFromBroadcastProp()
				}
				render() {
					const e = this.voteState === D.a.upvoted,
						t = this.voteState === D.a.downvoted;
					return n.a.createElement("div", {
						className: W.a.votePanel
					}, n.a.createElement(ce, {
						onClick: this.handleUpVote,
						voted: e
					}), null !== this.score ? n.a.createElement(le, {
						score: this.score
					}) : null, n.a.createElement(ie, {
						onClick: this.handleDownVote,
						voted: t
					}))
				}
				setVoteStateFromBroadcastProp() {
					const {
						id: e,
						voteState: t
					} = this.props.broadcast.post;
					this.setVoteState(e, Object(D.e)(t))
				}
				setVoteState(e, t) {
					const {
						voteStates: s
					} = this.state;
					if (!s.has(e) || s.get(e) !== t) {
						const a = new Map(s);
						a.set(e, t), this.setState({
							voteStates: a
						})
					}
				}
				toggleVoteState(e) {
					return e === this.voteState ? D.a.notVoted : e
				}
				vote(e) {
					const {
						broadcast: t,
						onUpvote: s,
						onDownvote: a
					} = this.props, {
						id: n
					} = t.post;
					this.setVoteState(n, e), this.props.vote(n, e), e === D.a.upvoted ? s() : e === D.a.downvoted && a()
				}
			}), ce = ({
				onClick: e,
				voted: t
			}) => n.a.createElement("button", {
				className: Object(o.a)(W.a.voteButton, W.a.upVoteButton, {
					[W.a.voted]: t
				}),
				onClick: e,
				value: "upvote",
				"aria-label": H._("Upvote", null, {
					hk: "Ufd6r"
				})
			}, n.a.createElement(k.b, {
				className: W.a.voteIcon
			})), ie = ({
				onClick: e,
				voted: t
			}) => n.a.createElement("button", {
				className: Object(o.a)(W.a.voteButton, W.a.downVoteButton, {
					[W.a.voted]: t
				}),
				onClick: e,
				value: "downvote",
				"aria-label": H._("Downvote", null, {
					hk: "ZDRA3"
				})
			}, n.a.createElement(E.b, {
				className: W.a.voteIcon
			})), le = ({
				score: e
			}) => n.a.createElement("div", {
				className: W.a.score
			}, Object(l.b)(e)), de = ({
				children: e
			}) => n.a.createElement("div", {
				className: W.a.prompt
			}, e), me = () => n.a.createElement(de, null, H._("Connection issues", null, {
				hk: "hIrnJ"
			})), ue = () => n.a.createElement(de, null, H._("Tuning...", null, {
				hk: "3dG7Ks"
			})), pe = () => n.a.createElement(de, null, H._("Broadcast paused", null, {
				hk: "jxvku"
			})), he = ({
				onClickCrosspost: e,
				onClickReplay: t,
				onClickShare: s
			}) => n.a.createElement(de, null, n.a.createElement("div", {
				className: W.a.promptButtonSet
			}, n.a.createElement(R.g, {
				onClick: t
			}), n.a.createElement(R.h, {
				onClick: s
			}), n.a.createElement(R.f, {
				onClick: e
			}))), ve = ({
				onClickAward: e
			}) => n.a.createElement(de, null, n.a.createElement("div", {
				className: W.a.awardPromptWrapper
			}, n.a.createElement("div", {
				className: W.a.awardPromptLabel
			}, H._("Award this broadcast to give it more airtime", null, {
				hk: "20jmEz"
			})), n.a.createElement(R.a, {
				onClick: e
			}))), be = e => {
				if (!e) return !1;
				const {
					id: t,
					name: s
				} = e;
				return !(!t || !s || "string" != typeof t || "string" != typeof s)
			}, Ce = ({
				profile: e,
				currentStream: t,
				onSubscriptionChange: s
			}) => {
				const {
					name: a
				} = e, r = xe(a), o = fe(a, !r), c = r ? H._("Unfollow u/{name}", [H._param("name", a)], {
					hk: "2n0wqa"
				}) : H._("Follow u/{name}", [H._param("name", a)], {
					hk: "20X8Bw"
				});
				return n.a.createElement("button", {
					className: W.a.subscribeToProfileButton,
					onClick: () => {
						s(!r), o()
					},
					title: c
				}, n.a.createElement(we, {
					profile: e
				}), n.a.createElement(Ee, {
					isSubscribed: r
				}))
			}, xe = e => Object(r.e)(t => Object(F.fb)(t, {
				identifier: {
					name: e,
					type: b.a.PROFILE
				}
			})), fe = (e, t) => {
				const s = Object(r.d)();
				return Object(a.useCallback)(() => {
					s(Object(u.d)([{
						name: e,
						type: b.a.PROFILE
					}], t))
				}, [s, e, t])
			}, we = ({
				profile: e
			}) => {
				const {
					id: t,
					name: s
				} = e, a = Object(r.e)(e => Object(P.lb)(e, {
					userName: s
				})), c = ke(a), i = c && Object(w.a)(a.accountIcon);
				return n.a.createElement("div", {
					className: Object(o.a)(W.a.subscribeToProfileAvatar, {
						[W.a.snoovatarHeadshot]: i
					})
				}, a ? c ? i ? n.a.createElement(v.a, {
					headshot: a.accountIcon
				}) : n.a.createElement("img", {
					src: a.accountIcon
				}) : n.a.createElement(p.a, {
					userId: t
				}) : null)
			}, Ee = ({
				isSubscribed: e
			}) => n.a.createElement("div", {
				className: Object(o.a)(W.a.subscribeToProfileStatus, {
					[W.a.isSubscribed]: e
				})
			}, e ? n.a.createElement(Ne, null) : n.a.createElement(_e, null)), Ne = () => n.a.createElement("svg", {
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M17.7072 5.69337L16.3083 4.29337C16.1203 4.10537 15.8662 4.00037 15.6012 4.00037C15.3352 4.00037 15.0812 4.10537 14.8942 4.29337L7.90025 11.2864L5.10725 8.49337C4.71725 8.10237 4.08425 8.10237 3.69325 8.49337L2.29325 9.89337C1.90225 10.2844 1.90225 10.9174 2.29325 11.3074L7.19325 16.2074C7.38925 16.4024 7.64425 16.5004 7.90025 16.5004C8.15625 16.5004 8.41225 16.4024 8.60725 16.2074L17.7072 7.10737C18.0982 6.71637 18.0982 6.08437 17.7072 5.69337"
			})), _e = () => n.a.createElement("svg", {
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M12.8,6.4 L9.6,6.4 L9.6,3.2 C9.6,2.7576 9.2424,2.4 8.8,2.4 L7.2,2.4 C6.7576,2.4 6.4,2.7576 6.4,3.2 L6.4,6.4 L3.2,6.4 C2.7584,6.4 2.4,6.7576 2.4,7.2 L2.4,8.8 C2.4,9.2424 2.7584,9.6 3.2,9.6 L6.4,9.6 L6.4,12.8 C6.4,13.2424 6.7576,13.6 7.2,13.6 L8.8,13.6 C9.2424,13.6 9.6,13.2424 9.6,12.8 L9.6,9.6 L12.8,9.6 C13.2424,9.6 13.6,9.2424 13.6,8.8 L13.6,7.2 C13.6,6.7576 13.2424,6.4 12.8,6.4"
			})), ke = e => {
				const t = Object(r.e)(P.i),
					s = Object(r.e)(P.B),
					a = Object(r.e)(P.bb);
				return !!e && (!!e.accountIcon && (!!t && (t.id === e.id || (!e.isNSFW || !!a && !s))))
			}
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, s) {
			"use strict";
			var a = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(a.a)(e).banner.iconImage ? String(Object(a.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/icons/fonts/Downvote/index.m.less": function(e, t, s) {
			e.exports = {
				compactDownvote: "_2GCoZTwJW7199HSwNZwlHk",
				compactDownvoteWrapper: "jR747Vd1NbfaLusf5bHre",
				downvote: "ZyxIIl4FP5gHGrJDzNpUC",
				downvoteWrapper: "_1iKd82bq_nqObFvSH1iC_Q"
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/Downvote/index.m.less"),
				i = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => n.a.createElement("i", {
				className: Object(r.a)(Object(o.b)("downvote", e.isFilled), i.a.downvote, e.className)
			});
			t.b = ({
				compact: e,
				isFilled: t,
				...s
			}) => e ? n.a.createElement("span", l({}, s, {
				className: Object(r.a)(i.a.compactDownvoteWrapper, s.className)
			}), n.a.createElement(d, {
				className: i.a.compactDownvote,
				isFilled: t
			})) : n.a.createElement("span", l({}, s, {
				className: Object(r.a)(i.a.downvoteWrapper, s.className)
			}), n.a.createElement(d, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/fonts/Upvote/index.m.less": function(e, t, s) {
			e.exports = {
				compactUpvote: "_39UOLMgvssWenwbRxz_iEn",
				compactUpvoteWrapper: "_3wVayy5JvIMI67DheMYra2",
				upvote: "_2Jxk822qXs4DaXwsN7yyHA",
				upvoteWrapper: "_2q7IQ0BUOWeEZoeAxN555e"
			}
		},
		"./src/reddit/icons/fonts/Upvote/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/Upvote/index.m.less"),
				i = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => n.a.createElement("i", {
				className: Object(r.a)(Object(o.b)("upvote", e.isFilled), i.a.upvote, e.className)
			});
			t.b = ({
				compact: e,
				isFilled: t,
				...s
			}) => e ? n.a.createElement("span", l({}, s, {
				className: Object(r.a)(i.a.compactUpvoteWrapper, s.className)
			}), n.a.createElement(d, {
				className: i.a.compactUpvote,
				isFilled: t
			})) : n.a.createElement("span", l({}, s, {
				className: Object(r.a)(i.a.upvoteWrapper, s.className)
			}), n.a.createElement(d, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Link/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M18.4773727,1.51993937 C19.4600354,2.50135191 20.0013751,3.80656808 20.0013751,5.19554812 C20.0013751,6.58577837 19.4600354,7.89099453 18.4773727,8.87240707 C17.9885417,9.35998782 17.1984109,9.35998782 16.7095799,8.87240707 C16.2207489,8.38357611 16.2207489,7.59094484 16.7095799,7.10461429 C17.2196644,6.59452982 17.500961,5.91691759 17.500961,5.19554812 C17.500961,4.47542886 17.2196644,3.79781663 16.7095799,3.28773215 C15.6569056,2.23755822 13.9453721,2.23755822 12.8926978,3.28773215 L8.62324066,7.55843946 C7.57181653,8.6111138 7.57181653,10.3226473 8.62324066,11.3753216 C9.11207162,11.8629024 9.11207162,12.6555336 8.62324066,13.1431144 C8.37945029,13.3869048 8.05939728,13.509425 7.73934427,13.509425 C7.41929127,13.509425 7.09923826,13.3869048 6.85544788,13.1431144 C4.82886225,11.1152785 4.82886225,7.81723232 6.85544788,5.79064668 L11.124905,1.51993937 C13.1502404,-0.505396058 16.4495368,-0.507896472 18.4773727,1.51993937 Z M11.3753215,6.8540728 C11.8641524,6.36524184 12.6542833,6.36524184 13.1431142,6.8540728 C15.1696999,8.88065844 15.1696999,12.1799549 13.1431142,14.2065405 L8.87240693,18.4772478 C7.89099439,19.4586603 6.58452801,20 5.19679818,20 C3.80781814,20 2.50135177,19.4586603 1.51993923,18.4772478 C-0.50664641,16.4506622 -0.50664641,13.1513657 1.51993923,11.1247801 C2.00877019,10.6359491 2.80015125,10.6359491 3.28773201,11.1247801 C3.77656297,11.6136111 3.77656297,12.4037419 3.28773201,12.8925729 C2.23505767,13.9452472 2.23505767,15.6567807 3.28773201,16.709455 C4.34040635,17.7621294 6.05193981,17.7621294 7.10461415,16.709455 L11.3753215,12.4387477 C12.4279958,11.3860734 12.4279958,9.67453992 11.3753215,8.62186558 C10.8864905,8.13303462 10.8864905,7.34290376 11.3753215,6.8540728 Z"
			})))
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, n.a.createElement("g", null, n.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), n.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return c
			}));
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			const r = e => n.a.createElement("svg", {
					className: e.className,
					width: "24",
					height: "24",
					viewBox: "0 0 24 24",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M5.00001 13.41C4.91441 13.4079 4.82982 13.391 4.75001 13.36C4.36493 13.225 3.99331 13.0542 3.64001 12.85L1.53001 13.37C1.4053 13.4019 1.27448 13.4012 1.15014 13.3679C1.02579 13.3347 0.912098 13.27 0.820006 13.18C0.729222 13.0864 0.664059 12.971 0.630783 12.8449C0.597508 12.7188 0.59724 12.5862 0.630006 12.46L1.15001 10.36C0.684603 9.54657 0.393688 8.64513 0.295784 7.71309C0.197881 6.78105 0.295135 5.83883 0.581353 4.94644C0.867572 4.05404 1.33648 3.23103 1.95823 2.5298C2.57997 1.82857 3.34092 1.2645 4.19263 0.873491C5.04433 0.482487 5.96813 0.273123 6.90519 0.258731C7.84225 0.244338 8.77204 0.425233 9.63535 0.789896C10.4987 1.15456 11.2766 1.695 11.9196 2.3768C12.5626 3.05861 13.0565 3.86683 13.37 4.75001C13.4032 4.83336 13.4213 4.92181 13.4236 5.01127C13.0459 4.9912 12.6656 4.99785 12.2855 5.03189C10.5542 5.18694 8.92053 5.90165 7.6316 7.06789C6.34267 8.23414 5.46866 9.78846 5.1418 11.4957C5.02032 12.1302 4.97688 12.773 5.00962 13.4104L5.00001 13.41ZM13 19.75C11.8204 19.7506 10.6615 19.4401 9.64004 18.85L7.53004 19.37C7.40533 19.4019 7.27451 19.4012 7.15017 19.3679C7.02582 19.3347 6.91213 19.2699 6.82004 19.18C6.72925 19.0864 6.66409 18.971 6.63081 18.8449C6.59754 18.7188 6.59727 18.5862 6.63004 18.46L7.15004 16.36C6.41066 15.0718 6.11686 13.5756 6.31416 12.1034C6.51145 10.6312 7.18884 9.26522 8.24132 8.21711C9.29381 7.169 10.6626 6.49731 12.1356 6.30615C13.6086 6.11498 15.1035 6.41502 16.3887 7.15975C17.6739 7.90448 18.6775 9.05233 19.244 10.4254C19.8106 11.7984 19.9084 13.32 19.5224 14.7543C19.1363 16.1886 18.288 17.4556 17.1088 18.3588C15.9296 19.2619 14.4854 19.751 13 19.75Z",
					fill: "inherit"
				})),
				o = e => n.a.createElement("svg", {
					width: "24",
					height: "24",
					viewBox: "0 0 24 24",
					fill: "inherit",
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className
				}, n.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M11.426 16.3838C11.243 16.3088 11.0765 16.1978 10.9385 16.0598L6.43867 11.56C5.85369 10.9751 5.85369 10.0256 6.43867 9.43912C7.02515 8.85414 7.97461 8.85414 8.56108 9.43912L10.5005 11.3785V1.49994C10.5005 0.671973 11.171 0 12.0004 0C12.8284 0 13.5004 0.671973 13.5004 1.49994V11.3785L15.4383 9.43912C16.0248 8.85414 16.9742 8.85414 17.5607 9.43912C18.1457 10.0256 18.1457 10.9751 17.5607 11.56L13.0609 16.0598C12.9229 16.1978 12.7564 16.3088 12.5734 16.3838C12.3889 16.4603 12.1954 16.4993 12.0004 16.4993C11.804 16.4993 11.6105 16.4603 11.426 16.3838ZM20.9991 15.0003C20.9991 14.1724 21.6711 13.5004 22.4991 13.5004C23.3271 13.5004 23.999 14.1724 23.999 15.0003V19.5002C23.999 21.9811 21.9801 24 19.4992 24H4.49982C2.01892 24 0 21.9811 0 19.5002V15.0003C0 14.1724 0.671973 13.5004 1.49994 13.5004C2.32791 13.5004 2.99988 14.1724 2.99988 15.0003V19.5002C2.99988 20.3266 3.67335 21.0001 4.49982 21.0001H19.4992C20.3257 21.0001 20.9991 20.3266 20.9991 19.5002V15.0003Z",
					fill: "inherit"
				})),
				c = e => n.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, n.a.createElement("path", {
					d: "M5,3.723h9v-2H5a3,3,0,0,0-3,3H4A1,1,0,0,1,5,3.723Z"
				}), n.a.createElement("path", {
					d: "M19.294,7.429A1.116,1.116,0,0,0,18.5,7.1h-.009l-2.345.018a1.117,1.117,0,0,0-.613.185h0L13.626,8.562V7.223A1.127,1.127,0,0,0,12.5,6.1H1.5A1.127,1.127,0,0,0,.376,7.223v3.494a8.5,8.5,0,0,1,7.652,7.631H12.5a1.127,1.127,0,0,0,1.125-1.125V15.884l1.91,1.26a1.145,1.145,0,0,0,.609.184l2.347.016H18.5a1.125,1.125,0,0,0,1.125-1.125V8.226A1.116,1.116,0,0,0,19.294,7.429Z"
				}), n.a.createElement("path", {
					d: "M.374,14.764v1.29a3.221,3.221,0,0,1,2.311,2.294H3.971A4.481,4.481,0,0,0,.374,14.764Z"
				}), n.a.createElement("path", {
					d: "M.374,12.1v1.275a5.857,5.857,0,0,1,5.007,4.973H6.644A7.12,7.12,0,0,0,.374,12.1Z"
				})))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/icons/svgs/Report/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
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
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 30 30",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M20.7094669,9.4275 L9.29053307,9.4275 C8.86319398,9.4275 8.51636806,9.0915 8.51636806,8.6775 C8.51636806,8.2635 8.86319398,7.9275 9.29053307,7.9275 L20.7094669,7.9275 C21.136806,7.9275 21.4836319,8.2635 21.4836319,8.6775 C21.4836319,9.0915 21.136806,9.4275 20.7094669,9.4275 M20.7094669,14.142 L9.29053307,14.142 C8.86319398,14.142 8.51636806,13.806 8.51636806,13.392 C8.51636806,12.978 8.86319398,12.642 9.29053307,12.642 L20.7094669,12.642 C21.136806,12.642 21.4836319,12.978 21.4836319,13.392 C21.4836319,13.806 21.136806,14.142 20.7094669,14.142 M20.7094669,18.858 L9.29053307,18.858 C8.86319398,18.858 8.51636806,18.522 8.51636806,18.108 C8.51636806,17.6925 8.86319398,17.358 9.29053307,17.358 L20.7094669,17.358 C21.136806,17.358 21.4836319,17.6925 21.4836319,18.108 C21.4836319,18.522 21.136806,18.858 20.7094669,18.858 M20.7094669,23.5725 L9.29053307,23.5725 C8.86319398,23.5725 8.51636806,23.2365 8.51636806,22.8225 C8.51636806,22.407 8.86319398,22.0725 9.29053307,22.0725 L20.7094669,22.0725 C21.136806,22.0725 21.4836319,22.407 21.4836319,22.8225 C21.4836319,23.2365 21.136806,23.5725 20.7094669,23.5725 M23.95167,4.5 L20.4570891,4.5 C19.9198186,3.6075 18.9335324,3 17.7893165,3 L12.2106835,3 C11.0664676,3 10.0801814,3.6075 9.54291086,4.5 L6.04833002,4.5 C5.19365185,4.5 4.5,5.172 4.5,6 L4.5,25.5 C4.5,26.328 5.19365185,27 6.04833002,27 L23.95167,27 C24.8063482,27 25.5,26.328 25.5,25.5 L25.5,6 C25.5,5.172 24.8063482,4.5 23.95167,4.5"
			})))
		},
		"./src/reddit/icons/svgs/Unlock/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 17",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.9656 14.8328L13.6 13.4672V8.99847C13.6 8.55608 13.2416 8.19848 12.8 8.19848H12V6.59849C12 4.39291 10.2056 2.59853 8 2.59853C6.5712 2.59853 5.328 3.35852 4.624 4.49131L2.1656 2.03294C1.8528 1.72014 1.3472 1.72014 1.0344 2.03294C0.721605 2.34573 0.721605 2.85133 1.0344 3.16413L13.8344 15.964C13.9904 16.12 14.1952 16.1984 14.4 16.1984C14.6048 16.1984 14.8096 16.12 14.9656 15.964C15.2784 15.6512 15.2784 15.1456 14.9656 14.8328ZM4 8.19859H3.2C2.7584 8.19859 2.4 8.55619 2.4 8.99859V14.5986C2.4 15.041 2.7584 15.3986 3.2 15.3986H11.6688L4 7.72979V8.19859ZM10.4 6.59854C10.4 5.27534 9.32319 4.19854 7.99999 4.19854C7.00959 4.19854 6.15839 4.80174 5.79199 5.65934L8.33119 8.19853H10.4V6.59854Z"
			}))
		},
		"./src/reddit/icons/svgs/VideoMute/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M16.41,10.5l1.79-1.79a1,1,0,0,0-1.41-1.41L15,9.09,13.21,7.29a1,1,0,0,0-1.41,1.41l1.79,1.79-1.79,1.79a1,1,0,1,0,1.41,1.41L15,11.91l1.79,1.79a1,1,0,0,0,1.41-1.41Z",
				fill: "#FFFFFF"
			}), n.a.createElement("path", {
				d: "M9.7,1.54a.5.5,0,0,0-.54.09L3.81,6.5H1.5A.5.5,0,0,0,1,7v6a.5.5,0,0,0,.5.5H3.81l5.36,4.87a.5.5,0,0,0,.34.13.49.49,0,0,0,.2,0A.5.5,0,0,0,10,18V2A.5.5,0,0,0,9.7,1.54Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoReplay/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3N5UJK0Os17icJ33e54tfY"
			}
		},
		"./src/reddit/icons/svgs/VideoReplay/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoReplay/index.m.less"),
				c = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				transform: "translate(1 1)"
			}, n.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), n.a.createElement("path", {
				fill: "#fff",
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2"
			})))
		},
		"./src/reddit/icons/svgs/VideoShare/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "fpaVW-I8iox1soX0hTuwb"
			}
		},
		"./src/reddit/icons/svgs/VideoShare/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoShare/index.m.less"),
				c = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, e.className),
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
			})))
		},
		"./src/reddit/icons/svgs/VideoVolume/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M12.67,3.1a1,1,0,0,0-.33,2,5,5,0,0,1,0,9.85,1,1,0,0,0,.17,2h.17a7,7,0,0,0,0-13.79Z",
				fill: "#FFFFFF"
			}), n.a.createElement("path", {
				d: "M9.7,1.54a.5.5,0,0,0-.54.09L3.81,6.5H1.5A.5.5,0,0,0,1,7v6a.5.5,0,0,0,.5.5H3.81l5.36,4.87a.5.5,0,0,0,.34.13.49.49,0,0,0,.2,0A.5.5,0,0,0,10,18V2A.5.5,0,0,0,9.7,1.54Z",
				fill: "#FFFFFF"
			}), n.a.createElement("path", {
				d: "M12,10.86a1,1,0,0,0,1,1.73,3,3,0,0,0,0-5.17,1,1,0,0,0-1,1.73,1,1,0,0,1,0,1.72Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/models/PublicAccessNetwork/index.ts": function(e, t, s) {
			"use strict";
			var a;
			s.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.NOT_STARTED = "NOT_STARTED", e.PUBLISHED = "PUBLISHED", e.IS_LIVE = "IS_LIVE", e.DISCONNECTED = "DISCONNECTED", e.KILLED = "KILLED", e.PURGED = "PURGED", e.ENDED = "ENDED"
				}(a || (a = {}))
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "l", (function() {
				return k
			})), s.d(t, "m", (function() {
				return L
			})), s.d(t, "i", (function() {
				return y
			})), s.d(t, "d", (function() {
				return M
			})), s.d(t, "h", (function() {
				return T
			})), s.d(t, "k", (function() {
				return V
			})), s.d(t, "c", (function() {
				return D
			})), s.d(t, "f", (function() {
				return F
			})), s.d(t, "a", (function() {
				return U
			})), s.d(t, "j", (function() {
				return W
			})), s.d(t, "b", (function() {
				return H
			})), s.d(t, "e", (function() {
				return Z
			})), s.d(t, "g", (function() {
				return K
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				c = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				l = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				m = s("./node_modules/lodash/memoize.js");
			const u = e => e.publicAccessNetwork.listings,
				p = s.n(m)()(e => Object(n.a)(Object(a.a)(u, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var h = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const v = e => e.publicAccessNetwork.models,
				b = e => e.publicAccessNetwork.reports.reported,
				C = e => e.publicAccessNetwork.history,
				x = e => e.publicAccessNetwork.history.cursor,
				f = e => e.publicAccessNetwork.history.visitOrder,
				w = e => e.publicAccessNetwork.hlsStreams,
				E = Object(a.a)(w, e => e.ended),
				N = Object(a.a)(w, e => e.removed),
				_ = Object(a.a)(v, E, N, (e, t, s) => {
					const a = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const a = s.stream.state,
							n = P(a, c.a.ENDED) ? c.a.ENDED : a,
							r = s.stream.vod_accessible;
						return n === a && !0 === r ? e : {
							...e,
							[t]: {
								...s,
								stream: {
									...s.stream,
									state: n,
									vod_accessible: !0
								}
							}
						}
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const a = s.stream.state,
							n = P(a, c.a.ENDED) ? c.a.ENDED : a,
							r = s.stream.vod_accessible;
						return n === a && !1 === r ? e : {
							...e,
							[t]: {
								...s,
								stream: {
									...s.stream,
									state: n,
									vod_accessible: !1
								}
							}
						}
					}, a)
				}),
				k = (e, t) => {
					return _(e)[Object(o.h)(t)]
				},
				I = Object(a.a)((e, {
					streamIdFromPath: t
				}) => t, (e, t) => p(t.listingName)(e, t), _, b, i.h, l.e, (e, t, s, a, n, i) => {
					if (i) {
						const r = [];
						if (e) {
							const t = Object(o.h)(e);
							s[t] && r.push(t)
						}
						const i = r.concat(t),
							l = [...new Set(i)],
							d = new Set([...a, ...n]);
						return l.filter(e => {
							const t = s[e];
							return !d.has(e) && !t.post.isHidden && t.stream.state !== c.a.KILLED && t.stream.state !== c.a.PURGED
						})
					}
					const l = new Set([...a, ...n]);
					return Object.keys(s).filter(e => !l.has(e)).map(e => s[e]).filter(e => e.rank !== r.m).filter(e => !e.post.isHidden).filter(e => e.stream.state !== c.a.KILLED && e.stream.state !== c.a.PURGED).map(e => e.post.id)
				}),
				g = Object(a.a)((e, {
					count: t
				}) => t, _, (e, {
					listingName: t,
					streamIdFromPath: s
				}) => I(e, {
					listingName: t,
					streamIdFromPath: s
				}), (e, t, s) => {
					const a = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? a.slice(0, e) : a
				}),
				L = Object(a.a)(_, g, (e, t) => {
					const s = t[0];
					if (s) return e[s]
				}),
				O = Object(a.a)(f, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: a
				}) => g(e, {
					listingName: t || a,
					streamIdFromPath: s
				}), (e, t) => {
					const s = new Set(e),
						a = t.filter(e => !s.has(e));
					if (a.length) return a[0]
				}),
				j = Object(a.a)((e, {
					streamIdFromPath: t
				}) => t, _, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: a
				}) => g(e, {
					listingName: t || a,
					streamIdFromPath: s
				}), C, (e, t, s, a) => {
					if (!s.length) return;
					const n = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						r = n.find(e => e.stream.state === c.a.IS_LIVE);
					if (r) return r.post.id;
					const o = n.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (a.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return o ? o.post.id : void 0
				}),
				y = Object(n.a)(Object(a.a)(j, _, (e, t) => e ? t[e] : void 0)),
				S = Object(a.a)((e, {
					streamIdFromPath: t
				}) => t ? Object(o.h)(t) : void 0, j, b, i.h, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: a
				}) => g(e, {
					listingName: t || a,
					streamIdFromPath: s
				}), (e, t, s, a, n) => !e || s.includes(e) || a.includes(e) ? t || n[0] : e),
				A = Object(a.a)(x, f, O, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				B = Object(a.a)(x, f, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				M = Object(n.a)(Object(a.a)(S, _, (e, t) => e ? t[e] : void 0)),
				T = Object(n.a)(Object(a.a)(A, _, (e, t) => e ? t[e] : void 0)),
				V = Object(n.a)(Object(a.a)(B, _, (e, t) => e ? t[e] : void 0)),
				D = (Object(n.a)(Object(a.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, _, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => ({
					...t[s],
					preloadedPreviewUrl: e[s]
				})))), Object(a.a)(S, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				F = Object(a.a)((e, {
					streamIdFromPath: t
				}) => t ? k(e, t) : void 0, e => !e || e.chat_disabled);

			function P(e, t) {
				const s = {
					[c.a.NOT_STARTED]: 0,
					[c.a.PUBLISHED]: 1,
					[c.a.IS_LIVE]: 2,
					[c.a.DISCONNECTED]: 2,
					[c.a.ENDED]: 3,
					[c.a.KILLED]: 4,
					[c.a.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const R = Object(a.a)(S, C, (e, t) => e && t.timestamps[e] || 0);
			var U;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(U || (U = {}));
			const W = Object(a.a)(S, _, h.b, (e, t, s) => {
					if (s) return U.INTRO;
					const a = e && t[e];
					if (!a) return U.UNAVAILABLE;
					const n = a.stream.state;
					return n === c.a.IS_LIVE || n === c.a.DISCONNECTED ? U.LIVE : n === c.a.ENDED && a.stream.vod_accessible ? U.VOD : U.UNAVAILABLE
				}),
				H = Object(a.a)(M, W, h.b, d.b, d.o, (e, t, s, a, n) => s ? a : e ? t === U.LIVE || t === U.VOD ? e.stream.hls_url : n : void 0),
				Z = Object(a.a)(M, W, R, (e, t, s) => e ? t === U.LIVE ? e.broadcast_time : t === U.VOD && s < e.broadcast_time ? s : 0 : 0),
				K = (e, t) => {
					const s = v(e);
					return !!s && s[t] && s[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "a", (function() {
				return l
			}));
			var a = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				r = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const o = e => e.publicAccessNetwork.theaterSettings,
				c = Object(a.a)(o, r.n, (e, t) => t && !e.isIntroFinished),
				i = Object(a.a)(o, e => e.lastChatActivityUtcTs),
				l = e => !!e && e + n.a > Date.now()
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/VideoShareModal.0002131ad2f6964d17c6.js.map